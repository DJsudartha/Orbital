import React, { useContext, useState } from 'react'

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function useUserUpdate() { // update with only the id for security/simplicity
    return useContext(UserUpdateContext);
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("no user");

    const defineUser = (user) => {
        setUser(user); 
    }

    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={(user) => defineUser(user)}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}
