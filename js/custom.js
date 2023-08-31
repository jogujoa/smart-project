$(document).ready(function(){       
	
	// for문을 이용해 200개의 이미지 자동 생성
    //imgs변수에 빈 문자열 생성
    var imgs="";

    //for문을 이용하여 변수 i를 0부터 199까지 증가
    for(var i=0;i<50;i++){
        //변수 imgs에 대입연산자를 이용하여 다음 의 태그를 계속해서 200개가 될때까자 누적
        imgs+="<img src='img/pic"+i+".jpg'/>"
    }

    // console.log(imgs);
    //.html() 구문에 조금 전 태그를 반복하며 생성해둔 변수 imgs를 넣어 다시 section 영역 안에 추가
    $("section").html(imgs);


    // 브라우저상에서 마우스 무브시, 이미지가 순차적으로 보이도록 연동
    // e.pageX 값을 백분율화 시키기
    $("body").on("mousemove",function(e){

        //변수 wid에 현재 브라우저의 넓이 값 저장
        var wid=$(window).width();

        //posX에 화면상에 마우스 커서의 x축 좌표 저장
        var posX=e.pageX;

        //변수 percent에 200까지의 백분율 수치 저장
        //Math.floor(수수점을->정수화 시킨다.)
        var percent=Math.floor((posX/wid)*50);

        //해당 백분율 값을 h2에 출력
        $("h3").text(percent);


        //모든 img 태그를 숨김처리
        $("section>img").hide();

        //현재 마우스 커서의 위치에 해당하는 이미지 순서만 보임 처리
        $("section>img").eq(percent).show();
    });
});