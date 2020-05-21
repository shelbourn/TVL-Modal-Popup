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
	const cookieName = 'tvlAgeVerification' // The cookie name
	const cookieLifetime = 365 // Cookie expiry in days

	// Setting a cookie
	const _setCookie = (cname, cvalue, exdays) => {
		let d = new Date()
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
		let expires = 'expires=' + d.toUTCString()
		document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
	}

	// Retrieving any stored cookie
	const _getCookie = (cname) => {
		let name = cname + '='
		let ca = document.cookie.split(';')
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i]
			while (c.charAt(0) == ' ') {
				c = c.substring(1)
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length)
			}
		}
		return ''
	}

	// Should the modal be shown?
	const _shouldShowPopup = () => {
		if (_getCookie(cookieName)) {
			return false
		} else {
			return true
		}
	}

	// Show the cookie popup on load if not previously accepted
	if (_shouldShowPopup()) {
		$('#cookieModal').modal('show')
	}

	// Modal dismiss btn - consent
	$('#cookieModalConsent').on('click', function () {
		_setCookie(cookieName, 1, cookieLifetime)
	})
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
