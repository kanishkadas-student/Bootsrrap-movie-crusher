$('body').scrollspy({
	target: '#main-nav'
});

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
	// Check for a hash value
	if (this.hash !== '') {
		// Prevent default behavior
		e.preventDefault();

		// Store hash
		const hash = this.hash;

		// Animate smooth scroll
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 350, function () {
			// Add hash to URL after scroll
			window.location.hash = hash;
		});
	}
});

$('[data-toggle="tooltip"]').tooltip();


const searchFun = () => {
	let filter = document.getElementById('searchBar').value.toUpperCase();
	let col = document.getElementById('movie-section');
	let eachCard = col.getElementsByClassName('mt-2');

	for (var i = 0; i < eachCard.length; i++) {
		let name = eachCard[i].getElementsByTagName('h6')[0];

		if (name) {
			let textValue = name.innerText;
			if (textValue.toUpperCase().indexOf(filter) > -1) {
				eachCard[i].style.display = "";
			} else {
				eachCard[i].style.display = "none";
			}
		}
	}
}
