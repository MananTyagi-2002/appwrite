import React from 'react'

function Logo({width = '10px'}) {
  return (
    <div><img className='h-10 w-10' src="../../public/logo.png" alt="this is logo" /></div>
  )
}

export default Logo