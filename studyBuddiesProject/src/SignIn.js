import {auth, firebaseRef} from "./config";
const SignIn=()=>
{
    // <div>
    //     <button onClick ={()=>{
    //     auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
    //     }}
    //     >
    //         Login with Google
    //     </button>
    // </div>
  const signInWithGoogle = () => {
    auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
  }
  return(
    <button onClick={signInWithGoogle}>Login with Google</button>
  )
}
export default SignIn;