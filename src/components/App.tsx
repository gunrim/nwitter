import AppRouter from "components/AppRouter";
import { authService } from "fbase";
import { User } from "firebase/auth";
import React, { useEffect, useState } from "react";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj]:any = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          // updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user:User | null = authService.currentUser;
    if (user){
      setUserObj({
        displayName: user.displayName,
        uid: user.uid,
        // updateProfile: (args) => user.updateProfile(args),
      });
    }else{
      setUserObj(null);
    }
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
