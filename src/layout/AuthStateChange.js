
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useAuth from "../hook/auth"

import {useEffect, useState} from 'react'
const auth =getAuth()
export default function AuthStateChange({children}) {

    const {setUser}= useAuth()


const [loading, setLoading]=useState(true)

useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        setUser(user)
    })
    setLoading(false)

},[])

if(loading){
    return <h1>Loading....</h1>
}
  return children
}

