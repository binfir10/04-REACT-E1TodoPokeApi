import React, { useState } from 'react';
import axios from 'axios';
import { ButtonBuscar, FormStyled, InputStyledPokemon, MyAppContainer, PokemonContainer, PokemonImg, PokemonName } from './PokeApiStyles';

const PokeApi = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        setPokemonName(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPokemonData(null)
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
            );
            setPokemonData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError("Pokemon no encontrado, busca bien!");
            setIsLoading(false);
        }
    };

    return (
        <MyAppContainer>
            <h1>POKÉAPPI</h1>
            <FormStyled onSubmit={handleSubmit}>
                <InputStyledPokemon type="text" placeholder="Ingresa un ID" value={pokemonName} onChange={handleChange} />
                <ButtonBuscar type="submit">Buscar</ButtonBuscar>
            </FormStyled>
            
            {isLoading && <p style={{color: 'yellow'}}>Cargando...</p>}
            {error && <h2 style={{ color: "#F24C4C" }}>{error}</h2>}
            {pokemonData && (
                <PokemonContainer>
                    <PokemonName>{pokemonData.name}</PokemonName>
                    <PokemonImg
                        src={pokemonData.sprites?.other.home.front_default}
                        alt={`${pokemonData.name} sprite`}
                    />
                </PokemonContainer>
            )}
        </MyAppContainer>
    );
}

export default PokeApi;