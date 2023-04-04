import React, { useState } from 'react';
import {auth} from 'fbase';
import AppRouter from './AppRouter';
 
 
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(auth.currentUser);

  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>
      &copy; {new Date().getFullYear() } Nwitter      

    </footer>
    </>
  );
}

export default App;
