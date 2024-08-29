import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const Modal = (props: any) => {
  const { isOpen, children, onClose, className } = props;
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this duration with the animation duration

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return isVisible
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className={`justify-center flex overflow-x-hidden lg:overflow-y-auto fixed inset-0 z-50 lg:my-5 outline-none focus:outline-none tracking-wide ${
                  className ?? ''
                }`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                    transition: {
                      duration: 0.3, // Closing transition duration
                    },
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.01,
                      duration: 0.3, // Opening transition duration
                    },
                  },
                }}
                onClick={(e) => {
                  if (e.target === e.currentTarget && onClose) onClose();
                }}
              >
                <div className="relative w-auto mx-auto">
                  <div className="border-0 lg:rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {children}
                  </div>
                </div>
              </motion.div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;
};

export default Modal;
