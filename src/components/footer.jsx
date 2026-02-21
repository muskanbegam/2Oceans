import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400  pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
<div className="flex flex-col justify-start translate-y-8 md:translate-y-16">

    <div className="mb-7">
        <h2 className="text-xl font-semibold text-white mb-3">
            2Oceans Consultancy Group
        </h2>

        <p className="leading-relaxed max-w-md">
            We deliver enterprise training, IT consulting, and future-ready
            technology solutions designed to help organizations grow, adapt,
            and succeed in a rapidly evolving digital world.
        </p>
    </div>

    {/* Links */}
    <div className="flex flex-wrap gap-6 text-sm">
        <a className="hover:text-white transition" href="#about">
            About
        </a>
        <a className="hover:text-white transition" href="#">
            Careers
        </a>
        <a className="hover:text-white transition" href="#contact">
            Contact
        </a>
        <a className="hover:text-white transition" href="#">
            Privacy Policy
        </a>
    </div>
</div>
                {/* RIGHT SIDE */}
                <div className="flex justify-center md:justify-end">
                    <div className="translate-y-8 md:translate-y-20">
                        <img
                            className="h-56 sm:h-64 md:h-72 lg:h-80 w-auto object-contain"
                            src="/assets/logo.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <p className="pt-8 mt-10 text-center border-t border-slate-700 text-xs">
                Copyright 2026 ©{" "}
                <span className="text-white font-medium">
                    2Oceans Consultancy Group
                </span>{" "}
                • Developed by{" "}
                <span className="text-white font-medium">
                    Muskan
                </span>{" "}
                • All Rights Reserved.
            </p>
        </motion.footer>
    );
}