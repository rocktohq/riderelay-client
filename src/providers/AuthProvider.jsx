import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SignIn with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // SignUp with Email and Password
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update Profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // SignIn with Email and Password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // On UserState Change
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);

      // * If user is logged in; create a new token
      if (currentUser) {
        axios
          .post("http://localhost:5000/api/v1/auth/access-token", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("Status:", res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/api/v1/auth/logout", loggedUser, {
            withCredentials: true,
          })
          .then((err) => {
            console.log(err.data);
          });
      }

      return () => {
        unSubscribe();
      };
    });
  }, []);

  // Auth Info
  const authInfo = {
    user,
    loading,
    googleSignIn,
    signUpUser,
    updateUserProfile,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
