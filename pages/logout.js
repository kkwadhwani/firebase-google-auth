import { AuthService } from "../src/service/AuthService"
import {useRouter} from "next/router"
import useAuth from "../src/hook/auth"


export default function logout() {
    const {user}=useAuth()
    const router = useRouter()
    const handleLogout=()=>{
        AuthService.logout()
        router.push("/login")
    }
  return (
    <>
        <button onClick={handleLogout}>Logout</button>
      <h1>{user?.uid}</h1>  
    </>
  )
}

