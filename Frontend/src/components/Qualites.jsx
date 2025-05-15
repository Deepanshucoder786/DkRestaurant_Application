import React from 'react'
import { data } from '../restApi.json'
import { motion } from 'framer-motion'

const Qualites = () => {
  return (
    <section className='qualities' id='qualities'>
      <div className="container">
        {data[0].ourQualities.map((element, index) => (
          <motion.div
            className='card'
            key={element.id}
            initial={{ opacity: 0, y: 50 }} // start position
            animate={{ opacity: 1, y: 0 }} // animate to normal
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2, // stagger effect
              ease: "easeOut" 
            }}
            whileHover={{ scale: 1.05 }} // subtle hover animation
            whileTap={{ scale: 0.95 }}   // tap animation (mobile effect)
          >
            <img src={element.image} alt={element.title} />
            <p className='title'>{element.title}</p>
            <p className='description'>{element.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Qualites
