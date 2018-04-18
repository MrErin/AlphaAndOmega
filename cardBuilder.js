//hooks
const contentHook = document.querySelector('#cardBox')

//create iterator for card IDs
let idNum = 0

//when the user enters text into the text area and then clicks create, create a new card element in the DOM.

const newCard = () => {
	//create the card and add a class
	const card = document.createElement('div')
	card.classList = 'userCard'
	card.setAttribute('id', 'card' + idNum)
    
	//create the delete button
	const deleteButton = document.createElement('button')
	deleteButton.classList = 'deleteButton'
	deleteButton.textContent = 'Delete Card'
	deleteButton.setAttribute ('id','button' + idNum)
	deleteButton.onclick = function() {deleteCard(card.id)}
	card.appendChild(deleteButton)
    
	//create the text and add it to the card
	const cardText = document.createElement('p')
	cardText.classList = 'userText'
	cardText.textContent = document.getElementById('textForCard').value
	card.appendChild(cardText)
    
	//add the card to the DOM
	contentHook.appendChild(card)
	idNum++
}

const deleteCard = (cardNum) => {
	const cardToRemove = document.getElementById(cardNum)
	contentHook.removeChild(cardToRemove)
}
