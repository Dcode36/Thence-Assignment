import React from 'react'

const Hero = ({ stitle, sdescription }) => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5  py-1">
            <h3 className="hero-success-title" data-aos="fade-up"
                data-aos-duration="1000">
                {stitle}
            </h3>
            <p className='primary-text' data-aos="fade-up"
                data-aos-duration="1000">{sdescription}</p>


        </div>
    )
}

export default Hero
