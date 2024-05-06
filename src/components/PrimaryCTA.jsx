import React from 'react'

const primaryCTA = ({ title, icon }) => {
    return (
        <div className='primaryCTA fw-bold'>
            {title}
            <i className={`bi ${icon}`}></i>
        </div>

    )
}

export default primaryCTA
