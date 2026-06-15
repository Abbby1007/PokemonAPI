/*
fetch = Function use for making HTTP requests to 
fetch resources. (JSON style data, images, files)
simplifies asynchronous data fetching in JavaScript 
and used for interacting with APIs to retrieve
and send data asynchronously over the web.
fetch(url, {options})
*/

console
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
           throw new Error("Could not fetch resource"); 
        }
        return response.json();
    })

    .then(data => console.log(data.name))
    .catch(error => console.error(error));
