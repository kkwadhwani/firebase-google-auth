import '../styles/globals.css'
import {AuthProvider} from "../src/hook/auth"
import "../src/config/firebase.config"
import AuthStateChange from "../src/layout/AuthStateChange"
function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
    <AuthStateChange>
    <Component {...pageProps} />
    </AuthStateChange>
  
  </AuthProvider>
  )

}

export default MyApp
