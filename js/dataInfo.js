/* 메모 */
var memo_name = '함께 일하고 싶은 사람이 되는 법_커뮤니케이션 스킬_1';


/* 페이지 */
var dataInfo = new Object();
dataInfo = [
	/* preview */
	{ "flow": "preview", "index": "인트로", "media": "mp4", "app": "none", "sync": "none" },
	{
		"flow": "preview", "index": "사전진단 테스트", "media": "mp3", "app": "assessment",
		"sync": [
			{ "startTime": 0, "syncObj": "none", "effect": "none", "func": "initApp" },
			{ "startTime": 0.5, "syncObj": "assessment-start", "effect": "show-bottom", "func": "initApp" }
		]
	},
	{ "flow": "preview", "index": "학습목표", "media": "mp4", "app": "none", "sync": "none" },
	{ "flow": "preview", "index": "학습내용", "media": "mp4", "app": "none", "sync": "none" },
	/* lesson */
	{ "flow": "lesson", "index": "본강의1", "media": "mp4", "app": "none", "sync": "none" },
	{ "flow": "lesson", "index": "본강의2", "media": "mp4", "app": "none", "sync": "none" },
	{ "flow": "lesson", "index": "본강의3", "media": "mp4", "app": "none", "sync": "none" },
	// { "flow": "lesson", "index": "none", "media": "mp4", "app": "none", "sync": "none" },
	// { "flow": "lesson", "index": "none", "media": "mp4", "app": "none", "sync": "none" },
	// { "flow": "lesson", "index": "none", "media": "mp4", "app": "none", "sync": "none" },
	/* review */
	{
		"flow": "review", "index": "Quiz", "media": "mp3", "app": "quiz",
		"sync": [
			{ "startTime": 0, "syncObj": "none", "effect": "none", "func": "initApp" },
			{ "startTime": 0.5, "syncObj": "quiz-start", "effect": "show-bottom", "func": "initApp" }
		]
	},
	// {
	// 	"flow": "review", "index": "KeyPoint", "media": "mp3", "app": "summary",
	// 	"sync": [
	// 		{ "startTime": 0, "syncObj": "none", "effect": "none", "func": "none" },
	// 		{ "startTime": 0.5, "syncObj": "summary", "effect": "show", "func": "initApp" }
	// 	]
	// },
	/* fine */
	{ "flow": "fine", "index": "Summary", "media": "mp4", "app": "none", "sync": "none" },
	{ "flow": "fine", "index": "Advanced", "media": "mp4", "app": "none", "sync": "none" },
	{ "flow": "fine", "index": "아웃트로", "media": "mp4", "app": "none", "sync": "none" }
]


var goalInfo = new Object();
var goal_exercise = true;
/* 학습내용 */
/*goalInfo["learning"] = [
	"ESG에 관심이 집중되는 이유",
	"ESG 경영과 파타고니아",
			"파타고니아 창업자, 이본 쉬나드",
			"파타고니아에 대한 세 가지 오해"
]*/
/* 학습목표 */
/*goalInfo["goal"] = [
	"넷플릭스 과정의 학습목표입니다 1",
	"넷플릭스 과정의 학습목표입니다 2"
]		
*/

/* 사전진단 테스트 */
var assessmentInfo = new Object();
assessmentInfo = [
	{
		period: 2,
		correct: true,
		question: "가치 충돌과 조직갈등이 일어나는 원인을 알고 있다."
	},
	{
		period: 4,
		correct: true,
		question: "트렌드의 의미에 대해서 알고 있다."
	},
	{
		period: 6,
		correct: true,
		question: "조직갈등을 관리하는 방법을 알고 있다."
	},
	{
		period: 9,
		correct: true,
		question: "퍼실리테이팅과 퍼실리테이터의 의미를 알고 있다."
	},
	{
		period: 12,
		correct: true,
		question: "비폭력대화가 무엇인지 알고 있다."
	},
	{
		period: 13,
		correct: true,
		question: "NVC 중재대화가 무엇인지 알고 있다."
	},
	{
		period: 15,
		correct: true,
		question: "다양성이 주는 역량에 대해서 알고 있다."
	},
	{
		period: 16,
		correct: true,
		question: "액션러닝에 대해서 알고 있다."
	},
	{
		period: 17,
		correct: true,
		question: "디자인씽킹의 개념에 대해서 알고있다."
	},
	{
		period: 19,
		correct: true,
		question: "소통과 공감의 의미에 대해서 알고있다."
	}
];

/* 평가하기 */
var quizInfo = new Object();
quizInfo[1] = [
	{
		"correct": "1", "layout": "column",
		"question":
			"개인은 누구나 가치와 의미를 통해 의사결정한다. "
		,
		"rubric":
			""
		,
		"explain":
			"윤리적인 의사결정 실행모델에 따르면, 윤리적인 의사결정자는 합리적이고 자율적인 의지를 가지고, 모든 사람들에게 적용될 수 있도록 보편타당하며, 상대방의 입장에서도 받아들일 수 있는 가치와 의미를 통해 의사결정한다. "
		,
		"scroll": "none"
	},
	{ "select": "O" },
	{ "select": "X" },
]
quizInfo[2] = [
	{
		"correct": "2", "layout": "column",
		"question":
			"의미의 극대화는 행동교정 만으로 이룰 수 있다."
		,
		"rubric":
			""
		,
		"explain":
			"의미의 극대화는 행동, 습관, 개인의 삶에 적용되는 범위에 의해 결정되며, 행동교정 만으로는 의미의 범위가 축소될 수 있다."
		,
		"scroll": "none"
	},
	{ "select": "O" },
	{ "select": "X" },
]
quizInfo[3] = [
	{
		"correct": "1", "layout": "column",
		"question":
			"진정한 가치와 의미는 경험에 의해 완성된다."
		,
		"rubric":
			""
		,
		"explain":
			"위대한 랍비 ‘오다이바’는 개인이 창출하는 가치와 의미는 삶의 경험을 통해 완성된다는 탈무드의 가르침을 전파하였다."
		,
		"scroll": "none"
	},
	{ "select": "O" },
	{ "select": "X" },
]

/* 정리하기 */
var print_total = 3;
// var summaryInfo = new Object();
// summaryInfo[1] = [
// ]

/* 자막 */
var captionInfo = new Object();
captionInfo = [
	/* Intro */
	{
		"caption":
			"자막 없음"
	},
	/* Issue*/
	{
		"caption":
			"자막 없음."
	},
	/*Goal */
	{
		"caption":
			"자막 없음"
	},

	/*4p*/
	{
		"caption":
			"자막 없음"
	},
	/*5p*/
	{
		"caption":
			"자막 없음 "
	},
	/*6p*/
	{
		"caption":
			"자막 없음"
	},
	/*7p*/
	{
		"caption":
			"자막 없음"
	},
	/*8p*/
	{
		"caption":
			"자막 없음"
	},
	/*Quiz*/
	{
		"caption":
			"자막 없음"
	},
	/*summary*/
	{
		"caption":
			"자막 없음"
	},
	{
		"caption":
			"자막 없음"
	}
]