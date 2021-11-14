import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar';
import { selectUser } from '../reducer/useSlice';
import { auth } from '../../firebase';
import './Profile.css';

const Profile = () => {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <NavBar />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img
                        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
                    />
                    <div className='profileScreen_details'>

                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <button onClick={() => auth.signOut()} className='profile_signout'>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
