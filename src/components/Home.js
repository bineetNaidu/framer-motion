import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const btnVariants = {
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.3 },
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 0.5 },
  },

  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={btnVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>

      <Loader />
    </motion.div>
  );
};

export default Home;
