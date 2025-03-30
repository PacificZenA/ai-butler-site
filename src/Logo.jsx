import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "linear",
      }}
      className="font-bold tracking-widest text-lg text-white select-none inline-block"
      style={{
        textShadow: "0 0 12px rgba(255,255,255,0.6)",
        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
      }}
    >
      <span className="px-3 py-1 border border-white rounded-full inline-block bg-black/30 backdrop-blur">
        AT
      </span>
    </motion.div>
  );
}
