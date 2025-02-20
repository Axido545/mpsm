import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Logo from './Logo'

const Hero = () => {
    return (<div className="pb-20 pt-0">
                        {/**
                     *  UI: Spotlights
                     *  Link: https://ui.aceternity.com/components/spotlight
                     */} 
                     <div>
                            <Spotlight
                            className='-top-40 -left-10
                            md:-left-32 md:-top-20 h-screen'
                            fill='white' 
                            />
                            <Spotlight
                            className='top-10 left-full
                            h-[80vh] w-[50vw]'
                            fill='purple' 
                            />
                            <Spotlight
                            className='top-28 left-80
                            h-[80vh] w-[50vw]'
                            fill='blue' />
                    </div>
                            {/**
                        *  UI: grid
                        *  change bg color to bg-black-100 and reduce grid color from
                        *  0.2 to 0.03
                        */}
                        <div
                        className='h-screen w-full dark:bg-black-100
                        bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                        flex items-center justify-center
                        absolute top-0 left-0
                        '>
                            {/* Radial gradient for the container to give a faded look */}
                            <div 
                            // change the bg =>>> bg-black-100, so it matches the bg color and will blend in
                            className='absolute pointer-events-none
                            inset-0 flex items-center justify-center
                            dark:bg-black-100 bg-white  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
                            />
                            {/* div closed added here===================== */}
                            </div>
                        
                            <div className='flex justify-center relative my-0 z-10'>
                        

                                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex
                                flex-col items-center justify-center'>
                                  <Logo />
                                    <h2 className='uppercase tracking-widest text-xs text-center
                                    text-blue-100 max-w-80'>
                                        Application Web Mobile et CMS
                                    </h2>

                                    {/**
                                    *  Link: https://ui.aceternity.com/components/text-generate-effect
                                    *
                                    *  change md:text-6xl, add more responsive code
                                    */}            
                                    <TextGenerateEffect
                                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                                    words='Conception de sites sur mesure adaptés à vos besoins'
                                    />
                                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                                     Toute votre identité visuelle conçues déployée dans tous les supports .
                                    </p>

                                <a href="#about">
                                    <MagicButton
                                    title="Voir mes projets"
                                    icon={<FaLocationArrow/>} 
                                    position='right'
                                    />
                                </a>
                                </div>
                            </div>
        </div>
    )
}

export default Hero
