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
    font-size: 25px;
    color: white;
  }
`;

const HomeLinksContainer = styled.div`
    display: flex;
    gap: 100px;
`

const Home = () => {
    return (
        <HomeContainer>
            <h1 style={{fontSize:"35px"}}>Bienvenidos a Home!</h1>
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