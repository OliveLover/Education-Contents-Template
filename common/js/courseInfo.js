var courseInfo = new Object();
/* 종합편 */
courseInfo["type0"] = [
	"함께 일하고 싶은 사람이 되는 법 [커뮤니케이션 스킬]",
]
var contentsName = courseInfo["type0"][0];
var skillMSG = new Object();
skillMSG = {
	"fail": "문항이 남았습니다-진단을 완료하여 주세요",
	"success": "수고하셨습니다-진단 결과를 확인하세요"
}

var skillInfo = new Object();
skillInfo = [
	""
]
var skillLevel = 0;

var courseType = "type0";
var courseTitle = courseInfo[courseType][0];
var course_total = courseInfo[courseType].length - 1;
var courseCode = "000";
var cdnUrl = "./mp4/";
var localUrl = "./mp4/";
var captureUrl = "./mp4/";