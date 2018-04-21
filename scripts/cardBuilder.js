//hooks
const contentHook = document.querySelector('#cardBox')

//create iterator for card IDs
let idNum = 0

//when the user enters text into the text area and then clicks create, create a new card element in the DOM.

const newCard = () => {
	//create the card and add a class
	const card = document.createElement('div')
	card.classList = 'card'
	card.setAttribute('id', 'card' + idNum)
    
	//create the delete button
	const deleteButton = document.createElement('button')
	deleteButton.classList = 'btn'
	deleteButton.textContent = 'Delete Card'
	deleteButton.onclick = function() {deleteCard(card.id)}
	card.appendChild(deleteButton)
	
	// create bgcolor button
	const bgColorPicker = document.createElement('input')
	bgColorPicker.classList = 'picker'
	bgColorPicker.setAttribute('type', 'color')
	bgColorPicker.onchange = function() {bgColor(card.id, this.value)}
	card.appendChild(bgColorPicker)

	//create font color button
	const fontColorPicker = document.createElement('input')
	bgColorPicker.classList = 'picker'
	fontColorPicker.setAttribute('type', 'color')
	fontColorPicker.onchange = function() {fontColor(card.id, this.value)}
	card.appendChild(fontColorPicker)
	
	//create a randomizer button
	const randomizerButton = document.createElement('button')
	randomizerButton.classList = 'btn'
	randomizerButton.textContent = 'Randomize!'
	randomizerButton.onclick = function() {randomizeCard(card.id)}
	card.appendChild(randomizerButton)


	//create the text and add it to the card
	const cardText = document.createElement('p')
	cardText.classList = 'userText'
	cardText.textContent = document.getElementById('textForCard').value
	card.appendChild(cardText)
    
	//add the card to the DOM
	contentHook.appendChild(card)
	idNum++
}