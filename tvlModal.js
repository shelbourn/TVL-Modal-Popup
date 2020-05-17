// Get the modal
const tvlModal = document.getElementById('tvlModal')

// Get the decline button
const declineButton = document.getElementById('btnDecline')

// Get the accept button
const acceptButton = document.getElementById('btnAccept')

// Get the onPageLoad element that loads the modal automatically
// const load = document.getElementById('tvlOnPageLoad')

// load.onload = () => {
// 	tvlModal.style.display = 'block'
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == tvlModal) {
		tvlModal.style.display = 'none'
	}
}
