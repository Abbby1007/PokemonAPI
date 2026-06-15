/*
fetch = Function use for making HTTP requests to 
fetch resources. (JSON style data, images, files)
simplifies asynchronous data fetching in JavaScript 
and used for interacting with APIs to retrieve
and send data asynchronously over the web.
fetch(url, {options})
*/
fetchData();

async function fetchData(){


    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();7

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById(`pokemonSprite`);

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }

    catch(error){
        console.error(error);
    }
}
