import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { x: '100vh', opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  React.useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      <h2 exit={{ y: '-100vh' }}>Thank you for your order :)</h2>

      <motion.p variants={childrenVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
