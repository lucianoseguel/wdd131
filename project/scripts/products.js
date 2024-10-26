let lunchs = {
    Lunch_1 :{name: 'Grilled Chicken Salad', price: '$ 11', place: 'La Rotiserie', time: '15 - 20 min'},
    Lunch_2 :{name: 'Ravioli with Pesto and Vegetables', price: '$ 10.5', place: 'La Marchiggiana', time: '10 - 15 min'},
    Lunch_3 :{name: 'Tuna Sandwich with Whole Grain Bread', price: '$ 8.7', place: 'Subway', time: '5 - 10 min'}
}

let Breakfast = {
  breakfast_1 :{name: 'Avocado Toast with Poached Egg', price: '$ 4.3', place: 'Bianco y nero', time: '5 - 10 min' , img: "desayuno 1.webp"},
  breakfast_2 :{name: 'Oatmeal with Fruits and Nuts', price: '$ 6', place: 'Pretty', time: '10 - 15 min' , img: "desayuno 2.webp" },
  breakfast_3 :{name: 'Yogurt with Granola and Berries', price: '$ 5.1', place: 'La brioche', time: '5 - 10 min' , img: "desayuno 3.webp" }
}




console.log('fin')
//LUNCHES---------------------------

function productgenerator (list)  {

//List ---> Array/Dictionary/Objects
document.write(`<div class="menucontainer">`)
//------
for(let individual in list){

let  image = `images/${list[individual].img}`

  document.write(`<figure>
            <p class="promo">${list[individual].place}</p>
            <div class="hidden"><img src="${image}" alt="Lunch 1" class="foodimg"></div>
            <p class="description">${list[individual].name}</p>
           
            <p class="pricetime">${list[individual].price}</p>
            <p class="pricetime">${list[individual].time}</p>
          </figure>`) }

  document.write(`</div>`)

}

let container_1 = (`<div class="menucontainer">
          <figure>
            <p class="promo">${lunchs.Lunch_1.place}</p>
            <div class="hidden"><img src="images/Almuerzo 1.webp" alt="Lunch 1" class="foodimg"></div>
            <p class="description">${lunchs.Lunch_1.name}</p>
           
            <p class="pricetime">${lunchs.Lunch_1.price}</p>
            <p class="pricetime">${lunchs.Lunch_1.time}</p>
          </figure>
          <figure>
            <p class="promo">${lunchs.Lunch_2.place}</p>
            <div class="hidden"><img src="images/Almuerzo 2.webp" alt="Lunch 2" class="foodimg"></div>
            <p class="description">${lunchs.Lunch_2.name}</p>
           
            <p class="pricetime">${lunchs.Lunch_2.price}</p>
            <p class="pricetime">${lunchs.Lunch_2.time}</p>
          </figure>
          <figure>
            <p class="promo">${lunchs.Lunch_3.place}</p>
            <div class="hidden"><img src="images/Almuerzo 3.webp" alt="Lunch 2" class="foodimg"></div>
            <p class="description">${lunchs.Lunch_3.name}</p>
           
            <p class="pricetime">${lunchs.Lunch_3.price}</p>
            <p class="pricetime">${lunchs.Lunch_3.time}</p>
          </figure>
        </div>` );

//BREAKFAST---------------------------


  let container_2 = productgenerator(Breakfast)



        const lunches = document.querySelector('#lunches')

        lunches.innerHTML = container_1

        const breakfasts = document.getElementById('breaksfasts')
       
        breakfasts.innerText = container_2 