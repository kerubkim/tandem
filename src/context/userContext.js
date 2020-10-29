import { useState, useEffect, createContext, useContext} from "react";
import firebase from "../firebase/clientApp";

export const UserContext = createContext()

export default function UserContextComp({ children }) {
    const [user, setUser] = useState(null)
    const [loadingUser, setLoadingUser] = useState(true)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            try {
                if(user) {
                    setUser(user.uid);
                } else {
                    setUser(null)
                }
            } catch (err) {
                console.log("[userContext] ", err);
            } finally {
                setLoadingUser(false)
            }
        })

        return () => unsubscribe();
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, loadingUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);

