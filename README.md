# Education-Contents-Template

### Introduce
![image2](https://github.com/OliveLover/Education-Contents-Template/assets/118647313/83c411d5-ab21-457b-8263-22311cf7820a)

인터넷 브라우저의 웹보안 정책인 자동재생방지에 따른 보호페이지입니다.

![image3](https://github.com/OliveLover/Education-Contents-Template/assets/118647313/99730a23-3206-4dff-bb24-94ebdec16a78)

교육생들의 수준을 알기위한 설문페이지입니다.

![image4](https://github.com/OliveLover/Education-Contents-Template/assets/118647313/88f09f22-1f8c-43da-8b1e-5684e97c4c8c)

실제 영상을 재생하면 영상이 나오며 교육이 시작됩니다.

![image5](https://github.com/OliveLover/Education-Contents-Template/assets/118647313/112fd70a-d890-47aa-bf6e-cd3cba409425)

교육이 끝난후 교육생들의 수준을 점검하기 위한 퀴즈입니다.

![image6](https://github.com/OliveLover/Education-Contents-Template/assets/118647313/76d5f6ff-8469-43ff-b0f5-9cb208c8dc63)

이 교육콘텐츠의 목차구성입니다. 클릭시 이동이 가능합니다.

### 구조

```HTML
<body>
	<div id="container">
		<div id="wrap">
			<div id="mediaUI">
				<video id="learningVideo" autoplay playsinline>
					<source src="" type="video/mp4" />
				</video>
			</div>
			<div id="contentUI"></div>
			<div id="headerUI"></div>
			<div id="captionUI"></div>
			<div id="indexUI"></div>
			<div id="balloonUI"></div>
			<div id="navigationUI"></div>
			<div id="mobileUI"></div>
		</div>
		<div id="memoUI"></div>
	</div>
	<div id="loadingUI"></div>
</body>
```

이와같은 구조로 교육 컨텐츠의 페이지마다 동일한 코드를 사용하여 수정과 확장에 유리합니다.
상세한 설정은 `JavaScript`로 조정합니다.

### 주요 기능
- 영상 재생 (타업체 참조)
- 목차 (타업체 참조하여 수정)
- 학습자료 다운로드 (기업의 요구사항으로 구현)
- 작성한 메모를 txt파일로 저장 (기업의 요구사항으로 구현)
- 작성한 메모를 삭제 (기업의 요구사항으로 구현)
- 작성한 메모 인쇄 (기업의 요구사항으로 구현)
- 수준확인을 위한 설문조사와 수준에 따른 자료 다운로드(기업의 요구사항으로 구현)
- OX퀴즈 (기업의 요구사항으로 타업체 참조하여 구현)
