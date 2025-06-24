import { motion } from 'framer-motion'

export default function LoadingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white text-xl font-semibold animate-pulse">
        Loading...
      </div>
    </motion.div>
  )
}