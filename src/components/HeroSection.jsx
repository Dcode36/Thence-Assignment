import React from 'react'
import CardComponent from './CardComponent'
import PrimaryCTA from './PrimaryCTA'
import Hero from './Hero'
const HeroSection = () => {
    return (
        <>
            <section className='m-4 position-relative' style={{ zIndex: "10000" }}>
                <Hero stitle="Success stories" sdescription="Every success journey we’ve encountered." />
                <div className="py-3"></div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-10 col-xs-10">
                        <CardComponent />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-10 col-xs-10 d-flex mt-4 flex-column">
                        <div className="section-title mx-4  fs-1 fw-semibold" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            Enhance fortune 50 company’s insights teams research capabilities
                        </div>
                        <div className="dots m-4">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>

                        <div className='pbtn' data-aos="zoom-out-up">
                            <PrimaryCTA title="Explore More" icon="bi-arrow-right-short fs-2" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroSection
