import { logout } from 'fbase';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () =>  {

    const navigate = useNavigate();
    
    const onLogoutClick = () => {
        logout();
        navigate("/");
    }


return (
    <>
    <button onClick={onLogoutClick} name="google">Logout</button>
    </>
    );
}
export default Profile