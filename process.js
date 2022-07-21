// TODO - 페이지 접근시 hero 위치 선정 (처음/시작)
//? localStorage에 hero의 처음 위치를 지정해서 렌더링해면 어떤가?
//? 새로고침/페이지 접근/GaveOver시에 render함수를 만들어서 실행시키는건?

//* - 처음: hero를 가운데에서 시작하기
//* - 시작: hero를 밑으로 위치함

// TODO - hero를 좌우로 움직이게하기
//? content에 relative줘서 hero를 left, right로 움직이게 하기
//* - window에 eventListener로 움직이기 (keyDown)
//* - 정지시 hero는 앞을 보고 시작함 (keyUp)
//* - 바탕화면 끝에 도달하면 정지 -> hero를 앞으로 보게하기

// TODO - 무작위로 귀신이 하늘에서 내려오기
//* - 시작 버튼 클릭 -> 랜덤한 x의 위체에서 귀신 생성
//* - -> 귀신 내려오게하기

// TODO - Count 올라감
//* - 귀신과 접촉시 -> 귀신 죽음 -> count 올라감
//*                          -> 1초뒤 시체 사라짐

// TODO - Gave Over
//* - 귀신이 바닥에 완전히 닿음 -> 진행 중이던 유닛들을 멈추게함
//* - alert 창으로 게임이 종료됬다고 표시
//* - 확인시 화면을 초기화면으로 위치

//~ 참고 문서
//* alert창 이후 이벤트 주기
//* https://stackoverflow.com/questions/9394131/go-to-url-after-ok-button-if-alert-is-pressed/9394143#9394143
