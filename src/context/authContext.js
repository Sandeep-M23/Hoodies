import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  userId: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

//To calculate Expiration Time of the Token
const calculateExpirationTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

//To retrieve stored Token value from LocalStorage
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const storedUserId = localStorage.getItem("userId");

  const remainingTime = calculateExpirationTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    userId: storedUserId,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initialUserId;
  if (tokenData) {
    initialToken = tokenData.token;
    initialUserId = tokenData.userId;
  }

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);

  const userIsLoggedIn = !!token;

  //Logout Handler
  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  //Login Handler
  const loginHandler = (token, userId, expirationTime) => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    setUserId(userId);
    setToken(token);

    const remainingTime = calculateExpirationTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      //console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  //Context value
  const contextvalue = {
    userId: userId,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextvalue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
