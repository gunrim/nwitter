import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = (userObj:any) => <nav>

    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>
    </ul>
</nav>

export default Navigation;