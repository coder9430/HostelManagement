import { createContext, useState, useContext, useEffect } from "react";

// Create the AuthContext with default values
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null); // Clear user data on logout
  };

  const userAuthentication = async () => {
    if (!token) return; // No need to fetch if there's no token

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Fix typo here
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Failed to authenticate user");
      }
    } catch (error) {
      console.error("Error during user authentication:", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]); // Re-fetch user info if token changes

  return (
    <AuthContext.Provider value={{ storeTokenInLS, logoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
