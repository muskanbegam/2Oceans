import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { Target, GraduationCap, ShieldCheck } from "lucide-react";

export default function AboutOurApps() {

    const sectionData = [
        {
            title: "Why We Exist",
            description:
                "Digital transformation is not just about adopting new tools — it’s about enabling people to use them effectively. We exist to ensure organizations don’t just invest in technology, but truly benefit from it.",
            icon: <Target className="w-5 h-5 text-indigo-500" />,
        },
        {
            title: "What We Deliver",
            description:
                "We provide highly skilled IT trainers and structured corporate training programs tailored to business objectives. Our programs are practical, outcome-driven, and aligned with real industry demands.",
            icon: <GraduationCap className="w-5 h-5 text-indigo-500" />,
        },
        {
            title: "Why Organizations Trust Us",
            description:
                "We focus on measurable results, long-term partnerships, and training that creates immediate workplace impact. Our approach is professional, adaptable, and built around your success.",
            icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
        },
    ];

    return (
        <section className="flex flex-col items-centerbg-white" id="about">
            <SectionTitle
                title="Our Story"
                description="Built on expertise, driven by purpose, and focused on creating meaningful digital impact."
            />

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0 mt-16">
                {sectionData.map((data, index) => (
                    <motion.div
                        key={data.title}
                        className="
                            text-center flex flex-col items-center
                            p-8 rounded-2xl
                            bg-white/60 backdrop-blur-md
                            border border-slate-200
                            shadow-sm hover:shadow-md
                            transition-all duration-300
                        "
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
                        {/* Icon */}
                        <div
                            className="
                                w-12 h-12 flex items-center justify-center 
                                rounded-xl 
                                bg-indigo-500/10 
                                border border-indigo-200
                            "
                        >
                            {data.icon}
                        </div>

                        {/* Content */}
                        <div className="mt-6 space-y-2">
                            <h3 className="text-lg font-semibold text-slate-900">
                                {data.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {data.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}