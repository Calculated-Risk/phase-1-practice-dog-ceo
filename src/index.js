console.log('%c HI', 'color: firebrick')

/* 
1. on page load, fetches the images using the url above ⬆️
2. parses the response as JSON
3. adds image elements to the DOM for each 🤔 image in the array
*/

document.addEventListener("DOMContentLoaded", fetchData)

// Global Variables

const dogImageCont = document.getElementById("dog-image-container")
console.log(dogImageCont)



function fetchData(){
fetch( "https://dog.ceo/api/breeds/image/random/4")
.then((response) => response.json())
.then((data) => console.log(data) )
.catch((error) => console.log('error!:', error))
}