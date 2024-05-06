import React from 'react'
import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
const HomePage = () => {
    return (
        <div className=''>
            <NavBar />
            <HeroSection />
            <div style={{ padding: "100px 0" }}>
                <FAQ />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
