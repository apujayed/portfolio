import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
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
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Jayed <span>Apu</span> </div>
            <p class="cus_bg sidebar__item"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 96c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.6 12.9 44.3 32 55.4v52.8l-96 48-96-48v-52.8c19.1-11.1 32-31.8 32-55.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.6 12.9 44.3 32 55.4v92.4l128 64v52.8c-19.1 11.1-32 31.8-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.6-12.9-44.3-32-55.4v-52.8l128-64v-92.4c19.1-11.1 32-31.8 32-55.4zM128 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm128 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm128-320c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path></svg> Full-Stack Developer</p>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item cus_bg">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="!#"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="!#"><img src={github} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact p-4 my-5 ">
              
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Dhaka,Bangladesh</div>
                <div className="sidebar__item">jayedapu@gmail.com</div>
                
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>EMAIL</div>
        </motion.div>
    )
}

export default Sidebar;