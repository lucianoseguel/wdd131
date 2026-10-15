let products = {
  "P001": {
    name: "Large Mediterranean Salad",
    price: 12.50,
    description: "A vibrant mix of fresh romaine lettuce, ripe tomatoes, crisp cucumber, crumbled feta cheese, and a light, homemade olive oil vinaigrette. High in vitamins and healthy fats.",
    stock: 45,
    imagePath: "images/Products/Large-Mediterranean-Salad.jpg"
  },
  "P002": {
    name: "Grilled Chicken & Veggie Sandwich",
    price: 8.99,
    description: "Whole-grain bread filled with grilled lean chicken breast, fresh spinach, sliced bell peppers, and a light Dijon mustard spread.",
    stock: 62,
    imagePath: "images/Products/Grilled Chicken & Veggie Sandwich.jpg"
  },
  "P003": {
    name: "Vegan Quinoa Power Bowl",
    price: 14.75,
    description: "Fluffy quinoa base topped with black beans, avocado slices, corn kernels, and a zesty lime-cilantro dressing. Excellent source of plant-based protein.",
    stock: 30,
    imagePath: "images/Products/Vegan Quinoa Power Bowl.jpg"
  },
  "P004": {
    name: "Energizing Green Smoothie",
    price: 7.50,
    description: "A nutrient-dense blend of fresh spinach, green apple, banana, chia seeds, and almond milk for sustained energy.",
    stock: 88,
    imagePath: "images/Products/Energizing Green Smoothie.jpg"
  },
  "P005": {
    name: "Hummus & Veggie Wrap",
    price: 6.50,
    description: "Whole wheat tortilla filled with creamy homemade hummus, shredded carrots, sliced cucumber, and fresh sprouts for a light meal.",
    stock: 55,
    imagePath: "/images/wrap_hummus.jpg"
  },
  "P006": {
    name: "Baked Salmon with Asparagus",
    price: 22.00,
    description: "Flaky salmon fillet baked with lemon and herbs, served alongside tender, lightly roasted asparagus spears.",
    stock: 18,
    imagePath: "/images/salmon_asparagus.jpg"
  },
  "P007": {
    name: "Greek Yogurt & Berries",
    price: 4.25,
    description: "Thick, creamy Greek yogurt naturally sweetened with a handful of fresh blueberries and raspberries.",
    stock: 95,
    imagePath: "/images/yogurt_berries.jpg"
  },
  "P008": {
    name: "Avocado & Egg Toast",
    price: 5.50,
    description: "Hearty whole-grain toast topped with mashed avocado, a perfectly poached egg, and a sprinkle of red pepper flakes.",
    stock: 70,
    imagePath: "/images/avocado_egg.jpg"
  },
  "P009": {
    name: "Turkey & Veggie Wrap",
    price: 9.50,
    description: "Whole wheat wrap filled with lean turkey slices, crisp lettuce, tomato, and a light layer of low-fat cheese.",
    stock: 40,
    imagePath: "/images/wrap_turkey.jpg"
  },
  "P010": {
    name: "Tropical Fruit Smoothie",
    price: 8.00,
    description: "A refreshing blend of mango, pineapple, coconut water, and a touch of ginger for an exotic and revitalizing taste.",
    stock: 65,
    imagePath: "/images/tropical_smoothie.jpg"
  },
  "P011": {
    name: "Veggie Spring Rolls",
    price: 7.00,
    description: "Crispy rice paper rolls filled with julienned carrots, shredded cabbage, and savory tofu for a light appetizer.",
    stock: 50,
    imagePath: "/images/veggie_rolls.jpg"
  },
  "P012": {
    name: "Nuts & Fruit Snack Mix",
    price: 4.99,
    description: "A perfect grab-and-go mix of raw almonds, walnuts, and fresh dried cranberries for a satisfying energy boost.",
    stock: 110,
    imagePath: "/images/nuts_fruit_snack.jpg"
  },
  "P013": {
    name: "Lentil & Vegetable Salad",
    price: 11.25,
    description: "Hearty salad featuring cooked lentils, finely chopped onion, fresh tomato, and parsley tossed in a light lemon-tahini dressing.",
    stock: 35,
    imagePath: "/images/lentil_salad.jpg"
  },
  "P014": {
    name: "Wholemeal Turkey Sandwich",
    price: 7.99,
    description: "A satisfying sandwich on wholemeal bread with lean turkey slices, crisp lettuce, and fresh tomato slices.",
    stock: 58,
    imagePath: "/images/sandwich_turkey_wholemeal.jpg"
  },
  "P015": {
    name: "Baked Fruit Dessert",
    price: 5.75,
    description: "A naturally sweet and wholesome dessert of baked apples and mixed berries, lightly spiced with cinnamon.",
    stock: 90,
    imagePath: "/images/baked_fruit.jpg"
  }
};


const card_container = document.querySelector(".promos-section")


function displayCard (array, container){
  

  let counter = 0
  for (product in array){
    if (counter < 4 ){
  
     let product_id = array[product]
      let card = document.createElement("div")
      let img = document.createElement("img")
      let link = document.createElement("a")
      link.href = "menu.html"
      img.src = product_id.imagePath
      img.alt = product_id.name
      img.loading = "lazy"

      let product_name = document.createElement("h3")
      product_name.textContent = product_id.name
      let price = document.createElement("p")
      price.textContent = `$ ${product_id.price}`
      

      card.appendChild(img)
      card.appendChild(product_name)
      card.appendChild(price)
      link.appendChild(card)
      container.appendChild(link)
     
      
      counter++
      console.log(card)

    }

  }

}


displayCard(products, card_container)