
/* 
1. on page load, fetches the images using the url above ⬆️
2. parses the response as JSON
3. adds image elements to the DOM for each 🤔 image in the array
*/


// Global Variables
const dogImageCont = document.getElementById("dog-image-container")
console.log(dogImageCont)



function fetchData(){
fetch( "https://dog.ceo/api/breeds/image/random/4")
.then((response) => response.json())
.then((data) => addDom(data.message))
}
fetchData()


function addDom(data){
    for (let elements of data){
     const imageEle = document.createElement('img');
     imageEle.setAttribute("src", elements)
     imageEle.setAttribute('height', '250px' )
     imageEle.setAttribute('width', '250px')
     imageEle.innerHTML = elements
     dogImageCont.appendChild(imageEle)
    }
}

