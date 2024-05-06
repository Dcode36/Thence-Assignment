import React from 'react'
const Card = ({ title, description, bgColor, color, icon, title2 }) => {
    return (
        <div className='card p-3' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <div className='d-flex gap-2'>
                <div>
                    <img src={icon} alt="" className='icon' />
                </div>
                <div>
                    <div className=' fw-bold card-title'>
                        {title}
                    </div>
                    <div className=' fw-bold card-title2'>
                        {title2}
                    </div>
                    <div className=' fw-lighter card-description'>
                        {description}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card
