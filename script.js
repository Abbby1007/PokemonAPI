/*
fetch = Function use for making HTTP requests to 
fetch resources. (JSON style data, images, files)
simplifies asynchronous data fetching in JavaScript 
and used for interacting with APIs to retrieve
and send data asynchronously over the web.
fetch(url, {options})
*/
// function to load up the pokemon image
// let nextQuestion = 0;
let numQuestion = 0;

// User will start the game, this will trigger the first question

// Then user will get question, the next button will disappear. 
// once user answers the question then the next button will come back
    // whether or not the user is correct or wrong
async function loadImage(){
    // make the next button question disappear
    document.getElementById("next").style.visibility = "hidden";

    numQuestion += 1;
    document.getElementById("question").innerHTML = `<h2 id="question">Question ${numQuestion}/10 <br> type the answer for what pokemon is shown</h2>`
    //Generate random number from 0 to 300
    try{
        const num = Math.floor(Math.random() * 301);

       

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
    // GENERATE THE SPRITE
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const dataName = data.name;
         document.getElementById("number").innerHTML = `${dataName}`;
        const imgElement = document.getElementById(`pokemonSprite`);

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    }
       catch(error){
        console.error(error);
    }


       
async function checkAnswer(num){
    try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
            const data = await response.json();
            // const dataName = data.froms.0.name;

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        //if the inputed pokemon name is equal to the name of the id pokemon
            // then tell the user they are correct
        // if not 
            // then tell the user they are wrong
        if(pokemonName === 'yes'){

        }
    }
       catch(error){
        console.error(error);
    }
}


}

async function fetchData(){




    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById(`pokemonSprite`);
        const number = data.id;
       document.getElementById("number").innerHTML = `${number}`

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }

    catch(error){
        console.error(error);
    }
}
