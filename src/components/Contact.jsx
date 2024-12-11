import { useState , useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import AnimatedGradientText from "@/components/magicui/animated-gradient-text"
import { cn } from "@/lib/utils"

// 6oYTs0qr_WGWNQLNg
// template_dmcqx2c
// service_oc7f48s


const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading,setLoading ] = useState(false) ;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form,[name] : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // 6oYTs0qr_WGWNQLNg
        // template_dmcqx2c
        // service_oc7f48s

        emailjs.send(
            'service_oc7f48s',
            'template_dmcqx2c',
            {
                from_name: form.name,
                to_name: 'Seth',
                from_email: form.email,
                to_email: 'setthananpanichnok@gmail.com',
                message: form.message,
            },
            '6oYTs0qr_WGWNQLNg'
        )
            .then(() => {
                setLoading(false)
                alert('Thank you. I will get back to you as soon as possible');

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, 
                (error) => {

                    setLoading(false)

                    console.log(error)

                    alert('Something went wrong.')
                })
    }


    return (
        <>
            <div className="">
                <AnimatedGradientText className="text-left">
                    {/* 👋<hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "} */}
                    <span
                        className={cn(
                            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#ffff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl`,
                        )}
                    >
                        Get in touch
                    </span>
                    {/* < ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                </AnimatedGradientText>
            </div>

            <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

                <motion.div 
                    variants={slideIn('left', "tween", 0.2 , 1)}
                    className="flex-[0.75] bg-black-300 backdrop-blur-sm p-8 rounded-2xl"      
                >
                    
                    {/* <p className={styles.sectionSubText}>Get in touch</p> */}
                    <h3 className={styles.sectionHeadText}>Contact</h3>

                    <form 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8"

                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name ?"
                                className="bg-transparent backdrop-blur-md py-4 px-6 
                                placeholder:text-secondary
                                text-white rounded-lg outlined-none
                                border-none font-medium"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email ?"
                                className="bg-transparent backdrop-blur-md py-4 px-6 
                                placeholder:text-secondary
                                text-white rounded-lg outlined-none
                                border-none font-medium"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea 
                                rows="4"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say ?"
                                className="bg-transparent backdrop-blur-md py-4 px-6 
                                placeholder:text-secondary
                                text-white rounded-lg outlined-none
                                border-none font-medium"
                            />
                        </label>

                        <button 
                            type="submit" 
                            className="bg-neutral-500/10 hover:bg-neutral-700/10 text-[1rem] py-3 px-8 outline-none w-fit text-white hover:text-[#facc15] font-bold shadow-md shadow-primary rounded-xl">
                            {loading ? 'Sending...' : 'Send'}

                        </button>

                    </form>
                </motion.div>

                <motion.div variants={slideIn('right', "tween" , 0.2,0.1)}
                    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                >
                    <EarthCanvas />
                </motion.div>


            </div>
        </>
    )
}

export default SectionWrapper(Contact, "contact")
