import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './SignUp.css';
const SignUp = () => {
    const emailRef = useRef(null);
    const passworkRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passworkRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
            .catch((error) => {
                alert(error.message);
            });
    };
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passworkRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <div className='SignUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder='Email' type='email' />
                <input ref={passworkRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signupScreen_gray'>New to Netflix? </span>
                    <span className='singupScreen_link' onClick={register}>Sign Up now.</span></h4>
            </form>
        </div>
    )
}

export default SignUp
