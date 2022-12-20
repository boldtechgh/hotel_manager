import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase.utils.js";

const AuthContext = createContext();

// export const createUserProfileDocument = async (user, additionalData) => {
//   if (!user) return;

//   const userRef = db.doc(`users/${user.uid}`);
//   const snapShot = await getDoc(userRef);
//   console.log(snapShot);

//   if (!snapShot.exists()) {
//     const { displayName, email } = user;
//     const createdAt = new Date();
//     try {
//       await setDoc(userRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//       userRef.set = await addDoc(collection(db, "users"), {});
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //createUserProfileDocument(user);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth,provider);
  };

  const logOut = () => {
    signOut(auth);
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
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
