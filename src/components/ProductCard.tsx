import type { Product } from '../utils/product';

export default function ProductCard({
  name,
  tagline,
  description,
  logo,
  banner,
  isFirst
}: Product & { isFirst?: boolean }) {
  return (
    <div className={`pb-30 flex-col ${isFirst ? 'pt-30' : ''}`}>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src={logo} alt="Snap Logo" className="rounded-2xl" />
          <h3 className="text-7xl font-extrabold px-8">{name}</h3>
        </div>
        <div className="flex items-center justify-between bg-[var(--button-color)] h-25 w-[15%]  rounded-[7rem] p-16 text-white">
          <a href="" className="   font-medium text-4xl text-center">
            View Project
          </a>
          <img src="arrow.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col ">
        <div>
          <h4 className="font-medium text-6xl py-4">{tagline}</h4>
          <p className="text-[#8C8C8C] text-4xl pb-14">{description}</p>
        </div>

        <img src={banner} alt={`${name}-banner`} className="rounded-[3rem]" />
      </div>
    </div>
  );
}
