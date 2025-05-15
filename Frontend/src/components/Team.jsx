import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { data } from "../restApi.json";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <motion.section 
      className="team" 
      id="team"
      initial={{ opacity: 0 }}  // Start state
      animate={{ opacity: 1 }}   // End state
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="heading_section">
          <motion.h1 
            className="heading"
            data-aos="fade-up"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            OUR TEAM
          </motion.h1>
          <motion.p
            data-aos="fade-up"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </motion.p>
        </div>
        <div className="team_container">
          {/* AOS applied to each card */}
          {data[0].team.map((element) => (
            <motion.div 
              className="card" 
              key={element.id}
              data-aos="fade-up"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
