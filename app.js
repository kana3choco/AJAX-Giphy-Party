// console.log("Let's get this party started!");

const input = document.querySelector("#search");

async function addGIF(input){
    const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=voazjthSPHXAiPG267faXBlcbJD0IgAv`;
    const res = await axios.get(url); 
    
    // creat div to contain GIFs
    const newGIF = document.createElement("div");
    newGIF.classList.add("newGIF");
    
    if (res.data.data.length !== 0){
        //pick random img from the list
        const img = document.createElement("img");
        let randomNum = Math.floor(Math.random() * res.data.data.length);

        img.src = res.data.data[randomNum].images.original.url;
        //append the img to GIFs
        document.querySelector("#container").appendChild(newGIF).appendChild(img);
    }else {
        alert("Try again! There are no results for the search.");
      }
  }   
//   // add an event listener to the button so that when clicked on, the input value is selected and used as the parameters for the getGiphy function

const btn = document.querySelector("#getGifsBtn");
btn.addEventListener('click', function (e) {
    console.log(e);
    e.preventDefault();
    addGIF(input.value);
    // // resets the input box to empty
    input.value = "";
  });
  
//   const removeBtn = document.querySelector("#removeBtn");
  
//   // when the 'removeBtn' is clicked on, the container is emptied of all the images and the remove button
  $("#removeBtn").on("click", function (event) {
    $("#container").empty();
 })
