import React from 'react';
import profilePic from '../assets/supriyaSingh.jpeg';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const About = () => {
  const { loading, portfolioData } = useSelector(state => state.root);
  const { about } = portfolioData;
  const { aboutImgURL, description } = about;

  return (
    <div className='border-b border-neutral-900 pb-20 pt-10 bg-black text-white'>
      <h2 className='text-center text-5xl font-bold mb-16 bg-gradient-to-r from-pink-400 via-slate-300 to-purple-500 bg-clip-text text-transparent'>
        About <span className='text-white'>Me</span>
      </h2>

      <div className='flex flex-col lg:flex-row items-center lg:items-start px-6 gap-10 lg:gap-20'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className='w-full lg:w-1/2 flex justify-center'
        >
          <img
            src={profilePic}
            alt="Supriya Singh"
            className='w-64 h-64 object-cover rounded-3xl border-2 border-neutral-700 shadow-lg'
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className='w-full lg:w-1/2 max-w-2xl'
        >
          {description?.split('\n\n').map((para, idx) => (
            <p key={idx} className='mb-5 text-neutral-300 leading-relaxed text-lg'>
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
