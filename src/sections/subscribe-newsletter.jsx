import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function SubscribeNewsletter() {
    const formRef = useRef();
    const [subscribed, setSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);

        try {
            await fetch("https://formsubmit.co/ajax/mohammed.munafff@gmail.com", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            setSubscribed(true);
            formRef.current.reset();
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <section className="flex flex-col items-center px-6 sm:px-8">
            <SectionTitle
                title="Subscribe newsletter"
                description="Stay updated with the latest insights, training programs, and technology trends delivered directly to your inbox."
            />

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex justify-center"
            >
                {/* Hidden fields */}
                <input type="hidden" name="_subject" value="New Newsletter Subscription" />
                <input type="hidden" name="_template" value="table" />
                <input
                    type="hidden"
                    name="message"
                    value="This mail ID subscribed to your newsletter."
                />
                <input type="hidden" name="_captcha" value="false" />

                <motion.div
                    className="
                        mt-10
                        w-full
                        max-w-xl
                        flex
                        flex-col
                        sm:flex-row
                        items-stretch
                        sm:items-center
                        border border-slate-700
                        focus-within:outline
                        focus-within:outline-indigo-600
                        text-sm
                        rounded-2xl
                        sm:rounded-full
                        p-2
                        sm:p-0
                    "
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <input
                        name="email"
                        type="email"
                        required
                        disabled={subscribed}
                        className="
                            bg-transparent
                            outline-none
                            px-4
                            h-14
                            sm:h-14
                            flex-1
                            placeholder:text-slate-400
                            disabled:opacity-60
                        "
                        placeholder="Enter your email address"
                    />

                    <button
                        type="submit"
                        disabled={subscribed || loading}
                        className={`
                            mt-2 sm:mt-0
                            sm:mr-1
                            h-12
                            sm:h-11
                            px-6
                            sm:px-10
                            w-full
                            sm:w-auto
                            rounded-xl
                            sm:rounded-full
                            flex items-center justify-center
                            transition
                            ${
                                subscribed
                                    ? "bg-green-600 text-white"
                                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                            }
                        `}
                    >
                        {loading
                            ? "Subscribing..."
                            : subscribed
                            ? "Subscribed ✓"
                            : "Subscribe"}
                    </button>
                </motion.div>
            </form>
        </section>
    );
}