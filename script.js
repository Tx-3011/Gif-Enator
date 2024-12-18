const inputBox = document.querySelector("#inputBox")
const form = document.querySelector("form")
const img = document.querySelector("img")
// const loading = "./images/loading.gif"
let query;


async function getGif(query){

    img.src = "./images/loading.gif"
    console.log("Image Loading");
    const rawResponse = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UEHN36ASRiIUGyxW3F2iaLPdY23oRAkq&s=${query}`,{mode:"cors"})
    const JSONresponse = await rawResponse.json();
    img.src = JSONresponse.data.images.original.url
    console.log("Image Loaded");


    // fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UEHN36ASRiIUGyxW3F2iaLPdY23oRAkq&s=${query}`,{mode:"cors"})
    // .then(function(response){
    //     img.src = "./images/loading.gif"
    //     console.log("image loading");
    //     return response.json();
    // })
    // .then(function(response){
    //     console.log(response);
    //     img.src = response.data.images.original.url
    //     console.log("image loaded");
        
    // })
}

document.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        event.preventDefault();
        let text = inputBox.value;
        inputBox.value = ""
        query = text.replaceAll(" ","+")
        console.log(query);

        getGif(query);
    }
})

