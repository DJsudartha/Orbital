import React, { useContext, useState } from 'react'

const UserJourneyContext = React.createContext();
const UserJourneyUpdateContext = React.createContext();

export function useUserJourney() {
    return useContext(UserJourneyContext);
}

export function useUserJourneyUpdate() { // update with only the id for security/simplicity
    return useContext(UserJourneyUpdateContext);
}

export const UserJourneyProvider = ({ children }) => {
    const [userJourney, setUserJourney] = useState({}); // should never be reaeched

    const defineUserJourney = (userJourney) => {
        setUserJourney(userJourney); 
    }

    return (
        <UserJourneyContext.Provider value={userJourney}>
            <UserJourneyUpdateContext.Provider value={(userJourney) => defineUserJourney(userJourney)}>
                {children}
            </UserJourneyUpdateContext.Provider>
        </UserJourneyContext.Provider>
    )
}
