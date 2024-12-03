import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion} from 'framer-motion';

import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Client from './Client';
import ContactUs from './ContactUs';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
     
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
            >
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/Client"
          element={
            <motion.div
            >
              <Client />
            </motion.div>
          }
        />
        <Route
          path="/ContactUs"
          element={
            <motion.div
            >
              <ContactUs />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
