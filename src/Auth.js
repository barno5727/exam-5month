import React, {  useEffect, useState } from "react";

import {auth} from "./Firebase/Config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ Children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLaoding] = useState(true);

  
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        
        setCurrentUser(user);
        setLaoding(false);
      }
    });

    return () => unsubscribe();
  }, []);
 

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {Children}
    </AuthContext.Provider>
  );
};
