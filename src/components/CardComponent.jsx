import React from 'react'
import Card from './Card'
import person from "../assets/person.png"
import icon from "../assets/icon1.png"
const CardComponent = () => {
    return (
        <section className='d-flex justify-content-center flex-column align-items-center position-relative card-section gap-2'>
            <img src={person} alt="Person Smiling" className='person' data-aos="zoom-in-down" />
            <div className='responsive'>
                <div className='card1' data-aos="fade-right"
                    data-aos-duration="1000">
                    <Card bgColor="#FFFFFF" color="#1C1C1C" title="40%" description="Achieved reduction in project execution time by optimising team availability" />
                </div>
                <div className='card2' data-aos="fade-up"
                    data-aos-duration="1000">
                    <Card icon={icon} title2="10 Days" description="Staff Deployment" />
                </div>
                <div className='card3' data-aos="fade-left"
                    data-aos-duration="1000">
                    <Card bgColor="#002E18" color="#FFFFFF" title="$0.5" description="Reduced client expenses by saving on hiring and employee costs." />
                </div>

            </div>

        </section>
    )
}

export default CardComponent
