
let myButton = document.querySelector('button')

myButton.addEventListener("click", async () => {
    let response = await fetch("http://localhost:5000/get_pokemon_data")
    let finalData = await response.json()
    console.log(finalData);
    let body = document.querySelector('body');
   
    finalData.forEach(element => {
        const para = document.createElement("p");
        // para.id = "my-paragraph"
        para.textContent = element.name
        body.appendChild(para)
     });
   
   
   
    
     // grab HTML element from DOM getElementByID
     // if the element exists (is on the page)
     // removeChild
     // else appendChile
    
 
 })
