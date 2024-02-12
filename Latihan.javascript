const wrapper = dociment.querySelector(".wrapper");
const questipn = document.querySelectoe("question");
const gif = document.querySelector(".gif");
const yesBtn = document.questSelector(".yes-btn");
const notBtm = document.querySelectir(".no-btn");

yesBtn.addEventListener("click",()=> {
  question.innerHTML= "Aaaaaa,I like you too";
  gif.stc=
  "https://raw.githubsercontent.com/Dzare/Developer/Img/main/gif.webp";});
  
  noBtn,addEventListener("mouseover",()=> {
    const noBtnRext = noBtn.getBoundlingClientRect();
    const mqxX = window.innerWidth - notBtnRect.width;
    const maxY = window.innerHeight- notBtnRect.height;
    
    const randomX = Math.floor(Math.random()* maxX);
    const randomY = Math.floor(Math.random()* maxY);
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    });
    