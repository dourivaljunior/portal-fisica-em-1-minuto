/* ========================= */
/* script.js */
/* ========================= */

/* ABRIR PÁGINAS */

function openPage(page){

  window.location.href = page;
}

/* VOLTAR */

function goBack(){

  window.history.back();
}

/* EFEITO LEVE NO HERO */

document.addEventListener("mousemove",(e)=>{

  const hero =
  document.querySelector(".hero-box");

  if(hero){

    const x =
    (window.innerWidth / 2 - e.pageX) / 60;

    const y =
    (window.innerHeight / 2 - e.pageY) / 60;

    hero.style.transform =
    `
    rotateY(${x}deg)
    rotateX(${y}deg)
    `;
  }
});
