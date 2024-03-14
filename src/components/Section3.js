import React from 'react'
import '../css/Section3.css'
import img1 from '../assets/img3.1.svg'
import img2 from '../assets/img3.2.svg'
import img3 from '../assets/img3.3.svg'
import img4 from '../assets/img3.4.svg'

const Section3 = () => {
    return (
        <>
            <h1 data-aos="fade-right"><span>Why Choose</span> This Course</h1>
            <div className='sec3'>
                <div data-aos="fade-right" className='contents'>
                    <div className='image'>
                        <img src={img1}></img>
                    </div>
                    <div data-aos="flip-down" className='content'>
                        <h2><span>Expert</span> Guidance</h2>
                        <p> Learn from the best in the industry as Mr. Arun shares his wealth of experience, insider tips, and tried-and-tested techniques to excel in journalism.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='contents'>
                    <div className='image'>
                        <img src={img2}></img>
                    </div>
                    <div data-aos="flip-down" className='content'>
                        <h2><span>Practical</span> Insights</h2>
                        <p> Dive deep into the world of journalism with hands-on exercises, case studies, and real-life scenarios, giving you a taste of what it's like to work in the field.</p>
                    </div>
                </div>
                <div data-aos="fade-right" className='contents'>
                    <div className='image'>
                        <img src={img3}></img>
                    </div>
                    <div data-aos="flip-down" className='content'>
                        <h2><span>Interactive</span> Learning</h2>
                        <p> Engage in lively discussions, Q&A sessions, and peer-to-peer collaboration, creating a supportive learning environment where you can grow and thrive.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='contents'>
                    <div className='image'>
                        <img src={img4}></img>
                    </div>
                    <div data-aos="flip-down" className='content'>
                        <h2><span>Personalized</span> Feedback</h2>
                        <p> Receive personalized feedback and guidance from Mr. Arun himself, helping you refine your skills and overcome any challenges you may encounter along the way.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3