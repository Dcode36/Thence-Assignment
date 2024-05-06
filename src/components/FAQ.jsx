import React, { useState } from 'react';
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState([2]); 

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => {
            if (prevIndex.includes(index)) {
                return prevIndex.filter(itemIndex => itemIndex !== index);
            } else {
                return [...prevIndex, index];
            }
        });
    };

    const faqData = [
        {
            question: "Do you offer freelancers?",
            answer: "Yes, we offer freelancers for various projects."
        },
        {
            question: "What’s the guarantee that I will be satisfied with the hired talent?",
            answer: "We strive to match you with the most suitable talent for your project. However, if you're not satisfied, we have a satisfaction guarantee policy in place."
        },
        {
            question: "Can I hire multiple talents at once?",
            answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            question: "Why should I not go to an agency directly?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolore nemo. Magnam eos suscipit rerum architecto quas perferendis numquam nobis, porro molestiae, atque cum vel nulla placeat, repellat quis soluta."
        },
        {
            question: "Who can help me pick a right skillset and duration for me ? ",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolore nemo. Magnam eos suscipit rerum architecto quas perferendis numquam nobis, porro molestiae, atque cum vel nulla placeat, repellat quis soluta."
        },

    ];
    return (
        <>
            <section className='m-2 faq-section overflow-hidden' data-aos="fade-up">

                <div className="row py-5  position-relative d-flex justify-content-center ">
                    <i class="bi bi-arrow-up-right faq-arrow "></i>
                    <div className="col-lg-4 col-md-4 col-sm-10 col-xs-11 p-4">
                        <div className='hero-success-title fs-3' style={{ color: "#9E9D9D" }}>
                            What’s on your mind
                        </div>
                        <p className='primary-text text-start fs-1 '>Ask Questions</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-11 col-xs-11  mt-4">
                        <div className="accordion" id="accordionExample">
                            {faqData.map((item, index) => (
                                <div className="accordion-item" key={index} data-aos="fade-up">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button py-3 d-flex justify-content-between" type="button" onClick={() => toggleAccordion(index)} aria-expanded={activeIndex.includes(index)} aria-controls={`collapse-${index}`}>
                                            {item.question} <div className={`accordion-icon bi ${activeIndex.includes(index) ? 'bi-dash-lg' : 'bi-plus-lg'}`}></div>
                                        </button>
                                    </h2>

                                    <div id={`collapse-${index}`} className={`accordion-collapse collapse ${activeIndex.includes(index) ? 'show' : ''}`}>
                                        <div className="accordion-body">
                                            {item.answer}
                                        </div>
                                        <hr />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )


}

export default FAQ
