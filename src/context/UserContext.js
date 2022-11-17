import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
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
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserAdmin(false);
      console.log("onauthstate", user);
      if (user === null || user.emailVerified) {
        setCurrentUser(user);
        setIsLoading(false);
      }
      // else {
      //   setCurrentUser(null);
      //   setIsLoading(false);
      // }
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
    verifyEmail,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
