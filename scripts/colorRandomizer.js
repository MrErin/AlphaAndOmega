const randomRGBColor = () => {
	return Math.floor(Math.random() * 256)
}

const makeColorCode = () => {
	let red = randomRGBColor()
	let green = randomRGBColor()
	let blue = randomRGBColor()
	const rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
	return rgbColor
}


const randomizeCard = (card) => {
	let bgColorizer = makeColorCode()
	let fontColorizer = makeColorCode()
	let cardToChange = document.getElementById(card)
	cardToChange.style.color = fontColorizer
	cardToChange.style.backgroundColor = bgColorizer
}