import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='m-4 footer'>
                <div className="p-4 my-2 d-flex justify-content-between align-items-center flex-wrap">
                    <div className="copyright">
                        <i class="bi bi-c-circle"></i> Talup 2023. All rights reserved
                    </div>
                    <div className="my-2 d-flex justify-content-between gap-2 flex-xs-column">
                        <p className='text-decoration-underline'>Terms & Conditions</p>
                        <p className='text-decoration-underline'>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
