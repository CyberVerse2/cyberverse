import { useState } from 'react';
import { products, experiments, type Product } from '../utils/product';
import ProductCard from './ProductCard';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'products' | 'experiments'>('products');

  const displayItems = activeTab === 'products' ? products : experiments;

  return (
    <section className="bg-[#fafafa] py-20 md:py-30 -mx-6 md:-mx-25 px-4 md:px-25">
      <div>
        <div>
          <div className="w-[90%] md:w-3/4 lg:w-1/2 h-32 md:h-50 bg-white flex justify-between rounded-[8rem] mx-auto p-2 md:p-6 mb-6 font-semibold cursor-pointer">
            <span
              onClick={() => setActiveTab('products')}
              className={`w-1/2 h-full flex justify-center items-center rounded-[8rem] px-1 md:px-4 transition-all duration-300 ${
                activeTab === 'products' ? 'bg-[var(--button-color)] text-white' : 'text-black'
              }`}
            >
              <p className="text-center leading-tight text-[1.6rem] md:text-5xl lg:text-6xl">
                Products
              </p>
            </span>
            <span
              onClick={() => setActiveTab('experiments')}
              className={`w-1/2 h-full flex justify-center items-center rounded-[8rem] px-1 md:px-4 transition-all duration-300 ${
                activeTab === 'experiments' ? 'bg-[var(--button-color)] text-white' : 'text-black'
              }`}
            >
              <p className="text-center leading-tight text-[1.6rem] md:text-5xl lg:text-6xl">
                Experiments
              </p>
            </span>
          </div>
          <p className="text-lg md:text-[2.4rem] text-center w-[95%] md:w-[70%] lg:w-[58%] mx-auto py-6 md:py-10 leading-relaxed">
            {activeTab === 'products'
              ? "Over the years, we've worked on products across AI, crypto, and consumer apps. Here are some of the things we've built along the way."
              : "We love to experiment with new technologies and ideas. Here are some of our latest experiments and prototypes."}
          </p>
        </div>
      </div>
      <div className="transition-all duration-500">
        {displayItems.map((item: Product) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
