
const button = document.querySelector('button');


let delletebutton = document.createElement('button');







button.addEventListener('click' , function() {// Add new scriptures to list


    const list = document.querySelector('#list')
    const input = document.querySelector('#favchap')
    const li = document.createElement('li');
    delletebutton = document.createElement('button');

    if (input.value == "" ){
        NaN;
    }else{
        li.textContent = input.value;
        li.append(delletebutton);
        list.append(li);
    
        delletebutton.textContent = "❌";
    }

    
    //Delete the li element when the delete button is clicked
    delletebutton.addEventListener('click', function() {
   
        li.remove();
     
     })


    li.append(delletebutton);
    input.value = '';
  
    console.log("Llegaste hasta aca");
	 
})




