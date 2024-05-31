let createTickEl = function(idx, coordinates) {
	let tick = document.createElementNS("http://www.w3.org/2000/svg", 'line')
	for (let label of Object.keys(coordinates)) {
        	tick.setAttribute(label, coordinates[label][idx])
    	}
    	return tick
}

let createTextEl = function(idx, coordinates) {
	if (idx%3 !== 0)
		return null
	let tick = document.createElementNS("http://www.w3.org/2000/svg", 'text')
	tick.setAttribute('x', coordinates['x1'][idx])
	tick.setAttribute('y', coordinates['y1'][idx])
	tick.setAttribute('class', 'tickNumber')
	tick.setAttribute('stroke-width', 0.1)
	switch (idx) {
  		case 0:
    			tick.setAttribute('text-anchor', 'middle')
			idx=12
    			break;
  		case 3:
    			tick.setAttribute('dominant-baseline', "middle")
    			break;
		case 6:
    			tick.setAttribute('text-anchor', 'middle')
			tick.setAttribute('dominant-baseline', "text-before-edge")
    			break;
  		case 9:
    			tick.setAttribute('text-anchor', 'end')
			tick.setAttribute('dominant-baseline', "middle")
    			break;
	}
	tick.append(idx)
	console.log(tick)
	return tick
}

let createTickEls = () => {
    let idxs = new Array(12).fill(0)
    idxs = idxs.map((val, i) => i)
    let angles = idxs.map(idx => idx/12 * 2* Math.PI)
    

    let faceEl = document.querySelector('.face')
    let cx = Number.parseInt(faceEl.getAttribute('cx'))
    let cy = Number.parseInt(faceEl.getAttribute('cy'))
    let rO = Number.parseInt(faceEl.getAttribute('r'))
    let rIscaler = Number.parseFloat(faceEl.dataset.riscaler)
    let rI = rIscaler * rO
    let rOs = idxs.map(idx => idx%3 == 0 ? rO*1.1 : rO)
    let rIs = idxs.map(idx => idx%3 == 0 ? rI*0.9 : rI)

    let coordinates = new Object()
    coordinates['x1'] = idxs.map(idx => cx + rOs[idx]*Math.sin(angles[idx]))
    coordinates['y1'] = idxs.map(idx => cy - rOs[idx]*Math.cos(angles[idx]))
    coordinates['x2'] = idxs.map(idx => cx + rIs[idx]*Math.sin(angles[idx]))
    coordinates['y2'] = idxs.map(idx => cy - rIs[idx]*Math.cos(angles[idx]))

    let clockEl = document.querySelector('#clock')
    idxs.map(idx => clockEl.append(createTickEl(idx, coordinates)))
    idxs.map(idx => clockEl.append(createTextEl(idx, coordinates)))
}

document.addEventListener("DOMContentLoaded", createTickEls)