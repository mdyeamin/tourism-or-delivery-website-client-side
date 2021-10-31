import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleFormcontrol = e => {
        e.preventDefault()
        if (password === "" && email === "" && password === "") {
            setError('your form empty')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 charactar long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have a minimum of two upper cases ')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('The password will contain a minimum of one special symbols (!@#$&*)')
            return;
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }

    const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                setUserName()
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch(error => {
                setError(error.message)
            })
        // setError(error.message) //outOf
    }

    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setUserName()
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }





    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    const toggolLogin = e => {
        setIsLogin(e.target.checked);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [])
    return {
        name,
        handleNameChange,
        user,
        email,
        password,
        signInUsingGoogle,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleFormcontrol,
        error,
        toggolLogin,
        isLogin,
        isLoading
    }


}


export default useFirebase;