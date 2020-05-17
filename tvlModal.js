// Get the modal
const tvlModal = document.getElementById('tvlModal')

// Get the decline button
const declineButton = document.getElementById('btnDecline')

// Get the accept button
const acceptButton = document.getElementById('btnAccept')

// Triggering decline button action
declineButton.onclick = () => {
	window.location = 'https://www.google.com'
}

// Setting a cookie to hide the modal for one day
const hideModalCookie = () => {
	let now = new Date()
	let time = now.getTime()
	let expireTime = time + 86400
	now.setTime(expireTime)
	document.cookie = 'verify=true;expires=' + now.toGMTString() + ';path=/'
	tvlModal.style.display = 'none'
}

// Triggering accept button action
acceptButton.onclick = () => {
	tvlModal.style.display = 'none'
}

acceptButton.onclick = () => {
	hideModalCookie()
}

// Get the onPageLoad element that loads the modal automatically
// const load = document.getElementById('tvlOnPageLoad')

// load.onload = () => {
// 	tvlModal.style.display = 'block'
// }
