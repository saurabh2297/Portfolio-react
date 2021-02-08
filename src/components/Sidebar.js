import React from 'react'
import linkedin from '../assets/icons/linkedin.svg'
import hackerrank  from '../assets/icons/hackerrank.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'

import img from '../assets/img.jpg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("saurabhgangwar621@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={img} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Saurabh <span>Gangwar</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.linkedin.com/in/saurabh-gangwar01/" target="_blank"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-2" /></a>
                <a href="https://www.hackerrank.com/saurabhgangwar61" target="_blank"><img src={hackerrank} alt="hackerrank" className="sidebar__icon " /></a>
                
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/saurabh2297" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Bareilly (UP), India</div>
                <div className="sidebar__item">saurabhgangwar621@gmail.com</div>
                <div className="sidebar__item">8171154464</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;