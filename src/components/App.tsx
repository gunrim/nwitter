import React, { useState } from 'react';
import {currUser} from 'fbase';
import AppRouter from './AppRouter';
 
 
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(currUser);

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
