import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-black'>
        <div className='flex gap-5 text-3xl font-semibold'>
            <h1 className="text-secondary k">Hey! Hows yr day?</h1>
            <h1 className="text-white s">I know your time is precious :)</h1>
            <h1 className="text-tertiary r">Just a few seconds!</h1>

        </div></div>
  )
}

export default Loader