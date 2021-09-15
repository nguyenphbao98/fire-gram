import React from 'react';
import useFirestore from '../hooks/useFireStore';
import { motion } from 'framer-motion'

const ImageGrid = ({setSelectedImage}) => {
    const {docs} = useFirestore('images');

    return (
        <div className="img-grid">
            { docs && docs.map(doc => (

                <motion.div className="img-wrap" key={doc.id} 
                    layout
                    whileHover={{ opacity: 1}}
                    onClick={() => setSelectedImage(doc.url)}>

                    <motion.img 
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 1 }}
                        src={doc.url} alt="uploaded pics"/>
                </motion.div>
                
            ))}
        </div>
    )
}

export default ImageGrid;