import firebase from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup ,signOut  } from "firebase/auth";

import app from "../config/firebase.config.js"
const auth = getAuth();

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    try{
        const userCred = await  signInWithPopup(auth, provider);
        return{
            user: userCred.user
        }
    }catch(e){
        return{
            error:e.message
        }
    }

  },
  logout:async()=>{
      await signOut(auth);
  }
};
