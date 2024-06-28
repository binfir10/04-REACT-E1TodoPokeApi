import React from 'react';
import { Routes as DomRoutes, Route } from 'react-router-dom';


import Error404 from '../pages/error404/Error404';
import Home from '../pages/Home/Home';



const Routes = () => {
    return (
        <DomRoutes>
            <Route path='/' element={<Home />} />
  
            <Route path="*" element={<Error404 />} />
        </DomRoutes>
    );
};

export default Routes;