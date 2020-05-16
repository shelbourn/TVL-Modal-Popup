// Get the modal
const tvlModal = document.getElementById('tvlModal')

// Get the button that opens the modal
// const tbtn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
const tvlSpan = document.getElementsByClassName('tvlClose')[0]

// Get the onPageLoad element that loads the modal automatically
// const load = document.getElementById('tvlOnPageLoad')

// load.onload = () => {
// 	tvlModal.style.display = 'block'
// }

// window.onload = () => {
// 	// When the user clicks the button, open the modal
// 	const loadModal = () => {
// 		tvlModal.style.display = 'block'
// 	}
// 	loadModal()
// }
// When the user clicks on <span> (x), close the modal
tvlSpan.onclick = function () {
	tvlModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == tvlModal) {
		tvlModal.style.display = 'none'
	}
}
