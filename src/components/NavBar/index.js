import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { useHistory } from 'react-router-dom';
const NavBar = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`navbar ${show && "nav__back"} `} >
            <div className='nav_contents'>
                <img
                    onClick={() => history.push('/')}
                    className="nav_logo"
                    src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                />
                <img
                    onClick={() => history.push('/profile')}
                    className='nav_avatar'
                    src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'

                />


            </div>

        </div>
    )
}

export default NavBar
