const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))

const modal = document.querySelector('.modal')
const modalInfo = modal.querySelector('p')
const modalBtn = modal.querySelector('.close-modal')

const allQuestions = document.querySelectorAll('.question')

const handleQuiz = e => {
	e.preventDefault()

	const checkedAnswers = answers.filter(answer => answer.checked)
	const isTrue = checkedAnswers.every(answer => answer.value === 'true')
	const allChecked = checkedAnswers.length === allQuestions.length
	console.log(allChecked)

	if (!allChecked) {
        modal.classList.add('modal-active')
    
    }
}

form.addEventListener('submit', handleQuiz)
