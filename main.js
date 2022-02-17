const answer = document.querySelectorAll('.resposta')
const question = document.querySelectorAll('.pergunta')


/*question.addEventListener('click', () => {
    answer.classList.remove('resposta');
    answer.classList.add('respostaAtiva');
   }
)*/

for (let contador = 0; contador < question.length; contador++){
    question[contador].addEventListener('click', () =>{
    answer[contador].classList.toggle('respostaAtiva');
    })
}
