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
		modalInfo.textContent = 'Wybierz wszystkie odpowiedzi!'
        return
	}

	checkedAnswers.forEach(answer => {
		const checkIfCorrect = answer.value === 'true'
		const answerBox = answer.closest('.answer-box')

		if (checkIfCorrect) {
			answerBox.classList.add('correct')
			answerBox.classList.remove('incorrect')
		} else {
			answerBox.classList.add('incorrect')
			answerBox.classList.remove('correct')
		}
	})

	if (isTrue && allChecked) {
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Brawo! Wszystkie odpowiedzi są poprawne!'
	}else { 
        modal.classList.add('modal-active')
        modalInfo.textContent = 'Niestety przegrywasz...'
    }
}

const closeModal = () => {
	modal.classList.remove('modal-active')
}

form.addEventListener('submit', handleQuiz)
modalBtn.addEventListener('click', closeModal)
