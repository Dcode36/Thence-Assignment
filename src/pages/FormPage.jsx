import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';

const FormPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isButtonBlack, setIsButtonBlack] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsButtonBlack(false); 
    };

    const validateEmail = () => {
        const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
        if (!isValidEmail) {
            setEmailError('Enter a valid email address');
            setIsButtonBlack(false); 
        } else {
            setEmailError('');
            setIsButtonBlack(true); 
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateEmail();
        if (isButtonBlack) {
            navigate('/success')
        }
    };

    return (
        <>
            <NavBar />
            <Hero stitle="Registration Form" sdescription="Start your success journey here!" />
            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column">
                    <input type="text" placeholder="Enter your name" data-aos="zoom-in-up" />
                    <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} onBlur={validateEmail} data-aos="zoom-in-up" />
                    {emailError && <div className="error-message">{emailError}</div>}
                    <button type="submit" style={{ backgroundColor: isButtonBlack ? 'black' : '' }} data-aos="zoom-in-up">Submit</button>
                </form>
            </div>
        </>
    );
};

export default FormPage;
