import React, { useRef } from 'react'
import './rocket.scss'
import { motion, useInView } from 'framer-motion'

const Rocket = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const rocketVariants = {
        initial: { y: "-50vh", opacity: 0 },
        animate: {
            y: "0vh",
            opacity: 1,
            transition: {
                duration: 0.9,
                ease: [0.08, 0.65, 0.53, 0.96]
            }
        }
    };

    return (

        <div className="rocket " ref={ref}>

            <motion.div
                variants={rocketVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
            >

                <div className="rocket-body">
                    <div className="body">
                        <span className="rotate-text">MetaLogic</span>
                    </div>

                    <div className="fin fin-left" />

                    <div className="fin fin-right" />

                    <div className="window" />
                </div>

                <div className=" exhaust-flame " />

                <ul className="exhaust-fumes">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>

                <ul className="exhaust-fumes">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </motion.div>

            <ul className="star">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>

        </div>
    )
}

export default Rocket