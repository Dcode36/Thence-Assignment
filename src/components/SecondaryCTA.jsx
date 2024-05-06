import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondaryCTA = ({ title }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/form');
    };

    return (
        <div className='secandaryCTA' onClick={handleNavigate}>
            {title}
        </div>
    );
};

export default SecondaryCTA;
