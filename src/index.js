// I used defer in the HTML to render JS after HTML content is loaded


/* 
1. on page load, fetches the images using the url 
2. parses the response as JSON
3. adds image elements to the DOM for each 🤔 image in the array
*/


//2. parses the response as JSON

function fetchDogImgData(){
fetch( "https://dog.ceo/api/breeds/image/random/4")
.then((response) => response.json())
.then((data) => addDogImgToDom(data.message))
}
fetchDogImgData()


//3. adds image elements to the DOM for each 🤔 image in the array

function addDogImgToDom(data){
    for (let elements of data){
     const dogImageCont = document.getElementById("dog-image-container")   
     const imageEle = document.createElement('img');
     imageEle.setAttribute("src", elements)
     imageEle.setAttribute('height', '250px' )
     imageEle.setAttribute('width', '260px')
     imageEle.innerHTML = elements
     dogImageCont.appendChild(imageEle)
    }
}


/*    
const breedUrl = "https://dog.ceo/api/breeds/list/all";
After the first challenge is completed, add JavaScript that:

on page load, fetches all the dog breeds using the url above ⬆️
adds the breeds to the page in the <ul> provided in index.html
*/
let dogArray = [];


function fetchDogList(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) =>{
        addBreedsToList(Object.keys(data.message))
        dogArray = data.message
    }) 
    }
fetchDogList()


function addBreedsToList(dogs){
    
 for (let dog of dogs){
    const list = document.getElementById("dog-breeds");
    const listItem = document.createElement("li");
    listItem.innerHTML = dog
    list.appendChild(listItem)
 }
}

// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. 
//This can be a color of your choosing.


const dogList = document.getElementById("dog-breeds")
dogList.addEventListener("click", function (e){
    if(e.target) {
        e.target.style.color = 'blue' 
    }
})

//challenge 4 

document.addEventListener('change', events => {
    console.log(events.target.value)
    let filteredDogs = Object.keys(dogArray).filter(breed => breed.startsWith(events.target.value))
    console.log(filteredDogs)
    const list = document.getElementById("dog-breeds");
    removeAllChildren(list)
    addBreedsToList(filteredDogs)
})

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}