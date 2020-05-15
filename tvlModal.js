// Get the modal
const modal = document.getElementById('myModal')

// Get the button that opens the modal
const btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]

// Get the onPageLoad element that loads the modal automatically
let load = document.getElementById('onPageLoad')

window.onload = () => {
	// When the user clicks the button, open the modal
	const loadModal = () => {
		modal.style.display = 'block'
	}
	loadModal()
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}
