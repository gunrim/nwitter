import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
 

const AppRouter= ({isLoggedIn}:any) => {

    
    return (
        <HashRouter>
            <Routes>
            {isLoggedIn ? (
                <> 
                <Route path="/" element={<Home />}></Route>
                </>
                
            ) : (
                <Route path="/"element={<Auth />}></Route>
            )};
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;