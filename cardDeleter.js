const deleteCard = (cardNum) => {
	const cardToRemove = document.getElementById(cardNum)
	contentHook.removeChild(cardToRemove)
}
