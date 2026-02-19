import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function TrustedCompanies() {
    return (
        <section className="flex flex-col items-center">
            <SectionTitle title="Trusted companies" description="We are proud to partner with organizations that value quality, innovation, and measurable impact. Our long-term collaborations reflect the trust our clients place in our expertise and commitment." />
            <motion.div className="relative max-w-5xl py-20 md:py-26 mt-18 md:w-full overflow-hidden mx-2 md:mx-auto border border-indigo-900 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/5 to-[#180027]/10 rounded-3xl p-4 md:p-10 text-white"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="absolute pointer-events-none top-10 -z-1 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]"></div>
                <div className="absolute pointer-events-none bottom-10 -z-1 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#4F39F6]/60 blur-[180px]"></div>
                <div className="flex flex-col items-center md:items-start max-md:text-center">
                    {/* <a href="#!" className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-indigo-300 bg-indigo-200/15">
                        <span className="bg-indigo-600 text-white text-xs px-3.5 py-1 rounded-full">
                            NEW
                        </span>
                        <p className="flex items-center gap-1">
                            <span>Try 30 days free trial option </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right group-hover:translate-x-0.5 transition duration-300"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a> */}
                    <h1 className="text-3xl font-medium max-w-xl mt-5 bg-gradient-to-r from-white to-[#b6abff] text-transparent bg-clip-text">Trusted by leading companies.</h1>
                    <p className="text-base text-slate-400 max-w-lg mt-4">
                        We are honored to work with organizations that prioritize excellence and continuous growth. The trust our clients place in us reflects our dedication to delivering consistent quality, practical expertise, and measurable results.
                    </p>
                    {/* <button className="flex items-center gap-1 text-sm px-6 py-2.5 border border-indigo-400 hover:bg-indigo-300/10 active:scale-95 transition rounded-full mt-6">
                        Read more
                        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4243 5.42426C12.6586 5.18995 12.6586 4.81005 12.4243 4.57574L8.60589 0.757359C8.37157 0.523045 7.99167 0.523045 7.75736 0.757359C7.52304 0.991674 7.52304 1.37157 7.75736 1.60589L11.1515 5L7.75736 8.39411C7.52304 8.62843 7.52304 9.00833 7.75736 9.24264C7.99167 9.47696 8.37157 9.47696 8.60589 9.24264L12.4243 5.42426ZM0 5L0 5.6L12 5.6V5V4.4L0 4.4L0 5Z" fill="white" />
                        </svg>
                    </button> */}
                </div>
<div className="md:-mr-1 max-md:mt-10 space-y-6">

  {/* First Row - 3 Logos */}
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
          src={`/agentix-react/assets/companies/${company}.png`}
          alt={company}
          className={`h-28 w-auto object-contain ${
            company === "cognizant"
              ? "invert brightness-125"
              : ""
          }`}
        />
      </div>
    ))}
  </div>

  {/* Second Row - 2 Logos Centered */}
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
          src={`/agentix-react/assets/companies/${company}.png`}
          alt={company}
          className="h-28 w-auto object-contain"
        />
      </div>
    ))}
  </div>

</div>





            </motion.div>
        </section>
    );
}