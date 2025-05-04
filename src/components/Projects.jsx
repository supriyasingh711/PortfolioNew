import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Projects = () => {
  const { loading, portfolioData } = useSelector(state => state.root);
  const { projects } = portfolioData;

  return (
    <div className='border-b border-neutral-900 pb-12 pt-4 bg-black text-white'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'
      >
        Projects
      </motion.h1>

      <div className='flex flex-col items-center gap-12 px-6 lg:px-20'>
        {[...projects].reverse().map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-md p-6 hover:shadow-purple-700 transition-shadow duration-300 cursor-pointer'
          >
            <h3 className='text-2xl font-semibold mb-2 text-pink-300'>{project.title}</h3>
            <p className='text-neutral-400 mb-4 leading-relaxed'>{project.description}</p>

            <div className='flex flex-wrap gap-2 mb-2'>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className='rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400 hover:bg-purple-700 hover:text-white transition-all'
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className='text-sm text-blue-400 underline hover:text-blue-300'>
              View Source Code →
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
