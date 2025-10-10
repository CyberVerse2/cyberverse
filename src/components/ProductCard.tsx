import type { Product } from '../utils/product';

export default function ProductCard({ name, tagline, description, logo, banner, url }: Product) {
  return (
    <div className="pb-30 flex flex-col pt-30">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
        <div className="flex items-center">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="rounded-4xl w-20 h-20 md:w-auto md:h-auto"
          />
          <h3 className="text-5xl md:text-7xl font-extrabold px-4 md:px-8">{name}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 bg-[var(--button-color)] h-20 md:h-25 w-full md:w-auto md:max-w-[15%] rounded-[7rem] px-8 md:p-16 text-white font-medium text-3xl md:text-4xl hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span>View Project</span>
          <img src="arrow.svg" alt="" className="w-6 h-6 md:w-auto md:h-auto" />
        </a>
      </div>
      <div className="flex flex-col">
        <div className="py-8 md:py-12">
          <h4 className="font-medium text-4xl md:text-6xl py-2 md:py-4">{tagline}</h4>
          <p className="text-[#8C8C8C] text-2xl md:text-4xl">{description}</p>
        </div>

        <img src={banner} alt={`${name}-banner`} className="rounded-[3rem] mt-6 md:mt-10 w-full" />
      </div>
    </div>
  );
}
