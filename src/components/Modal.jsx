import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: { opacity: 1, y: '200px', transition: { delay: 0.5 } },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          exit="hidden"
          animate="visible"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make Another Pizza?</p>
            <Link to="/">
              <button>Start Again?</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
