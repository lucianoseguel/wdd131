const datenow = new Date();
const hours = datenow.getHours();
const minutes = datenow.getMinutes();
const seconds = datenow.getSeconds();


const background_1 = document.querySelector('#mainbackground')




if (hours >= 19){ //Define the image
   
    background_1.classList.toggle('dinner')
    
   
   }
   else if (hours >= 11){
    background_1.classList.toggle('lunch')
   }
   else if (hours <= 11){
    background_1.classList.toggle('breakfast')
   }

   
   




function firstmessage(){    //Send the first message in page
let hi = ''

if (hours >= 19){
 hi = `Good Evenning Luciano. What do you like to dinner?`

 

}
else if (hours >= 11){
 hi = `Good Afternoon Luciano. What do you like to lunch?`
}
else if (hours <= 11){
 hi = `Good Morning Luciano. What do you like to Breakfast?`
}

console.log(`La hora actual es: ${hours}:${minutes}:${seconds}`);
return hi

}

const mainmessage = document.querySelector('#mainmessage')

mainmessage.textContent = firstmessage()


console.log(firstmessage())