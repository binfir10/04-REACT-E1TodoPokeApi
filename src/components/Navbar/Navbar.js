import React from 'react';
import { SiReact } from "react-icons/si";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {


    const navigate = useNavigate()
    return (
        <header className='flex w-screen'>
            <nav className='w-full justify-around flex py-3
            '>
            <div className='flex cursor-pointer' onClick={(e) => {
                e.preventDefault()
                navigate('/')

          }}>
            <SiReact style={{color: "skyblue", fontSize:"40px"}}/>
            </div>

            <span className='font-bold text-2xl '>Todo List 📋</span>
 
            </nav>
        </header>
    );
};

export default Navbar;