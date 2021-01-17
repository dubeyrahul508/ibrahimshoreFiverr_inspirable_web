import React, { createContext, useReducer, useState, useEffect } from "react";
import cookie from "js-cookie";

const USERKEY = "userData";

const initialState = {
  user: null,
};

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  console.log("payload", action.payload);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  console.log(children);
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log("state", state);
    if (isInitialized) {
      localStorage.setItem(USERKEY, JSON.stringify(state));
    }
    return () => {
      //console.log('desmontado')
      //localStorage.removeItem(USERKEY)
    };
  }, [state]);

  useEffect(() => {
    if (!isInitialized) {
      console.log('eeeeeeee')
      dispatch({
        type: "LOGIN",
        payload: localStorage.getItem(USERKEY)
          ? JSON.parse(localStorage.getItem(USERKEY))
          : {},
      });

      setIsInitialized(true);
    }
    return () => {
      console.log('desmontar')
      localStorage.removeItem(USERKEY)
    };
  }, []);

  function login(userData) {
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
