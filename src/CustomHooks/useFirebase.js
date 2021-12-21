import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import firebaseInitialization from '../FirebaseInfo/Firebase.Init';

firebaseInitialization();
const useFirebase = () => {
    
    // Take a state for storing the user in the state
    const [user, setUser] = useState({});

    // Take auth provider
    const auth = getAuth();

    // Make provider here
    const googleProvider = new GoogleAuthProvider();

    // Handle google signin using firebase api
    const handleGoogleSignin = () => {
          return signInWithPopup(auth, googleProvider);
    }

    // Handle signout
       const handleSignOut = () => {
            signOut(auth)
            .then(() => {
                setUser({});
            })
        }

    // Use effect for handle changing user 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
               setUser(user);
            }
        });
    }, [])

    return {
        handleGoogleSignin,
        handleSignOut,
        user
        
    }
};

export default useFirebase;