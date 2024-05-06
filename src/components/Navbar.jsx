import React from 'react'
import { useLocation } from 'react-router-dom';
import PrimaryCTA from './PrimaryCTA'
import SecandaryCTA from './SecondaryCTA'
import logo from "../assets/logo.png"
const NavBar = () => {
    const location = useLocation();

    const isHome = location.pathname === '/';
    return (
        <>
      <nav className={`navbar m-4 px-4 ${isHome ? 'home-border' : 'no-border'}`}>
                <div className="logo m-4">
                    <img src={logo} alt="" />
                </div>
                {isHome ? (
                    <div className='d-flex gap-2 '>
                        <SecandaryCTA title="Get Projects" />
                        <PrimaryCTA title="Onboard Talent" icon="" />
                    </div>
                ) : (
                    <button onClick={() => window.history.back()} className="close-btn"><i class="bi bi-x-lg"></i></button>
                )}

            </nav>
        </>

    )
}

export default NavBar;
