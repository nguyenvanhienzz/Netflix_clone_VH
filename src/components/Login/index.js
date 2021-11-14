import React, { useState } from 'react'
import SignUp from '../SignIn';
import './Login.css';
const Login = () => {
    const [login, setLogin] = useState(false);
    return (
        <div className='loginScreen'>
            <div className='loginScreen_backgroud'>
                <img
                    className='loginScreen_logo'
                    src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
                    alt='' />
                <button
                    onClick={() => setLogin(true)}
                    className='loginScreen_btn'>Sign In</button>
                <div className='loginScreen_gradient' />
            </div >
            <div className='loginScreen_body'>
                {login ? (<SignUp />) : (
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Email address' />
                                <button
                                    onClick={() => setLogin(true)}
                                    className='loginStart_getStarted'
                                >Get Started
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Login
