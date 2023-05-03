import styled from "styled-components";

export const MyAppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 100px;
    && h1 {
    color: #ffff;
    font-size:40px;
  }
   @media (max-width: 768px) {
    margin-top: 35px;
   }
`;

export const FormStyled = styled.form`
display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: #dfdeea;
  gap: 100px;
`;

export const InputStyledPokemon = styled.input`
 width: 100%;
  height: 100%;
  border: none;
  color: #222;
  font-weight: 700;
  background-color: transparent;
  font-size: 1rem;
  letter-spacing: 0.5px;


  &::placeholder {
    font-size: 1rem;
    letter-spacing: 0.5px;
    /*color: #c1c0c9;*/
    font-weight: 200;
  }

  &:focus {
    outline: none;
  }
`;
export const ButtonBuscar = styled.button`
    background: linear-gradient(45deg, #421432, #f53);
    outline: none;
    border: 0px solid;
    padding: 10px 15px;
    border-radius: 8px;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    font-weight: 700;
`;

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /*gap: 10px;*/

`

export const PokemonName = styled.h2`
  font-weight: 800;
    font-size: 2em;
    color: #ffffff;
    align-items: center;
    text-transform: capitalize;

`

export const PokemonImg= styled.img`
    width: 200px;
    height: 200px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #421432;
    background: radial-gradient(rgb(91, 98, 95), rgb(0, 0, 0))
`