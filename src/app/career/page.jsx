"use client"

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import ValuesCard from '@/components/careerCard/ValuesCard'
import BenefitsCard from '@/components/careerCard/BenefitsCard'
import CareCard from '@/components/careerCard/CareCard'
import Rocket from '@/components/bgRocket/Rocket'
import { values, benefits, care, vacancy } from '@/components/careerCard/constant'
import VacancyTable from '@/components/careerCard/VacancyTable'
import toast from 'react-hot-toast'

const Career = () => {

    const [email, setEmail] = useState('')

    { /* HERO */ }
    const heroRef = useRef()
    const heroRefInView = useInView(heroRef, { once: true })

    const heroVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.04,
                ease: [0.08, 0.65, 0.53, 0.96],
                duration: 0.2
            }
        }
    };

    const heroChildVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.08, 0.65, 0.53, 0.96]
            }
        }
    };


    { /* VALUES */ }
    const valuesRef = useRef()
    const valuesRefInView = useInView(valuesRef, { once: true })

    const valuesVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.08, 0.65, 0.53, 0.96],
            }
        }
    }

    const valuesCardRef = useRef()
    const valuesCardRefInView = useInView(valuesCardRef, { once: true })

    const valuesCardVariants = {
        initial: {
            y: '50px',
            opacity: 0
        },
        animate: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.08, 0.65, 0.53, 0.96],
                delay: index * 0.2
            }
        })
    };


    { /* CARE */ }
    const careRef = useRef()
    const careRefInView = useInView(careRef, { once: true })

    const careVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.08, 0.65, 0.53, 0.96],
            }
        }
    }

    const careCardRef = useRef()
    const careCardRefInView = useInView(careCardRef, { once: true })

    const careCardVariants = {
        initial: {
            y: '50px',
            opacity: 0
        },
        animate: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.08, 0.65, 0.53, 0.96],
                delay: index * 0.2
            }
        })
    };

    { /* VACANCY */ }
    const vacancyRef = useRef()
    const vacancyRefInView = useInView(vacancyRef, { once: true })

    const vacancyVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.04,
                ease: [0.08, 0.65, 0.53, 0.96],
                duration: 0.2
            }
        }
    };

    const vacancyChildVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.08, 0.65, 0.53, 0.96]
            }
        }
    };

    { /* VACANCYTABLE */ }
    const vacancyTableRef = useRef()
    const vacancyTableRefInView = useInView(vacancyTableRef, { once: true })

    const vacancyTableVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.04,
                ease: [0.08, 0.65, 0.53, 0.96],
                duration: 0.2
            }
        }
    };

    const vacancyTableChildVariants = {
        initial: { y: '50px', opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.08, 0.65, 0.53, 0.96]
            }
        }
    };

    const handleSubmit = (e) => {

        e.preventDefault()
        toast.success('Subscribed Successfully')
        setEmail('')
    }


    return (
        <>

            {/* Hero Section */}
            <div className='relative min-h-screen text-center bg-gradient-to-b from-[#b4b2b2] via-[#b4b2b2]/70 to-white'>

                <div className=' absolute z-50 flex w-full h-full items-center justify-center bg-[rgba(55, 255, 255, 0.2)] lg:px-32' ref={heroRef}>

                    <motion.div
                        variants={heroVariants}
                        initial="initial"
                        animate={heroRefInView ? "animate" : "initial"}
                    >
                        <motion.h4
                            className='py-12 text-xl font-semibold'
                            variants={heroChildVariants}
                        >
                            Careers
                        </motion.h4>

                        <motion.h1
                            className='text-4xl font-bold capitalize md:text-6xl'
                            variants={heroChildVariants}
                        >
                            navigate your next
                            <br />
                            <span className='text-accent-green mr-5'>
                                career
                            </span>
                            move
                        </motion.h1>

                        <motion.div
                            className='mx-auto px-4 py-10 md:w-[50%]'
                            variants={heroChildVariants}
                        >
                            We&apos;re continuously searching for the right talent. Check if you&apos;re a good match.
                        </motion.div>

                        <motion.button
                            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium shadow h-10 px-8 py-2 bg-primary text-white hover:border-primary/90'
                            variants={heroChildVariants}
                        >
                            <Link href='#vacancies' className='relative pb-1'>
                                Explore Opportunities
                            </Link>
                        </motion.button>
                    </motion.div>

                </div>

                {/* Background Rocket */}
                <Rocket />

            </div>


            {/* Values Section */}
            <section className='bg-[#f6f8ff]' >
                <div
                    ref={valuesRef}
                    className='w-full xl:px-2 py-24 text-center flex flex-col justify-center'
                >
                    <motion.div
                        variants={valuesVariants}
                        initial="initial"
                        animate={valuesRefInView ? "animate" : "initial"}
                        className="flex flex-col justify-center items-center gap-4"
                    >
                        <h5 className="text-xl font-semibold text-secondary-300">
                            Values
                        </h5>

                        <h2 className="text-4xl font-bold text-blue-950">
                            We Believe in
                        </h2>

                        <p className=" pb-8 text-ui-500 md:w-1/2">
                            We believe in creating an environment where individuals can thrive and make a meaningful impact.
                        </p>
                    </motion.div>


                    <div
                        className='lg:w-full xl:w-3/4 mx-auto flex flex-wrap justify-center gap-8 text-left md:gap-y-12'
                        ref={valuesCardRef}
                    >
                        {values.map((v, index) => (
                            <motion.div
                                key={v.id}
                                variants={valuesCardVariants}
                                custom={index}
                                initial="initial"
                                animate={valuesCardRefInView ? "animate" : "initial"}
                            >
                                <ValuesCard v={v} />
                            </motion.div>
                        ))}
                    </div>


                </div>

            </section>


            {/* Benefits Section */}
            <section className=' flex min-h-screen items-center justify-center'>

                <div className='py-16 text-center'>
                    <div className='flex flex-col gap-4 pb-10'>
                        <h5 className="text-xl font-semibold text-secondary-300">
                            Benefits
                        </h5>

                        <h2 className="text-4xl font-bold text-blue-950">
                            Life At MetaLogic
                        </h2>
                    </div>

                    <div className='grid gap-8 px-2 text-left md:grid-cols-3 md:gap-y-12 md:px-4 lg:grid-cols-4 lg:px-12'>
                        {benefits.map((b, index) => (
                            <BenefitsCard key={b.id} b={b} index={index} />
                        ))}
                    </div>
                </div>

            </section>


            {/* Care Section */}
            <section className=' py-12 flex  items-center justify-center bg-[#ffffe1]'>
                <div className='flex flex-col items-center text-center py-16 ' ref={careRef}>

                    <motion.div
                        variants={careVariants}
                        initial="initial"
                        animate={careRefInView ? "animate" : "initial"}
                        className='flex flex-col gap-4 px-6 pb-10 md:mx-auto lg:pl-20'
                    >
                        <h5 className="text-3xl font-bold text-blue-950">
                            Metalogic Cares For You
                        </h5>

                        <h2 className="text-sm text-ui-500 px-2 md:px-8 lg:px-20 xl:px-40">
                            We&apos;re less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home
                        </h2>
                    </motion.div>

                    <div className=' flex flex-wrap gap-8 justify-center w-full md:w-[80%] lg:w-[60%]  px-2 text-left  md:gap-y-6 md:px-4 lg:px-12' ref={careCardRef}>
                        {care.map((c, index) => (
                            <motion.div
                                key={c.id}
                                variants={careCardVariants}
                                custom={index}
                                initial="initial"
                                animate={careCardRefInView ? "animate" : "initial"}
                            >
                                <CareCard c={c} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Vacancies Section */}
            <section id='vacancies' className='py-24'>
                <div ref={vacancyRef}>

                    <motion.div
                        variants={vacancyVariants}
                        initial="initial"
                        animate={vacancyRefInView ? "animate" : "initial"}
                        className=' flex flex-col gap-4 py-24 text-center '
                    >

                        <motion.div
                            variants={vacancyChildVariants}
                            className='flex flex-col gap-4'
                        >
                            <h5 className='text-xl font-semibold text-yellow-500'>
                                Opportunities
                            </h5>

                            <h2 className='text-4xl font-bold text-blue-950'>
                                Available Vacancies
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={vacancyChildVariants}
                            className='flex flex-wrap gap-4 px-2 md:mx-auto md:w-[50%]'>
                            <input
                                type="text"
                                placeholder='Job Title/Keyword'
                                className='flex-1 rounded-lg border p-2 focus:outline-none'
                            />

                            <div className='flex w-full gap-2'>

                                <select
                                    className='flex-1 rounded-lg border p-2 focus:outline-none'
                                >
                                    <option value="intern">Internships</option>
                                    <option value="junior">Junior Level</option>
                                    <option value="mid">Mid Level</option>
                                    <option value="senior">Senior</option>
                                </select>

                                <button className='rounded-lg bg-secondary-400 px-6 text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search "><circle cx={11} cy={11} r={8} /><path d="m21 21-4.3-4.3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className='mx-auto lg:w-1/2' ref={vacancyTableRef}>
                    <motion.div
                        variants={vacancyTableVariants}
                        initial="initial"
                        animate={vacancyTableRefInView ? "animate" : "initial"}
                    >
                        <motion.div
                            variants={vacancyTableChildVariants}
                            className='px-2 py-4 text-lg font-semibold'
                        >
                            {vacancy.length} Job Offers
                        </motion.div>

                        <motion.div
                            variants={vacancyTableChildVariants}
                            className='pb-10'
                        >
                            <div className='relative w-full overflow-auto'>
                                {vacancy.map((v, index) => (
                                    <VacancyTable v={v} key={v.id} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/* Newsletter Section */}
            <section className='bg-ui-200 py-20 text-center text-ui-500'>
                <h4 className='text-xl font-semibold text-ui-700'>
                    Subscribe to our News Letters
                </h4>

                <p className='py-4 text-ui-500 md:mx-auto md:w-[70%]'>
                    Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.
                </p>

                <form className='flex flex-col gap-4 px-4 py-3 sm:flex-row md:mx-auto md:w-1/2' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder='Please Enter Your Email'
                        className='h-9 w-full rounded-md px-3 text-sm shadow-sm bg-white py-6'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        type='submit'
                        className='flex h-fit items-center justify-center gap-2 rounded-lg bg-secondary-300 px-4 py-3 text-white'
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail "><rect width={20} height={16} x={2} y={4} rx={2} /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Subscribe
                    </button>
                </form>
            </section>

        </>
    )
}

export default Career