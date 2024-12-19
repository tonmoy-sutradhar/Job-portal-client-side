import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // Create User
  const newUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn user
  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture", currentUser?.email);

      //For Token validation
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log("SignIn", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "http://localhost:5000/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("Logout", res.data);
            setLoading(false);
          });
      }
      // setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // sign-out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { user, loading, newUser, signUser, logOutUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
