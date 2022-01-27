const header = document.querySelector("header");
const signIn = document.querySelector(".sign_in");

signIn.addEventListener("click", () => {
  window.scrollTo({top: 200, left: 0, behavior: "smooth"});
  
  console.log("메롱");
});
console.log('왜지');




let headerMoving = (direction) => {
  if (direction === "up"){
    console.log('올려');
  } else if (direction === "down"){
    console.log('내려');
  }
};

let prevScrollTop = 0;
document.addEventListener("scroll", function(){
  let nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
  if (nextScrollTop > prevScrollTop){
    headerMoving("down");
    header.classList.add = "hidden";
  } else if (nextScrollTop < prevScrollTop){
    headerMoving("up");
    header.classList.remove = "hidden";
  }
  prevScrollTop = nextScrollTop;
});