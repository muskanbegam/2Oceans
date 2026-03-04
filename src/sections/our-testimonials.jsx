import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        { 
            quote: "The training was practical, structured, and directly aligned with our business needs. Our team was able to apply the concepts immediately in their projects. The impact was visible within weeks.", 
            name: "Richard Nelson", 
            role: "HR Manager, Technology Firm", 
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        },
        { 
            quote: "What stood out was the clarity and hands-on approach. The sessions were engaging, relevant, and tailored to our organization’s objectives.", 
            name: "Sophia Martinez", 
            role: "Learning & Development Head, Corporate Enterprise", 
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        },
        { 
            quote: "Their trainers brought real industry experience into the classroom. It wasn’t just theory — it was actionable knowledge that improved our team’s performance.", 
            name: "Ethan Roberts", 
            role: "Senior IT Lead, Financial Services Company", 
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        },
        { 
            quote: "The program helped bridge the gap between technical knowledge and practical execution. We value the professionalism and consistency they bring.", 
            name: "Isabella Kim", 
            role: "Academic Coordinator, Educational Institution", 
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        },
        { 
            quote: "The trainers quickly understood our technical gaps and customized the sessions accordingly. The training was focused, practical, and delivered with great professionalism.", 
            name: "Liam Johnson", 
            role: "Operations Head, IT Services Company", 
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
        },
        { 
            quote: "We appreciated the structured curriculum and real-world examples shared during the program. Our team gained confidence and clarity in applying new technologies to live projects.", 
            name: "Ava Patel", 
            role: "Project Manager, Enterprise Solutions Firm", 
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
        },
    ];

    return (
        <section className="flex flex-col items-center py-20 pt-0 bg-white" id="testimonials">
            <SectionTitle 
                title="Our Testimonials" 
                description="Trusted by institutions and enterprises across industries." 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto px-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        className="
                            group p-6 rounded-2xl
                            bg-white/70 backdrop-blur-md
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
                            mass: 1
                        }}
                    >
                        <p className="text-slate-700 text-base leading-relaxed">
                            {testimonial.quote}
                        </p>

                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img
                                className="size-10 rounded-full object-cover"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div>
                                <h2 className="text-slate-900 font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-indigo-500 text-sm">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}