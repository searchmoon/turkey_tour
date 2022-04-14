const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    header.style.top = "-100px";
    // header.style.transition = "3s, ease-in-out";
  } else {
    header.style.top = "0";
  }
});

//로그인 기능(임시처리)

const btnLogin = document.querySelector(".btn-login");
const inpId = document.querySelector("#inpId");
const inpPw = document.querySelector("#inpPw");

//1. 요소를 querySelector를 통해서 이벤트리스너 부여
btnLogin.addEventListener("click", () => {
  const data = [
    { id: "banana", pw: "1212" },
    { id: "mango", pw: "0000" },
    { id: "mangu", pw: "1313" },
  ];

  for (let i = 0; i < data.length; i++) {
    if (inpId.value === data[i].id && inpPw.value === data[i].pw) {
      console.log("로그인 완료");
      return;
    }
  }
  console.log("로그인 실패");
});

//2. 함수 선언문
// function loginButton() {
//   const data = [
//     { id: "banana", pw: "1212" },
//     { id: "mango", pw: "0000" },
//     { id: "mangu", pw: "1313" },
//   ];

//   for (let i = 0; i < data.length; i++) {
//     if (inpId.value === data[i].id && inpPw.value === data[i].pw) {
//       console.log("로그인 완료");
//       return;
//     }
//   }
//   console.log("로그인 실패");
// }

//3. 함수 표현식
// const loginButton = function () {
//   const data = [
//     { id: "banana", pw: "1212" },
//     { id: "mango", pw: "0000" },
//     { id: "mangu", pw: "1313" },
//   ];

//   for (let i = 0; i < data.length; i++) {
//     if (inpId.value === data[i].id && inpPw.value === data[i].pw) {
//       console.log("로그인 완료");
//       return;
//     }
//   }
//   console.log("로그인 실패");
// };
// 함수선언문은 호이스팅에 영향을 받지만, 함수표현식은 호이스팅에 영향을 받지 않는다.