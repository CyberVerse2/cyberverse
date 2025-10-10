import type { Product } from '../utils/product';

export default function ProductCard({ name, tagline, description, logo, banner, url }: Product) {
  return (
    <div className="pb-12 md:pb-30 flex flex-col pt-12 md:pt-30">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
        <div className="flex items-center gap-3 md:gap-0 w-full md:w-auto">
          <img
            src={logo}
            alt={`${name} Logo`}
            className="rounded-xl md:rounded-4xl w-12 h-12 md:w-auto md:h-auto flex-shrink-0"
          />
          <h3 className="text-3xl md:text-7xl font-extrabold md:px-8">{name}</h3>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[var(--button-color)] h-14 md:h-25 w-full md:w-auto md:max-w-[15%] md:min-w-[200px] rounded-[7rem] px-5 md:p-16 text-white font-medium text-xl md:text-4xl hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span>View Project</span>
          <img src="arrow.svg" alt="" className="w-4 h-4 md:w-auto md:h-auto" />
        </a>
      </div>
      <div className="flex flex-col">
        <div className="py-5 md:py-12">
          <h4 className="font-medium text-2xl md:text-6xl py-2 md:py-4 leading-tight">{tagline}</h4>
          <p className="text-[#8C8C8C] text-lg md:text-4xl leading-relaxed">{description}</p>
        </div>

        <img
          src={banner}
          alt={`${name}-banner`}
          className="rounded-2xl md:rounded-[3rem] mt-3 md:mt-10 w-full"
        />
      </div>
    </div>
  );
}
