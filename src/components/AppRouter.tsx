import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from './Navigation';
import Profile from 'routes/Profile';
 

const AppRouter= ({isLoggedIn}:any) => {

    
    return (
        <HashRouter>
            {isLoggedIn && <Navigation />}
            <Routes>
            {isLoggedIn ? (
                <>  
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                
                </>
                
            ) : (
                <Route path="/"element={<Auth />}></Route>
            )};
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;