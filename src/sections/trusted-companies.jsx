import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function TrustedCompanies() {
    return (
        <section className="flex flex-col items-center px-4">
            <SectionTitle
                title="Trusted companies"
                description="We are proud to partner with organizations that value quality, innovation, and measurable impact. Our long-term collaborations reflect the trust our clients place in our expertise and commitment."
            />

            <motion.div
                className="relative max-w-5xl py-16 md:py-26 mt-14 md:mt-18 md:w-full overflow-hidden mx-auto border border-indigo-900 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-6 md:p-10 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {/* Glow Effects */}
                <div className="absolute pointer-events-none top-10 left-10 md:left-20 size-48 md:size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[150px] md:blur-[180px]"></div>
                <div className="absolute pointer-events-none bottom-10 right-10 md:right-20 size-48 md:size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[150px] md:blur-[180px]"></div>

                {/* Text Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl font-medium max-w-xl mt-2 md:mt-5 bg-gradient-to-r from-white to-[#b6abff] text-transparent bg-clip-text">
                        Trusted by leading companies.
                    </h1>

                    <p className="text-sm sm:text-base text-slate-400 max-w-lg mt-4">
                        We are honored to work with organizations that prioritize excellence and continuous growth. The trust our clients place in us reflects our dedication to delivering consistent quality, practical expertise, and measurable results.
                    </p>
                </div>

                {/* Logos Section */}
                <div className="w-full md:w-auto mt-10 md:mt-0">

                    {/* MOBILE LAYOUT */}
                    <div className="grid grid-cols-2 gap-4 md:hidden">
                        {["capgemini", "wipro", "cognizant", "tcs", "pepsico"].map((company) => (
                            <div
                                key={company}
                                className="flex items-center justify-center h-24 rounded-2xl
                                           border border-indigo-400/30
                                           bg-indigo-500/10
                                           backdrop-blur-xl
                                           shadow-[0_0_25px_rgba(99,102,241,0.15)]"
                            >
                                <img
                                    src={`/assets/companies/${company}.png`}
                                    alt={company}
                                    className={`h-14 w-auto object-contain ${
                                        company === "cognizant"
                                            ? "invert brightness-125"
                                            : ""
                                    }`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP LAYOUT (unchanged look) */}
                    <div className="hidden md:block space-y-6 md:-mr-1">
                        {/* First Row */}
                        <div className="grid grid-cols-3 gap-6">
                            {["capgemini", "wipro", "cognizant"].map((company) => (
                                <div
                                    key={company}
                                    className="flex items-center justify-center h-32 rounded-2xl
                                               border border-indigo-400/30
                                               bg-indigo-500/10
                                               backdrop-blur-xl
                                               shadow-[0_0_30px_rgba(99,102,241,0.15)]
                                               transition duration-300 hover:scale-105"
                                >
                                    <img
                                        src={`/assets/companies/${company}.png`}
                                        alt={company}
                                        className={`h-24 w-auto object-contain ${
                                            company === "cognizant"
                                                ? "invert brightness-125"
                                                : ""
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Second Row */}
                        <div className="flex justify-center gap-6">
                            {["tcs", "pepsico"].map((company) => (
                                <div
                                    key={company}
                                    className="w-1/3 flex items-center justify-center h-32 rounded-2xl
                                               border border-indigo-400/30
                                               bg-indigo-500/10
                                               backdrop-blur-xl
                                               shadow-[0_0_30px_rgba(99,102,241,0.15)]
                                               transition duration-300 hover:scale-105"
                                >
                                    <img
                                        src={`/assets/companies/${company}.png`}
                                        alt={company}
                                        className="h-24 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}