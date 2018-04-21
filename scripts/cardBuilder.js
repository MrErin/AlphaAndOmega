//hooks
const contentHook = document.querySelector('#cardBox')

//create iterator for card IDs
let idNum = 0

//div factory
const div = (classes) => {
	let div = document.createElement('div')
	div.classList = classes
	return div
}

//when the user enters text into the text area and then clicks create, create a new card element in the DOM.

const newCard = () => {
	//create the card and add a class
	const card = document.createElement('div')
	card.classList = 'card wrapper column'
	card.setAttribute('id', 'card' + idNum)

	//create div for delete button
	const delBtnDiv = div()
	card.appendChild(delBtnDiv)
    
	//create the delete button
	const deleteButton = document.createElement('button')
	deleteButton.classList = 'btn-delete'
	deleteButton.textContent = 'X'
	deleteButton.onclick = function() {deleteCard(card.id)}
	delBtnDiv.appendChild(deleteButton)

	//card's bordered outer div
	const outerDiv = div('wrapper border column')
	card.appendChild(outerDiv)
	
	//div for colorizers
	const colorDiv = div('wrapper')
	outerDiv.appendChild(colorDiv)
	
	//p for bg colorizer
	const bgText = document.createElement('p')
	bgText.textContent = 'Select Card Background Color: '
	colorDiv.appendChild(bgText)
	
	// create bgcolor button
	const bgColorPicker = document.createElement('input')
	bgColorPicker.classList = 'picker'
	bgColorPicker.setAttribute('type', 'color')
	bgColorPicker.onchange = function() {bgColor(card.id, this.value)}
	bgText.appendChild(bgColorPicker)

	//p for font colorizer
	const fontText = document.createElement('p')
	fontText.textContent = 'Select Font Color: '
	colorDiv.appendChild(fontText)

	//create font color button
	const fontColorPicker = document.createElement('input')
	fontColorPicker.classList = 'picker'
	fontColorPicker.setAttribute('type', 'color')
	fontColorPicker.onchange = function() {fontColor(card.id, this.value)}
	fontText.appendChild(fontColorPicker)
	
	//create a randomizer button
	const randomizerButton = document.createElement('button')
	randomizerButton.classList = 'btn'
	randomizerButton.textContent = 'Randomize!'
	randomizerButton.onclick = function() {randomizeCard(card.id)}
	outerDiv.appendChild(randomizerButton)


	//create div for the user text
	const userText = div('wrapper')
	card.appendChild(userText)


	//create the text and add it to the card
	const cardText = document.createElement('p')
	cardText.classList = 'userText'
	cardText.textContent = document.getElementById('textForCard').value
	userText.appendChild(cardText)
    
	//add the card to the DOM
	contentHook.appendChild(card)
	idNum++
}