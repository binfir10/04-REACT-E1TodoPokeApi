import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SiReact, SiRos } from "react-icons/si"



const NavbarContainer = styled.header`
display: flex;
width: auto;
align-items: center;
justify-content: center;
justify-content: center;

`;

const NavContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    background: #cccc;
    padding: 15px;
    justify-content: space-evenly;
    border-bottom: 2px solid #999;
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
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;

    cursor: pointer;
    }

    && a:hover{
    color: #f21241;
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


    const navigate = useNavigate()
    return (
        <NavbarContainer>
            <NavContainer>
            <LogoStyled onClick={(e) => {
                e.preventDefault()
                navigate('/')

          }}>
            <SiReact style={{color: "skyblue", fontSize:"40px"}}/>
            </LogoStyled>

            <span className='font-bold text-2xl'>Brian Figueroa</span>
 
            </NavContainer>
        </NavbarContainer>
    );
};

export default Navbar;