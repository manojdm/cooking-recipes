import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../Actions/userActions';
import '../css/login.css'

const Login = ({history}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const authUser = useSelector(state => state.authUser)
    const {loading , success} = authUser

    const userData = useSelector(state => state.authUser.userData);

    const dispatch = useDispatch();

    useEffect(
        () => {
            if(success){
                history.push('/admin');
            } else if(userData) {
                history.push('/admin')
            }
        }
    , [success])

    const handleSubmit = () => {
        dispatch(authLogin({email , password}));
    }

    return (
        <section id="login">
            <p className="title">SIGN IN</p>
            <div className="msg-container">
            </div>
            <div className="email-container">
                <label className="email-label">Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email address" htmlFor="email" />
            </div>
            <div className="password-container">
                <label className="password-label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" htmlFor="password" />
            </div>
            <button onClick={handleSubmit} className="submit">Submit</button>
        </section> 
    );
}

export default Login