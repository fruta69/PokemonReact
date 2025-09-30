import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonCard from './components/PokemonCard';
import Search from './components/Search';
import { fetchPokemons } from './services/pokemonService';
import header from './assets/header.jpeg'

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [FilteredPokemons, setFilteredPokemons] = useState([]);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredPokemons(pokemons);
        } else {
            setFilteredPokemons(pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().startsWith(
                    query.toLowerCase()
                )));
        }
    };

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPokemons(data.results);
                setFilteredPokemons(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <div className="container shadow mx-auto w-75">
            <div className="header mb-5">
                <img src={header} alt="header" class="w-100" />
            </div>
            <div className="row p-3 justify-content-center">
                <Search onSearch={handleSearch} />
            </div>
            <div className="row p-3 justify-content-center">
                {FilteredPokemons.map((pokemon) => (
                    <div class="col-md-6 col-lg-4 mb-3">
                        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default App;
