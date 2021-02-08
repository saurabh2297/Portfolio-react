import React from 'react';
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'



const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
          <embed src={resume} type="application/pdf" width="100%" height="450px" />
        </motion.div>
    );
};

export default Resume;