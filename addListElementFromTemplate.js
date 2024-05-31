const addListElementFromTemplate = () => {
	let template = document.querySelector('#detailed_list_element');
	let clone = template.content.cloneNode(true);
	clone.querySelector('dt').prepend('My JS element')
	clone.querySelector('dd').prepend('My JS element description.....')
	let table = document.querySelector('dl')
	table.append(clone)
}

document.addEventListener("DOMContentLoaded", addListElementFromTemplate)