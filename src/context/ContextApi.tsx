
//@ts-nocheck

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [userLoginned, setUserLoginned] = useState(false)

    useEffect(() => {

        fetch('http://localhost:3000/api/users', { credentials: "include" })
            .then((res) => res.ok ? res.json() : null)
            .then((data) => {
                if (data?.user) {
                    setUser(data.user);
                    setUserLoginned(true);
                } else {
                    setUser(null);
                    setUserLoginned(false);
                }
            })
            .catch(() => {
                setUser(null);
                setUserLoginned(false);
            });
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, userLoginned, setUserLoginned }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
