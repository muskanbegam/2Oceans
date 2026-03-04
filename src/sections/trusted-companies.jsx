import { motion } from "framer-motion";

const companies = [
  {
    name: "Capgemini",
    logo: "/assets/companies/capgemini.png",
  },
  {
    name: "Wipro",
    logo: "/assets/companies/wipro.png",
  },
  {
    name: "Cognizant",
    logo: "/assets/companies/cognizant.png",
  },
  {
    name: "TCS",
    logo: "/assets/companies/tcs.png",
  },
  {
    name: "PepsiCo",
    logo: "/assets/companies/pepsico.png",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="relative w-screen h-[400px] flex items-center overflow-hidden">
      {/* Full-Width Sticky Background */}
      <div
        className="absolute inset-0 w-screen h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-light text-center mb-4 tracking-wide text-white/90">
          Trusted by Innovators
        </h2>
        <p className="text-center text-white/70 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
  Our partners rely on solutions that combine innovation, reliability, and thoughtful design to drive measurable impact.
</p>

        {/* Continuous Horizontal Scroll */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {companies.concat(companies).map((company, index) => (
              <div
                key={index}
                className="h-20 w-36 flex-shrink-0 rounded-lg bg-white/80 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-36 max-w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom-left bracket text */}
        <div className="absolute bottom-4 left-4 text-white/70 text-xs tracking-wide">
          [ Empowering innovation across industries ]
        </div>

        {/* Bottom-right large text */}
        <div className="absolute bottom-4 right-4 text-white/20 text-2xl md:text-3xl font-bold tracking-wide select-none">
          REFINED FOR NOW
        </div>
      </div>
    </section>
  );
}