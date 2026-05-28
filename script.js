/* ========================= */
/* script.js */
/* ========================= */

function openPage(page){

  window.location.href = page;
}

function goBack(){

  window.history.back();
}

/* efeito mouse */

document.addEventListener("mousemove",(e)=>{

  const hero = document.querySelector(".hero-box");

  const x = (window.innerWidth / 2 - e.pageX)/40;

  const y = (window.innerHeight / 2 - e.pageY)/40;

  hero.style.transform =
  `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* partículas douradas */

const bg = document.querySelector(".background-animation");

for(let i=0;i<40;i++){

  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.position = "absolute";

  particle.style.width = "4px";

  particle.style.height = "4px";

  particle.style.background = "gold";

  particle.style.borderRadius = "50%";

  particle.style.left = Math.random()*100+"%";

  particle.style.top = Math.random()*100+"%";

  particle.style.opacity = Math.random();

  particle.style.animation = `
  floatParticle
  ${5 + Math.random()*10}s
  linear infinite`;

  bg.appendChild(particle);
}

/* css dinâmica */

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatParticle{

  0%{
    transform:translateY(0px);
    opacity:0;
  }

  50%{
    opacity:1;
  }

  100%{
    transform:translateY(-100px);
    opacity:0;
  }
}
`;

document.head.appendChild(style);
