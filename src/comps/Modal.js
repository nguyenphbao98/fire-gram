import React from 'react'
import {motion} from 'framer-motion'

export default function Modal({selectedImage, setSelectedImage}) {

    const handleClick = (e) => {
        if(setSelectedImage && e.target.classList.contains('backdrop'))
            setSelectedImage('');
    }

    return (
        <motion.div 
            className="backdrop" 
            onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >
            <motion.img 
                initial={{ y : "-100vh"}}
                animate={{ y: 0}}
                src={selectedImage} 
                alt="this is enlarged pics" />
        </motion.div>
    )
}
