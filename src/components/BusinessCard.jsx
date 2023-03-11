import React from 'react'
import ActionButtons from './ActionButtons'
import About from './About'
import Skills from './Skills'
import Footer from './Footer'
import Hobbies from './Hobbies'

function BusinessCard() {

    return (
        <main>
            <img src='/src/images/me.jpg' alt='Nicolas BRETECHER photo' className='pic'/>
            <h1 className='card-name'>Nicolas BRETECHER</h1>
            <h2 className='card-job'>FullStack PHP Developer | Javascript | React</h2>
            <ActionButtons />
            <About />
            <Skills />
            <Hobbies />
            <Footer />
        </main>
    )

}

export default BusinessCard
