// Declaração variaveis
const question = document.querySelector('#question')
const answersBox = document.querySelector('#answers-box')
const quizzContainer = document.querySelector('#quizz-container')
const scoreContainer = document.querySelector('#score-container')
const letters = ['a', 'b', 'c', 'd']
let points = 0
let actualQuestion = 0

// Perguntas

const questions = [
    {
        'question': 'Inside which HTML element do we put the JavaScript?',
        'answers': [
            {
                'answer': '<script>',
                'correct': true
            },
            {
                'answer': '<javascript>',
                'correct': false
            },
            {
                'answer': '<js>',
                'correct': false
            },
            {
                'answer': '<scripting>',
                'correct': false
            },
        ]

    },

    {
        'question': 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        'answers': [
            {
                'answer': '#demo.innerHTML = "Hello World!";  ',
                'correct': false
            },
            {
                'answer': 'document.getElement("p").innerHTML = "Hello World!";',
                'correct': false
            },
            {
                'answer': 'document.getElementById("demo").innerHTML = "Hello World!";',
                'correct': true
            },
            {
                'answer': 'document.getElementByName("p").innerHTML = "Hello World!";',
                'correct': false
            },
        ]

    },

    {
        'question': 'How to write an IF statement in JavaScript?',
        'answers': [
            {
                'answer': 'if i = 5',
                'correct': false
            },
            {
                'answer': 'if i == 5 then',
                'correct': false
            },
            {
                'answer': 'if i = 5 then',
                'correct': false
            },
            {
                'answer': 'if (i == 5)  ',
                'correct': true
            },
        ]

    },

    {
        'question': 'How do you write "Hello World" in an alert box?',
        'answers': [
            {
                'answer': 'msgBox("Hello World");  ',
                'correct': false
            },
            {
                'answer': 'alertBox("Hello World");',
                'correct': false
            },
            {
                'answer': 'alert("Hello World");',
                'correct': true
            },
            {
                'answer': 'msg("Hello World");',
                'correct': false
            },
        ]

    },

    {
        'question': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'answers': [
            {
                'answer': 'if i =! 5 then  ',
                'correct': false
            },
            {
                'answer': 'if (i != 5) ',
                'correct': true
            },
            {
                'answer': 'if i <> 5',
                'correct': false
            },
            {
                'answer': 'if (i <> 5)',
                'correct': false
            },
        ]
    },

    {
        'question': 'What is the correct way to write a JavaScript array?',
        'answers': [
            {
                'answer': 'var colors = (1:"red", 2:"green", 3:"blue")',
                'correct': false
            },
            {
                'answer': 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue") ',
                'correct': false
            },
            {
                'answer': 'var colors = ["red", "green", "blue"] ',
                'correct': true
            },
            {
                'answer': 'var colors = "red", "green", "blue"',
                'correct': false
            },
        ]

    },

    {
        'question': 'How do you round the number 7.25, to the nearest integer?',
        'answers': [
            {
                'answer': 'Math.round(7.25) ',
                'correct': true
            },
            {
                'answer': 'rnd(7.25)',
                'correct': false
            },
            {
                'answer': 'round(7.25) ',
                'correct': false
            },
            {
                'answer': 'Math.rnd(7.25)',
                'correct': false
            },
        ]

    },

    {
        'question': 'Which event occurs when the user clicks on an HTML element?',
        'answers': [
            {
                'answer': 'onmouseover ',
                'correct': false
            },
            {
                'answer': 'onmouseclick',
                'correct': false
            },
            {
                'answer': 'onchange ',
                'correct': false
            },
            {
                'answer': 'onclick ',
                'correct': true
            },
        ]

    },

    {
        'question': 'How do you find the number with the highest value of x and y?',
        'answers': [
            {
                'answer': 'Math.max(x, y)',
                'correct': true
            },
            {
                'answer': 'Math.ceil(x, y)',
                'correct': false
            },
            {
                'answer': 'top(x, y)',
                'correct': false
            },
            {
                'answer': 'ceil(x, y)',
                'correct': false
            },
        ]

    },

    {
        'question': 'Which operator is used to assign a value to a variable?',
        'answers': [
            {
                'answer': ' = ',
                'correct': true
            },
            {
                'answer': '*',
                'correct': false
            },
            {
                'answer': '-',
                'correct': false
            },
            {
                'answer': 'x',
                'correct': false
            },
        ]

    },
]

// Substituição do quizz para a 1 pergunta
function init(){
    //Criar a 1 pergunta
    createQuestion(0)
   
}

function createQuestion(i){

    // Limpar quest anterior
    const oldButtons = answersBox.querySelectorAll('button')
    oldButtons.forEach(function(btn){
        btn.remove()
    })
    // Alterar text perguntas
    const questionText = question.querySelector('#question-text')
    const questionNumber = question.querySelector('#question-number')

    questionText.textContent = questions[i].question
    questionNumber.textContent = i + 1

    // Insere as alternativas 
    questions[i].answers.forEach(function(answer, i){

        // Cria template btn quizz
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true)
        const latterBtn = answerTemplate.querySelector('.btn-letter')
        const answerText = answerTemplate.querySelector('.question-answer')

        latterBtn.textContent = letters[i]
        answerText.textContent = answer['answer']

        answerTemplate.setAttribute('correct-answers', answer['correct'])

        // Remover hide e template class
        answerTemplate.classList.remove('hide')
        answerTemplate.classList.remove('answer-template')

        // Inserir a alternativa na tela
        answersBox.appendChild(answerTemplate)

        // Inserir um evento de click no botão
        answerTemplate.addEventListener('click', function(){
            checkAnswer(this)
        })

    })
    // Incrementar o número da questão
    actualQuestion++

}
// Verificar respos usuário
function checkAnswer(btn){
    const buttons = answersBox.querySelectorAll('button')

    // Verificar resposta e ativar o btn
    buttons.forEach(function(button){
        if (button.getAttribute('correct-answers') == 'true') {
            button.classList.add('correct-answers')

            //verificar se o usuario acertou
            if(btn === button){
                points++
            }
            
        }
        else{
            button.classList.add('wrong-answer')

        }
    })

    // Exibir a próxima pergunta
    nextQuestion()    
}

function nextQuestion(){
    
    setTimeout(function(){
       
        if(actualQuestion >= questions.length){
            // Apresentar a msg de sucesso
            showSuccesMessage()
        }
        createQuestion(actualQuestion)

    }, 1000)

}
// Exibir a tela final 
function showSuccesMessage(){
    hideOrShowQuizz()

// Trocar dados tela de sucesso
    // calcular score
    const score = ((points / questions.length) * 100).toFixed(2)

    const displayScore = document.querySelector('#display-score span')
    displayScore.textContent = score.toString()

    // alterar o num de perguntas corretas
    const correctAnswers = document.querySelector('#correct-answers')
    correctAnswers.textContent = points

    // alterar total de perguntas
    const totalQuestions = document.querySelector('#questions-qty')
    totalQuestions.textContent = questions.length
}

// Mostrar ou esconder o score

function hideOrShowQuizz(){
    quizzContainer.classList.toggle('hide')
    scoreContainer.classList.toggle('hide')
}
// Reiniciar quizz

const restarBtn = document.querySelector('#restart')

restarBtn.addEventListener('click', function(){
    // Zerar jogo
    actualQuestion = 0
    points = 0
    hideOrShowQuizz()
    init()
})
// Inicialização do quizz
init()
