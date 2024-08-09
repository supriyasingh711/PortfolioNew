import React from 'react'
import AdminIntro from './AdminIntro'
const Admin = () => {
  return (
<div className='flex-col item-center justify-center m-10'>
  <h1 className='text-3xl mb-5'>Admin Panel</h1>
  <div>
  <h2 className='text-2xl'>Introduction </h2>
<AdminIntro/>
  </div>
  <div>
  <h2 className='text-2xl'>Projects </h2>

  </div>
  <div>
  <h2 className='text-2xl'>Experiences</h2>

  </div><div>
  <h2 className='text-2xl'>Contact</h2>
  </div>
</div>

  )
}

export default Admin