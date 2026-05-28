/* ========================= */
/* script.js */
/* ========================= */

function openPage(page){
  window.location.href = page;
}

function goBack(){
  window.location.href = "index.html";
}

function showPhysicsExercise(){

  const area = document.getElementById("physicsExercise");

  area.innerHTML = `
    <h3>⚛ Exercício Resolvido</h3>

    <p><b>Questão:</b> Um carro percorre 100 km em 2 horas. Qual sua velocidade média?</p>

    <p><b>Resolução:</b></p>

    <p>Vm = ΔS / ΔT</p>

    <p>Vm = 100 / 2</p>

    <p><b>Vm = 50 km/h</b></p>

    <p style="color:#f5b041;">
      ✔ Questão resolvida em menos de 1 minuto!
    </p>
  `;
}

function showMathExercise(){

  const area = document.getElementById("mathExercise");

  area.innerHTML = `
    <h3>📐 Exercício Resolvido</h3>

    <p><b>Questão:</b> Resolva: 2x + 4 = 10</p>

    <p><b>Resolução:</b></p>

    <p>2x = 10 - 4</p>

    <p>2x = 6</p>

    <p>x = 3</p>

    <p style="color:#f5b041;">
      ✔ Questão resolvida em menos de 1 minuto!
    </p>
  `;
}

/* efeito dinâmico */

document.addEventListener("mousemove", (e)=>{

  const cards = document.querySelectorAll(".card, .topic-card");

  cards.forEach(card=>{

    let x = (window.innerWidth / 2 - e.pageX)/30;
    let y = (window.innerHeight / 2 - e.pageY)/30;

    card.style.transform = `
      rotateY(${x}deg)
      rotateX(${y}deg)
    `;
  });

});
