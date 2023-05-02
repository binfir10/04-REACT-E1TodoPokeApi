import React from 'react';
import { Routes as DomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import TodoList from '../pages/TodoList/TodoList';
import PokeApi from '../pages/PokeApi/PokeApi';
import Error404 from '../pages/error404/Error404';



const Routes = () => {
    return (
        <DomRoutes>
            <Route path='/' element={<Home />} />
            <Route path='/TodoList' element={<TodoList/>} />
            <Route path='/PokeApi' element={<PokeApi />} />
            <Route path="*" element={<Error404 />} />
        </DomRoutes>
    );
};

export default Routes;