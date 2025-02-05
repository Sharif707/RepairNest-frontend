import { createContext, useEffect, useState } from "react";
import { appInfo } from "../Firebase/Firebase.config";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Loading from "../Components/Loading/Loading";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(appInfo);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInwithGoogle = () => {
    const provider = new GoogleAuthProvider();

    setLoading(true);

    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          { email: currentUser?.email },
          { withCredentials: true }
        );
      
      } else {
       
        setUser(currentUser);
        
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/clear-cookies`,
          { withCredentials: true }
        );
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const AuthInfo = {
    createUser,
    loginUser,
    signInwithGoogle,
    logOut,
    user,
    setUser,
    setLoading,
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
