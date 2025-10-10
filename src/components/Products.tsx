import { products, type Product } from '../utils/product';
import ProductCard from './ProductCard';
export default function Products() {
  return (
    <section className="bg-[#fafafa] py-30 -mx-25 px-25">
      <div>
        <div>
          <div className="w-1/2 h-45 bg-white flex justify-between rounded-[8rem] mx-auto p-6 mb-6 text-5xl font-semibold">
            <span className="w-1/2 h-full bg-[var(--button-color)] flex justify-center items-center text-white rounded-[8rem]">
              <p>Things we've built</p>
            </span>
            <span className="w-1/2 h-full flex justify-center items-center">
              <p>Experiments</p>
            </span>
          </div>
          <p className="text-4xl text-center w-[58%] mx-auto">
            Over the years, we’ve worked on products across AI, crypto, and consumer apps. Here are
            some of the things we’ve built along the way.
          </p>
        </div>
      </div>
      <div>
        {products.map((product: Product, index: number) => (
          <ProductCard key={product.name} {...product} isFirst={index === 0} />
        ))}
      </div>
    </section>
  );
}
