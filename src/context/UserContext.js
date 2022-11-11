import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfileInfo = (userAdditionalInfo) => {
    return updateProfile(auth.currentUser, userAdditionalInfo);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAdmin(false);
      if (user) {
        setCurrentUser(user);
        setIsLoading(false);
      } else {
        setCurrentUser(null);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);
  const logOut = () => {
    setIsLoading(true);
    localStorage.removeItem("token");
    localStorage.removeItem("admin-token");
    setIsUserAdmin(true);
    return signOut(auth);
  };
  const authValue = {
    isDark,
    setIsDark,
    signInWithGoogle,
    signUpWithEmailAndPassword,
    updateUserProfileInfo,
    signInWithEmail,
    currentUser,
    isLoading,
    setIsLoading,
    logOut,
    isUserAdmin,
    setIsUserAdmin,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
