import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {SiPokemon, SiTodoist} from "react-icons/si"


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 5rem;

  && h1 {
    font-size: 35px;
    color: white;
      @media (max-width: 990px) {
        font-size: 25px;
    }
  }
`;

const HomeLinksContainer = styled.div`
    display: flex;
    gap: 100px;
     @media (max-width: 990px) {
        flex-direction: column;
        gap:50px;
    }
`

const Home = () => {
    return (
        <HomeContainer>
            <h1>Bienvenidos a Home!</h1>
            <HomeLinksContainer>
                <Link to="/TodoList">     
                        <SiTodoist style={{ fontSize: "250px", color: "#F24" }} />   
                    </Link>
                <Link to="/PokeApi">
                    <SiPokemon style={{fontSize:"250px", color: "yellow"}} />
                </Link>
            </HomeLinksContainer>
        </HomeContainer>
    );
};

export default Home;