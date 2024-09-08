import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faHouse } from '@fortawesome/free-solid-svg-icons'; // Import any icon you want to use



import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu , close } from '../assets'
import DockDemo from './DockDemo'

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)


    return (
        <>
            <nav 
                className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 bg-primary `}
            >
                <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                    <Link
                        to="/"
                        className='flex items-center gap-2'
                        onClick={() => {
                            setActive('');
                            window.scrollTo(0, 0);
                        }}
                    >
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                            className='flex items-center'
                        >
                            <FontAwesomeIcon icon={faMugHot} className='text-[25px] cursor-pointer hover:text-[#facc15]' />
                        </motion.div>

                        <p className='text-[#5eead4] text-[18px] font-bold cursor-pointer flex item-center'>
                            {/* HOME &nbsp;  */}
                            <span className='text-[#facc15] text-[18px] sm:block ml-2 hidden'></span>
                        </p>

                    </Link>
                    <ul className='list-none hidden sm:flex flex-row gap-3'>
                        {navLinks.map((Link) => (
                            <li key={Link.id} 
                                onClick={() => setActive(Link.title)}

                                className =
                                {`${ active === Link.title ? "" : "hover:text-[#facc15]" }
hover:text-[#facc15] relative text-[18px] text-white font-medium cursor-pointer rounded-full px-3 py-1 outline-2 outline-teal-100 transition focus-visible:outline`} 

                            >
                                {active === Link.title && (
                                    <motion.div 
                                        layoutId="activePill" 
                                        className = "absolute inset-0 bg-white-100/10 text-[#facc15]"
                                        style={{
                                            borderRadius: 9999,
                                        }}
                                        transition={{ type:"spring", duration: 0.8 }}
                                    />
                                )}

                                <span className="relative z-10 mix-blend-plus-lighter"><a href={`#${Link.id}`}>{Link.title}</a></span>
                            </li>
                        ))}
                    </ul>

                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img 
                            src={toggle ? close : menu}
                            alt="menu"
                            className='w-[28px] h-[28px] object-contain cursor-pointer'
                            onClick={() => setToggle(!toggle)}
                        />
                        <div className={`${!toggle ? 'hidden': 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl `}>
                            <ul className='list-none flex justify-end items-start flex-col '>
                                {navLinks.map((Link) => (
                                    <li key={Link.id} 
                                        className=
                                        {`${ active === Link.title ? "text-white" : "text-secondary" }
hover:text-white font-poppins font-medium cursor-pointer text-[16px]`} 
                                        onClick={() => {
                                            setToggle(!toggle)
                                            setActive(Link.title)
                                        }}
                                    >
                                        <a href={`#${Link.id}`}>{Link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>    

                </div>
            </nav>

            {/* Dock positioned at the bottom */}
            <div className="fixed bottom-5 left-0 right-0 z-20">
                <DockDemo />
            </div>
        </>
    )
}

export default Navbar ;
