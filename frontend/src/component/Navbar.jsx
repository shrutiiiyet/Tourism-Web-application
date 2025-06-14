import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between  p-2 text-2xl bg-blue-400'>
          <div>
            Adventure
          </div>
           <div>
                <ul className='flex gap-4 pr-6'>
                  <li>Explore</li>
                  <li>Signin</li>
                  <li>Signup</li>
                </ul>
           </div>
    </div>
  )
}

export default Navbar
