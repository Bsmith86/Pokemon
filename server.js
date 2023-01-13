const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('working');
});

app.get("/get_pokemon_data", (req, res) => {
    const pokemon = [
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur", age: 3},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur", age: 4},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur", age: 5},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander", age: 2},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard", age: 7},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle", age: 8},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle", age: 6}
    ];
    res.send(pokemon);
})

app.listen(5000, () => {

    console.log(`Server is Listening on 5000`)
})