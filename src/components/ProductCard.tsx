import { motion } from 'framer-motion';
import type { Product } from '../utils/product';

export default function ProductCard({
  name,
  tagline,
  description,
  logo,
  banner,
  url,
  twitter
}: Product) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pb-12 md:pb-30 flex flex-col pt-12 md:pt-30"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
        <div className="flex items-center gap-3 md:gap-0 w-full md:w-auto">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={logo}
            alt={`${name} Logo`}
            className="rounded-xl md:rounded-4xl w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
          />
          <h3 className="text-3xl md:text-7xl font-extrabold md:px-8">{name}</h3>
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[var(--button-color)] h-14 md:h-25 w-full md:w-auto md:max-w-[15%] md:min-w-[200px] rounded-[7rem] px-5 md:p-16 text-white font-medium text-xl md:text-4xl hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span>View Project</span>
          <img src="arrow.svg" alt="" className="w-4 h-4 md:w-auto md:h-auto" />
        </motion.a>
      </div>
      <div className="flex flex-col">
        <div className="py-5 md:py-12 flex justify-between">
          <div>
            <h4 className="font-medium text-2xl md:text-6xl py-2 md:py-4 leading-tight">
              {tagline}
            </h4>
            <p className="text-[#8C8C8C] text-lg md:text-4xl leading-relaxed">{description}</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.2, rotate: -10 }}
            href={twitter}
          >
            <img src="twitter.svg" alt="" className="w-8 h-8 md:w-auto md:h-auto" />
          </motion.a>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl md:rounded-[3rem] mt-3 md:mt-10"
        >
          <img
            src={banner}
            alt={`${name}-banner`}
            className="w-full transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
