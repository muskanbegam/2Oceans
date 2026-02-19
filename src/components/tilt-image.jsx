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

    const rotationX =
      (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY =
      (offsetX / (rect.width / 2)) * rotateAmplitude;

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
      className="relative w-full h-full [perspective:1000px] mt-16 max-w-5xl mx-auto flex items-center justify-center"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 120, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 40 }}
    >
      <motion.div
        className="relative w-full rounded-2xl overflow-hidden [transform-style:preserve-3d]"
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-16 text-white"
          style={{ transform: "translateZ(60px)" }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Accelerating Digital Transformation
          </h1>

          <p className="max-w-3xl text-sm md:text-lg opacity-90 leading-relaxed">
           We don’t just implement technology — we empower people to use it with confidence.
          </p>

<a
  href="#creations"
  className="inline-block mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition duration-300"
>
  Explore Our Services
</a>

        </div>
      </motion.div>
    </motion.figure>
  );
}
