import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const sectionData = [
        {
            title: "Institutional Training",
            description:
                "Empowering institutions with practical, future-ready technology training that prepares learners for real-world success.",
            image: "/assets/talking-audience.jpg",
            align: "object-center",
        },
        {
            title: "Corporate IT Training Programs",
            description:
                "Practical, industry-focused programs that empower your workforce with future-ready technology skills.",
            image: "/assets/services2.jpg",
            align: "object-right",
        },
        {
            title: "Talent as a Service",
            description:
                "On-demand access to skilled technology professionals who integrate seamlessly with your team.",
            image: "/assets/services3.jpg",
            align: "object-center",
        },
    ];

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section
            className="flex flex-col items-center px-4 md:px-8"
            id="creations"
        >
            <SectionTitle
                title="What We Offer"
                description="We deliver comprehensive training and technology solutions designed to strengthen teams, optimize operations, and accelerate digital growth."
            />

            <div
                className="
                flex flex-col md:flex-row
                items-center
                gap-4
                w-full
                max-w-6xl
                mt-12
                mx-auto
                "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {sectionData.map((data, index) => (
                    <motion.div
                        key={data.title}
                        className={`
                        relative group flex-grow
                        h-[250px] sm:h-[300px] md:h-[400px]
                        w-full md:w-56
                        rounded-xl overflow-hidden
                        transition-all duration-500
                        ${
                            isHovered
                                ? "md:hover:w-full"
                                : index === activeIndex
                                ? "md:w-full"
                                : "md:w-56"
                        }
                        `}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1,
                        }}
                    >
                        <img
                            className={`h-full w-full object-cover ${data.align}`}
                            src={data.image}
                            alt={data.title}
                            loading="lazy"
                        />

                        <div
                            className={`
                            absolute inset-0
                            flex flex-col justify-end
                            p-6 sm:p-8 md:p-10
                            text-white bg-black/50
                            transition-all duration-300
                            ${
                                isHovered
                                    ? "opacity-0 group-hover:opacity-100"
                                    : index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }
                            `}
                        >
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                {data.title}
                            </h1>
                            <p className="text-xs sm:text-sm mt-2">
                                {data.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}