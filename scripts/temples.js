

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('displayflex');
	hambutton.classList.toggle('show');
});


let lastmod = document.getElementById('lastm')

lastmod.textContent =  `Last Modified: ${document.lastModified}`


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
	templeName: "Mendoza Argentina",
	location: "Mendoza City, Argentina",
	dedicated: "2024, September, 22",
	area: 56548,
	imageUrl: "https://www.churchofjesuschrist.org/imgs/af7pu96yy3qbqvv6nq1bz9p662c5coek29rsmtkp/full/500%2C/0/default"

  },

  {
	templeName: "Cordoba Argentina",
	location: "Cordoba Cordoba Argentina",
	dedicated: "2015, May, 17",
	area: 56548,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"

  },

   {
	templeName: "Salta, Argentina",
	location: "Salta, Salta, Argentina",
	dedicated: "2024, Jun, 16",
	area: 56548,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"

  }
];


let container = document.querySelector(".container")

function GetTable(dictionary){
	console.log("here")
	for (let i = 0; i < dictionary.length; i++){
		const figure = `<img src=${dictionary[i].imageUrl} alt="Temple" loading="lazy"><p>${dictionary[i].templeName} </p><p>📍 ${dictionary[i].location}</p><p>Area: ${dictionary[i].area}</p>
		<p>Dedication: ${dictionary[i].dedicated}`

		const div = document.createElement("figure")
		div.innerHTML = figure
		console.log(div)
		container.appendChild(div)
		
	}
		
		
}

GetTable(temples)

const newtemples = temples.filter(temple => {
	const date = temple.dedicated.split(",")
	if (date > "2000"){
		return temple
	} 
	 
})