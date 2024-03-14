import React from 'react'
import '../css/Section2.css'
import img from '../assets/sec2.svg'
const Section2 = () => {
    return (
        <>
            <center><h2 data-aos="fade-right"><span>About</span> Mr. Arun</h2></center>
            <div className='sec2'>
                <div data-aos="fade-right" id='image'>
                    <img src={img}></img>
                </div>
                <div data-aos="fade-left" id='content'>
                    <p>Meet <span>Mr. Arun,</span> a seasoned <span>journalist</span> with a wealth of experience spanning decades in the field. Having retired from his illustrious career, Mr. Arun is now on a mission to impart his invaluable knowledge and practical insights to aspiring journalists like you.</p>
                    <button id='join'>Join Now</button>

                </div>
            </div>
        </>
    )
}

export default Section2