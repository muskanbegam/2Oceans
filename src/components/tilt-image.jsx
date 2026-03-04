import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Layout,
} from "lucide-react";

const skills = [
  { name: "Frontend", icon: Layout },
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Cpu },
  { name: "Backend", icon: Database },
  { name: "Cloud", icon: Cloud },
  { name: "Git", icon: GitBranch },
];

export default function SkillsRow() {
  return (
    <section className="bg-whitepy-12 md:py-16 overflow-hidden pt-6 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Infinite Scroll Wrapper */}
        <div className="relative overflow-hidden">
          
          {/* Fade Left */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3
                             bg-gray-50 border border-gray-200
                             px-5 py-3 rounded-full
                             shadow-sm
                             text-sm md:text-base
                             whitespace-nowrap"
                >
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span className="font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}