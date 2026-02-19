import SectionTitle from "../components/section-title";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInTouch() {
    return (
        <section className="flex flex-col items-center" id="contact">
            <SectionTitle 
                title="Get in touch" 
                description="Connect with us to discuss how our training and technology solutions can support your organization’s growth." 
            />

            <form 
                action="https://formsubmit.co/mohammed.munafff@gmail.com"
                method="POST"
                className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl mx-auto text-slate-400 mt-16 w-full'
            >

                {/* Hidden Settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_template" value="table" />

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <label className='font-medium text-slate-200'>Your name</label>
                    <input 
                        name='name' 
                        type="text" 
                        required
                        placeholder='Enter your name' 
                        className='w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus:ring-1 transition focus:ring-indigo-600' 
                    />
                </motion.div>

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <label className='font-medium text-slate-200'>Email id</label>
                    <input 
                        name='email' 
                        type="email" 
                        required
                        placeholder='Enter your email' 
                        className='w-full mt-2 p-3 outline-none border border-slate-700 rounded-lg focus:ring-1 transition focus:ring-indigo-600' 
                    />
                </motion.div>

                <motion.div 
                    className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <label className='font-medium text-slate-200'>Message</label>
                    <textarea 
                        name='message' 
                        rows={8} 
                        required
                        placeholder='Enter your message' 
                        className='resize-none w-full mt-2 p-3 outline-none rounded-lg focus:ring-1 transition focus:ring-indigo-600 border border-slate-700' 
                    />
                </motion.div>

                <motion.button 
                    type='submit' 
                    className='w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Submit
                    <ArrowUpRight className="size-4.5" />
                </motion.button>

            </form>
        </section>
    );
}
