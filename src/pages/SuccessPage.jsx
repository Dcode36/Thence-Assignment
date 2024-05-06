import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import success from "../assets/success.png";

const SuccessPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center align-items-center">
        <img src={success} alt="" />
      </div>
      <Hero stitle="Success Submitted" sdescription="Congratulations" />
      <div className="d-flex justify-content-center">
        <p className='text-center fs-3 success-msg' >Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
      </div>
      <div className="position-relative b-0">
        <p className='fs-4 my-5 text-center redirection' >Redirecting you to Homepage in <b>{countdown}</b> Seconds </p>
      </div>
    </div>
  );
};

export default SuccessPage;
