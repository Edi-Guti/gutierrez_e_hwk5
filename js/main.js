(() => {
	console.log("fired!");

	// set up your variable stack -> connections to the elements you're interacting with on the page
	let mobileNav = document.querySelector('.nav'),
		navPanel = document.querySelector('#burgerCon'),

		// select ALL of the nav panel anchor tags (the a elements)
		navLinks = navPanel.querySelectorAll('a');

	function toggleNav(event) {
		// e is the event object. by defualt, anchor tags try to navigate somewhere (this is built-in functionality)  
		// we don't want that to so prevent that default behaviour and write your own
		event.preventDefault();

		// console.log is jus for testing purposes... remove this when you have things working
		console.log('should show nav dropdown');

		// this should only fire when you click on an anchor tag -> "this" is the element you're clicking on
		// and this had a default nodeName (look in the inspector panel to find it)
		if (this.nodeName == "A") { 
			debugger;
			// we clicked on an anchor tag, so do some navgattion
			// window.scrollTo({
			// 	// we can ask the window to scroll to an element on the page => smooth scroll effect
			// 	top: this.offsetTop,
			// 	behavior: 'smooth'
			// })
		}

		// make the mobile nav show up when you click on the nac link at the top right
		// and make it go away again on the second click (so - toggle the display property between block and none)
		navPanel.classList.toggle('show-mobile-nav');
	}

	// these are the triggers that firs off our functionality (when the user clicks on something)
	mobileNav.addEventListener('click', toggleNav);

	// logo thru the links and add event handling for each one
	navLinks.forEach(link => link.addEventListener('click', toggleNav));
})();