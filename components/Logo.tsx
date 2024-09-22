import React from 'react'
import logo from '../public/logo-smclic.svg'
import Image from 'next/image'
const Logo = () => {
  return (
    <div>
      <Image src={logo} alt='logo'  
    //   className="lg:w-32 md:w-20 w-16"
          width={258} 
          height={258}/>
    </div>
  )
}

export default Logo
