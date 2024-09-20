import { companies, workExperience } from '@/data'
import React from 'react'
////020810
const Experience = () => {
    return (
        <div >
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10'>
                {companies.map(({id,img,name, nameImg}) => (
                    <div key={id} className='flex md:max-w-6 max-w-32 gap-2'>
                   < img src={img} alt={name} className="md:w-10 w-5"/>
                   < img src={nameImg} alt={name} className="md:w-24 w-20"/>

                    </div>
                ))}
            </div>
            <div className='py-20' id='projects'>
      <h1 className="heading">
     My
      <span className='text-purple'>work experience
      </span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) =>(
            <Button >
        
            </Button>
        ))}
      </div>
      </div>
        </div>
    )
}

export default Experience
