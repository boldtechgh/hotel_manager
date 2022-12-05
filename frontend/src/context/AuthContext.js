import { useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();
const AuthGetUser = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useUpdateAuth() {
  return useContext(AuthUpdateContext);
}

export function useGetUserFromAuth() {
  return useContext(AuthGetUser);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ tokens: null });
  const [user, setUser] = useState(null);

  function updateAuth(authObj) {
    setAuth(authObj);
  }

  function getUserFromToken(auth) {
    setUser(auth.tokens ? jwt_decode(auth.tokens.access) : null);
  }

  useEffect(() => {
    getUserFromToken(auth);
  }, [auth]);

  useEffect(() => {
    let savedAuth = localStorage.getItem("authenticated")
      ? JSON.parse(localStorage.getItem("authenticated"))
      : { loggedIn: false, tokens: null };
    setAuth(savedAuth);
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <AuthUpdateContext.Provider value={updateAuth}>
        <AuthGetUser.Provider value={user}>{children}</AuthGetUser.Provider>
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}
