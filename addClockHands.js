const setAttributes = (element, attributes) => {
	for (let key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

const generateHand = (properties, parentEl) => {
	let element = document.createElementNS("http://www.w3.org/2000/svg", 'line')
	setAttributes(element, properties)
	parentEl.append(element)
}

let addClockHands = () => {
	let faceEl = document.querySelector('.face')
	let cx = Number.parseInt(faceEl.getAttribute('cx'))
	let cy = Number.parseInt(faceEl.getAttribute('cy'))
	let rO = Number.parseInt(faceEl.getAttribute('r'))
	let rIscaler = Number.parseFloat(faceEl.dataset.riscaler)
	let rI = rIscaler * rO
	clockEl = document.querySelector('#clock')

	const handsProperties = [
		{ x1: cx, y1: cy, x2: cx, y2: cy - rI * 0.5, 'stroke-width': 1.5, class: "hourhand" },
		{ x1: cx, y1: cy, x2: cx, y2: cy - rI * 0.7, 'stroke-width': 1, class: "minutehand" },
		{ x1: cx, y1: cy + rO * 0.2, x2: cx, y2: cy - rI, 'stroke-width': 0.4, class: "secondhand" }
	]

	handsProperties.map(handProperties => generateHand(handProperties, clockEl))
}


document.addEventListener("DOMContentLoaded", addClockHands)