import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SiRos } from "react-icons/si"



const NavbarContainer = styled.header`
display: flex;
width: auto;
align-items: center;
justify-content: center;
justify-content: center;

`;

const NavContainer = styled.nav`
    display: flex;
    width: 90%;
    height: 67px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    background: #222;
    padding: 15px;
    justify-content: space-between;
`

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
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background-color: #333;
    z-index: 10;
    padding: 100px 0;

  }
`;

export const LogoStyled = styled.div`
  display: flex;
  cursor: pointer;

  & img {
    width: 80px;
  }
`;

const NavIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;



const Navbar = () => {
    const tasksPending = useSelector((state) => state.taskApp.tasks);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const navigate = useNavigate()
    return (
        <NavbarContainer>
            <NavContainer>
            <LogoStyled onClick={(e) => {
                e.preventDefault()
                navigate('/')

            }}>
                <img
                    alt="Logo"
                    src="../../assets/favicon.ico"
                />
            </LogoStyled>
            <NavIcon onClick={handleToggle}>
                <SiRos style={{ color: "white" }} />
            </NavIcon>
            <LinkContainer open={open}>
                <NavLink to="/" style={{ fontWeight: "800" }} onClick={handleToggle}>
                    Home
                </NavLink>
                <NavLink to="/TodoList" onClick={handleToggle}>ToDo List <span style={{ fontWeight: "700", fontSize: "15px", color: tasksPending.length ? '#f53' : 'white' }}>({tasksPending.length})</span>
                </NavLink>
                <NavLink to="/PokeApi" onClick={handleToggle}>PokéAPI</NavLink>
                </LinkContainer>
            </NavContainer>
        </NavbarContainer>
    );
};

export default Navbar;