
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


let lastmod = document.getElementById('lastm')

lastmod.textContent =  `Last Modified: ${document.lastModified}`




let windchilltext = document.querySelector(".windchill")

function calculateWindChill(temperature, windSpeed) {
    // Wind Chill Formula
    const windChill = 13.12 + 0.6215 * temperature 
                    - 11.37 * Math.pow(windSpeed, 0.16) 
                    + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    
    return windChill.toFixed(2); // Redondea a 2 decimales
}

// Ejemplo con temperatura de 5°C y viento de 15 km/h
const temperature = 5;
const windSpeed = 14;

const windChill = calculateWindChill(temperature, windSpeed);

windchilltext.textContent = `Wind Chill: ${windChill} °C`