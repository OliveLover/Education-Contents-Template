var assessmentTotal = Object.keys(assessmentInfo).length;
var assessment_submitted = false;
var assessment_correct = 0;
var assessment_record = Array.from({ length: assessmentTotal }, () => ({
    userAnswer: null,
    result: false
}));

$(document).ready(function () {
    var $contentUI = $("#contentUI");

    var html = `
        <div class="contents-stage" id="assessment-start-bg"></div>
        <div class="syncObj" id="assessment-start">
            <div class="assessment-start-wrap">
                <button class="assessment-start-btn">START</button>
            </div>
        </div>
        <div class="syncObj" id="assessment">
            <div class="assessment-wrap">
            </div>
        </div>`;

    $contentUI.html(html);
    buildAssessment();

    $(".assessment-start-btn").on({
        mouseover: function () {
            $(this).css({ "color": "#ffd600" });
        },
        mouseout: function () {
            $(this).css({ "color": "#fff" });
        },
        click: function () {
            assessment_fn("start");
        }
    });

    mobileBtnSet();
});

function buildAssessment() {
    var $assessmentWrap = $(".assessment-wrap");
    var html = `
        <div class="assessment-container">
            <div class="assessment-column">
                <div>차시</div>
                <div>번호</div>
                <div>문항</div>
                <div>그렇다</div>
                <div>아니다</div>
            </div>`;

    for (var i = 0; i < assessmentTotal; i++) {
        html += `
            <div class="assessment-question-wrap">
                <div class="assessment-question-periodCheck">
                    <span class="period-check">${assessmentInfo[i].period}</span>
                </div>
                <div class="assessment-question-num">${i + 1}</div>
                <div class="assessment-question-text">${assessmentInfo[i].question}</div>
                <div class="assessment-choice">
                    <input type="radio" style="width: 20px; height:20px;" name="assessment-answer${i}" value="true" onclick="recordUserAnswer(${i}, true)">
                </div>
                <div class="assessment-choice">
                    <input type="radio" style="width: 20px; height:20px;" name="assessment-answer${i}" value="false" onclick="recordUserAnswer(${i}, false)">
                </div>
            </div>`;
    }

    html += `
        </div>
        <div class="assessment-result-wrap">
            <div class="assessment-result"></div>
        </div>
        <div id="learning-materials">
            <a href="#" id="downloadLink" download target="_blink" style="text-decoration:none;">
                <button class="assessment-download-btn">학습자료 다운로드</button>
            </a>
        </div>`;

    $assessmentWrap.html(html);

    mobileBtnSet();
    console.log("buildAssessment!!" + "\n" + "---------------------------------------");
}

function recordUserAnswer(index, answer) {
    assessment_record[index].userAnswer = answer;
    var checkCount = assessment_record.filter(record => record.userAnswer !== null).length;

    var $btnContainer = $(".assessment-wrap");
    var $submitBtn = $("<button>", {
        class: "assessment-submit-btn",
        id: "assessment-btn",
        text: "제출",
        css: { visibility: "visible" },
        click: function () {
            var audio = new Audio("./common/mp3/click.mp3");
            audio.play();
            submitAssessment();
        }
    });

    if (checkCount === assessmentTotal && !assessment_submitted) {
        assessment_submitted = true;
        $btnContainer.append($submitBtn);
    }
}

function submitAssessment() {
    var $submitBtn = $("#assessment-btn");
    var $popUp = $(".assessment-result-wrap");
    var $periodCheck = $(".period-check");

    $popUp.css("display", "flex");
    $submitBtn.remove();

    var $btnContainer = $(".assessment-result-wrap");
    var $resultBtn = $("<button>", {
        class: "assessment-material-btn",
        id: "material-download-btn",
        text: "결과 확인",
        click: function () {
            var radioButtons = $('input[type="radio"]');
            radioButtons.css('pointer-events', 'none');

            var audio = new Audio("./common/mp3/click.mp3");
            audio.play();

            $periodCheck.css('display', 'block');
            $popUp.css('display', 'none');
            $resultBtn.remove();
            $(".assessment-download-btn").css('display', 'flex');

            complete_check();
        }
    });

    $btnContainer.append($resultBtn);

    for (var i = 0; i < assessmentTotal; i++) {
        var userAnswer = assessment_record[i].userAnswer;
        var correct_answer = assessmentInfo[i].correct;

        if (userAnswer === correct_answer) {
            assessment_correct++;
            assessment_record[i].result = userAnswer;

            var $imageElement = $("<img>", {
                src: "./common/img/contentUI/assessment/correct.png",
                css: { width: "40px", height: "40px", position: "absolute", zIndex: "2", left: "100px" }
            });

            $periodCheck.eq(i).append($imageElement);
        } else {
            var $imageElement = $("<img>", {
                src: "./common/img/contentUI/assessment/wrong.png",
                css: { width: "40px", height: "40px", position: "absolute", zIndex: "2", left: "100px" }
            });

            $periodCheck.eq(i).append($imageElement);
        }
    }

    grade_fn(assessment_correct);
}

function grade_fn(assessment_correct) {
    var my_grade;
    var image = document.getElementsByClassName("assessment-result")[0];
    var downloadLink = document.getElementById("downloadLink");
    var levelImage;
    var zipFile;

    if (assessment_correct / assessmentTotal >= 0.7) {
        my_grade = "Advanced";
        levelImage = "./common/img/contentUI/assessment/level3.png";
        zipFile = "./down/Advanced.zip";
    } else {
        my_grade = "Intermediate";
        levelImage = "./common/img/contentUI/assessment/level2.png";
        zipFile = "./down/Intermediate.zip";
    }

    image.style.background = "url('" + levelImage + "') no-repeat";
    image.style.backgroundSize = "contain";
    downloadLink.href = zipFile;

    console.log(
        "grade_fn!!" + "\n" +
        "my_grade : " + my_grade + "\n" +
        "---------------------------------------"
    );
}

function assessment_fn(_btn) {
    console.log("assessment_fn : " + _btn);
    switch (_btn) {
        case 'start':
            // playerGoto(10);
            $("#assessment").show();
            break;
        case 'retry':
            reset_fn();
            break;
    }
}

function reset_fn() {
    app_complete = "incomplete";
    balloon_toggle("hide");
    assessment_submitted = false;
    assessment_correct = 0;
    assessment_record = Array.from({ length: assessmentTotal }, () => ({
        userAnswer: null,
        result: false
    }));
    buildAssessment();
}

function complete_check() {
    app_complete = "complete";
    if (isPlaying == false && $("#balloonUI").css("display") == "none") {
        balloon_toggle("show");
        console.log("complete!!!");
    }
}

function initApp() {
    reset_fn();
}