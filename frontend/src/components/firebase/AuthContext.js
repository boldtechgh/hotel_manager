import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase.utils.js";

import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = doc(db, `users/${user.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
      const { displayName, email } = user;
      const createdAt = new Date();
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user) {
          await createUserProfileDocument(user);
          const userRef = doc(db, `users/${user.uid}/hotelchain/${user.uid}`);
          const snapShot = await getDoc(userRef);
          if (snapShot.exists()) {
            document.location.href = "/dashboard/hotels";
          } else {
            document.location.href = "/setup/hotel_chain";
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const passwordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user) {
          document.location.href = "/dashboard/dashboard";
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const passwordSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user) {
          console.log(user);
          const userRef = doc(db, `users/${user.uid}/hotelchain/${user.uid}`);
          const snapShot = await getDoc(userRef);
          if (snapShot.exists()) {
            document.location.href = "/dashboard/hotels";
          } else {
            document.location.href = "/setup/hotel_chain";
          }
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      document.location.href = "/signin";
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user, passwordSignIn, passwordSignUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
