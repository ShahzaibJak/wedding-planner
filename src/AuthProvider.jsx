import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser ] = useState(null)

console.log(user);
    useEffect(()=>{
        onAuthStateChanged(auth, (newUser) => {
            setUser(newUser);
        })

    },[])

    //google sign in 
    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider()

        return signInWithPopup(auth, googleProvider)
    }


    //Create user
    const createUser = (email, password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign with email and password
    const logInWithPass = ( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out 
const handleSignOut = ()=> {
 signOut(auth)

}


    const authInfo = {
        googleSignIn,
        createUser,
        user,
        handleSignOut,
        logInWithPass
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;