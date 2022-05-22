import useAuth from "../src/hook/auth"

export default function login() {

    const {user, loginWithGoogle, error}= useAuth()
  return (
    <>
    <h2>{error}</h2>
        <div style={{display:"flex",flexDirection: 'column', justifyContent:"center", alignItems:"center"}}><button onClick={loginWithGoogle}>Google</button></div>
        {user?.uid}
    </>
  )
}
