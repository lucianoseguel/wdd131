const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('displayflex');
	hambutton.classList.toggle('show');
});


let lastmod = document.getElementById('lastm')

lastmod.textContent =  `Last Modified: ${document.lastModified}`