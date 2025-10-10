import type { Product } from '../utils/product';

export default function ProductCard({
  name,
  tagline,
  description,
  logo,
  banner,
  url,
}: Product) {
  return (
    <div className={`pb-30 flex flex-col pt-30`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Snap Logo" className="rounded-4xl" />
          <h3 className="text-7xl font-extrabold px-8">{name}</h3>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[var(--button-color)] h-25 max-w-[15%] rounded-[7rem] p-16 text-white font-medium text-4xl hover:opacity-90 transition-opacity"
        >
          <span>View Project</span>
          <img src="arrow.svg" alt="" />
        </a>
      </div>
      <div className="flex flex-col">
        <div className='py-12'>
          <h4 className="font-medium text-6xl py-4">{tagline}</h4>
          <p className="text-[#8C8C8C] text-4xl">{description}</p>
        </div>

        <img src={banner} alt={`${name}-banner`} className="rounded-[3rem] mt-10" />
      </div>
    </div>
  );
}
