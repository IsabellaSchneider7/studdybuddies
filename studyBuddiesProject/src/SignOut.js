import {auth} from "./config";
const SignOut=()=>{
    return auth.currentUser &&(
    <button onClick={() => auth.signOut()}> SignOut</button>
    )
  }
export default SignOut;