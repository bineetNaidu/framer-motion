import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { x: '100vh', opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 1.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const nextVariants = {
  hidden: { x: '-100vw' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: '120' },
  },
};

const btnVariants = {
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.3 },
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'spring', delay: 1.5 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                color: '#f8e112',
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button variants={btnVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
