

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
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 22",
    area: 48686,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg"
  },
  {
    templeName: "Córdoba Argentina",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 17",
    area: 48686,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093-main.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "2006, March, 12",
    area: 836486,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
  }
];

createTempleCard(temples);

const argentinaTemples = document.getElementById('argentina-temples').addEventListener('click', () => {
  let argentina = temples.filter(temple => temple.location.includes('Argentina'));
  createTempleCard(argentina);
});

const oldestTemples = document.getElementById('old-temples').addEventListener('click', () => {
  let oldest = temples.filter(temple => new Date(temple.dedicated) < new Date('2000-01-01'));
  createTempleCard(oldest);
});

const largestTemples = document.getElementById('large-temples').addEventListener('click', () => {
  let largest = temples.filter(temple => temple.area > 90000);
  createTempleCard(largest);
});

const smallestTemples = document.getElementById('small-temples').addEventListener('click', () => {
  let smallest = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallest);
})




function createTempleCard(filteredTemples) {
  document.querySelector('.container').innerHTML = ''
  filteredTemples.forEach((temple) => {
  let card = document.createElement('section')
  let name = document.createElement('h3')
  let location = document.createElement('p')
  let dedicated = document.createElement('p')
  let area = document.createElement('p')
  let img = document.createElement('img')

  name.textContent = temple.templeName
  location.textContent = `Location: ${temple.location}`
  dedicated.textContent = `Dedicated: ${temple.dedicated}`
  area.textContent = `Area: ${temple.area} `
  img.setAttribute('src', temple.imageUrl)
  img.setAttribute('alt', `${temple.templeName} image`)
  img.setAttribute('width', '400')
  img.setAttribute('height', '250')
  img.setAttribute('loading', 'lazy')

  card.appendChild(name)
  card.appendChild(location)
  card.appendChild(dedicated)
  card.appendChild(area)
  card.appendChild(img)

  document.querySelector('.container').appendChild(card)

})
}

