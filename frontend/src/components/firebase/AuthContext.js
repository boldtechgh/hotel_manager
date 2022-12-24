import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase.utils.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.utils";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // !Create google SigninProfile
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

  //Handles google authentication
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
          await createUserProfileDocument(user).then(async () => {
            const userRef = doc(
              db,
              `users/${user.uid}/hotel_chain/${user.uid}`
            );
            const snapShot = await getDoc(userRef);

            if (snapShot) {
              document.location.href = "/setup/hotel_chain";
            } else {
              document.location.href = "/setup/hotel_chain";
            }
          });
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

  //Sign in with email and password
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

  //signup with username and password
  const passwordSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user) {
          await createUserProfileDocument(user).then(() => {
            document.location.href = "/setup/hotel_chain";
          });
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

  //handles signing out
  const logOut = () => {
    signOut(auth).then(() => {
      document.location.href = "/signin";
    });
  };

  //set user state
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
