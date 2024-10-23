const datenow = new Date();
const hours = datenow.getHours();
const minutes = datenow.getMinutes();
const seconds = datenow.getSeconds();


const background_1 = document.querySelector('#mainbackground')
const kind_food = document.getElementById('kindoffood')



if (hours >= 19){ //-----------------------Define the image by time
   
    background_1.classList.toggle('dinner')//Change image to DINNER
    

   }
   else if (hours >= 11){
    background_1.classList.toggle('lunch')//Change image to LUNCH
   
   }
   else if (hours <= 11){
    background_1.classList.toggle('breakfast')//Change image to BREAKFAST   
   

}

   
   




function firstmessage(){    //Send the first message in page
let hi = ''

if (hours >= 19){
 hi = `Good Evenning! What do you order for dinner?`

 

}
else if (hours >= 11){
 hi = `Good Afternoon! What do you order for lunch?`
}
else if (hours < 11){
 hi = `Good Morning! What do you order for Breakfast?`
}

console.log(`La hora actual es: ${hours}:${minutes}:${seconds}`);
return hi;

}

const mainmessage = document.querySelector('#mainmessage')

mainmessage.textContent = firstmessage()


console.log(firstmessage())