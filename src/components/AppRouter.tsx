import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Profile from "routes/Profile";

import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

const AppRouter= ({ refreshUser, isLoggedIn, userObj }) => {

    return (
        <HashRouter>
            {isLoggedIn && <Navigation userObj={userObj!} />}
            <Routes>
            {isLoggedIn ? (
                <div
                    style={{
                    maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
                    }}
                >
                <Route path="/" element={<Home userObj={userObj}/>} ></Route>
                <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />}></Route>
                </div>

            ) : (
                <>
                <Route path="/" element={<Auth />}></Route>
                </>
            )};
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;


