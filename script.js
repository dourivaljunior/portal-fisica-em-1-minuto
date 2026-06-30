// ===== RESPOSTAS INTERATIVAS =====
document.addEventListener('DOMContentLoaded', () => {
  
  // Perguntas com opções
  const opcoes = document.querySelectorAll('.opcao');
  const botoesResposta = document.querySelectorAll('.btn-resposta');

  // Marcar opção selecionada
  opcoes.forEach(opcao => {
    opcao.addEventListener('click', function() {
      const pai = this.closest('.opcoes');
      pai.querySelectorAll('.opcao').forEach(o => {
        o.classList.remove('selecionada');
      });
      this.classList.add('selecionada');
    });
  });

  // Mostrar resposta correta
  botoesResposta.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const card = this.closest('.pergunta-card');
      const resposta = card.querySelector('.resposta-oculta');
      const opcoesCard = card.querySelectorAll('.opcao');
      
      // Limpa classes anteriores
      opcoesCard.forEach(o => {
        o.classList.remove('certa', 'errada');
      });

      // Define qual é a correta (hardcoded para exemplo)
      // Perceba que a primeira opção é a correta no nosso exemplo
      // Você pode adaptar dinamicamente
      const correta = opcoesCard[1]; // índice 1 = "3,0 s" ou "30 m/s"
      
      // Marca a correta
      correta.classList.add('certa');
      
      // Marca a selecionada como errada se não for a correta
      const selecionada = card.querySelector('.opcao.selecionada');
      if (selecionada && selecionada !== correta) {
        selecionada.classList.add('errada');
      }

      // Mostra a resposta
      resposta.classList.add('visivel');
      
      // Desabilita o botão
      this.disabled = true;
      this.textContent = '✓ Resposta revelada';
      this.style.opacity = '0.6';
    });
  });

  // ===== EFEITO DE SCROLL SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== DETECTA SE O VÍDEO ESTÁ CARREGANDO =====
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.addEventListener('error', function() {
      console.warn('Erro ao carregar vídeo. Verifique o caminho.');
    });
  });

});
