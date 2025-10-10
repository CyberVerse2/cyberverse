import { products, type Product } from '../utils/product';
import ProductCard from './ProductCard';
export default function Products() {
  return (
    <section className="bg-[#fafafa] py-20 md:py-30 -mx-6 md:-mx-25 px-4 md:px-25">
      <div>
        <div>
          <div className="w-[90%] md:w-3/4 lg:w-1/2 h-32 md:h-50 bg-white flex justify-between rounded-[8rem] mx-auto p-2 md:p-6 mb-6 font-semibold">
            <span className="w-1/2 h-full bg-[var(--button-color)] flex justify-center items-center text-white rounded-[8rem] px-1 md:px-4">
              <p className="text-center leading-tight text-[1.6rem] md:text-5xl lg:text-6xl">
                Things we've built
              </p>
            </span>
            <span className="w-1/2 h-full flex justify-center items-center px-1 md:px-4">
              <p className="text-center leading-tight text-[1.6rem] md:text-5xl lg:text-6xl">
                Experiments
              </p>
            </span>
          </div>
          <p className="text-lg md:text-[2.4rem] text-center w-[95%] md:w-[70%] lg:w-[58%] mx-auto py-6 md:py-10 leading-relaxed">
            Over the years, we've worked on products across AI, crypto, and consumer apps. Here are
            some of the things we've built along the way.
          </p>
        </div>
      </div>
      <div>
        {products.map((product: Product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
