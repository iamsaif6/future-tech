import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //   Google Login
  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Login with email and password
  const logtinWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Create user with email and password
  const signInupWithEmail = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Logout User
  const logOut = () => {
    return signOut(auth);
  };

  //Observer Current User
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, user => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  }, [user]);

  //   Auth value
  const value = {
    signInupWithEmail,
    loading,
    googleSign,
    logtinWithEmail,
    user,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
