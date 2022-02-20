const answer = document.querySelectorAll('.resposta')
const question = document.querySelectorAll('.pergunta')
const iconeSeta = document.querySelectorAll('.pergunta__seta')
const faq = document.querySelectorAll('.questionario__unidade')

for (let contador = 0; contador < question.length; contador++){
    faq[contador].addEventListener('click', () =>{
    answer[contador].classList.toggle('respostaAtiva');
    question[contador].classList.toggle('perguntaAtiva');
    iconeSeta[contador].classList.toggle('pergunta__setaAtiva');
    })
}

