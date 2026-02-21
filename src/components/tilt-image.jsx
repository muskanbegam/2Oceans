import { useRef, useState } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedImage({ rotateAmplitude = 3 }) {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    setLastY(offsetY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.figure
      ref={ref}
      className="relative w-full max-w-6xl mx-auto mt-16 aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] perspective-1000 flex items-center justify-center"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 40 }}
    >
      <motion.div
        className="relative w-full h-full rounded-3xl overflow-hidden transform-style-preserve-3d shadow-xl"
        style={{ rotateX, rotateY }}
      >
        {/* Background Image */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
          alt="Digital Transformation"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24 text-white"
          style={{ transform: "translateZ(60px)" }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight md:leading-snug">
            Accelerating Digital Transformation
          </h1>

          <p className="max-w-3xl text-sm md:text-lg lg:text-xl opacity-90 leading-relaxed md:leading-relaxed">
            We don’t just implement technology — we empower people to use it with confidence.
          </p>

          <a
            href="#creations"
            className="inline-block mt-6 md:mt-8 px-10 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
          >
            Explore Our Services
          </a>
        </div>
      </motion.div>
    </motion.figure>
  );
}