import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const NavbarContainer = styled.header`
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    background: #222;
    padding: 15px;
    
`;

const LinkContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    font-size: 22px;
    letter-spacing: 1px;
    color: white;
    text-decoration: none;
    list-style-type: none;
    font-weight: 600;

    && a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    }

    && a:hover{
    color: orange;
    }
`;

export const LogoStyled = styled.div`
  display: flex;
  cursor: pointer;

  & img {
    width: 80px;
  }
`;



const Navbar = () => {
    const tasksPending = useSelector((state) => state.taskApp.tasks);

    const navigate = useNavigate()
    return (
        <NavbarContainer>
                <LogoStyled onClick={(e) => {
                    e.preventDefault()
                    navigate('/')
                }}>
                    <img
                        alt="Logo"
                        src="../../assets/favicon.ico"
                    />
                </LogoStyled>

            <LinkContainer>
                    <NavLink to="/" style={{fontWeight:"800"}}>
                        Home
                    </NavLink>
                <NavLink to="/TodoList">ToDo List <span style={{ fontWeight: "700", fontSize: "15px", color: tasksPending.length ? '#f53' : 'white' }}>({tasksPending.length})</span>
                </NavLink>
                    <NavLink to="/PokeApi">PokéAPI</NavLink>
            </LinkContainer>
        </NavbarContainer>
    );
};

export default Navbar;