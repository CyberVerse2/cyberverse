import { products, type Product } from '../utils/product';
import ProductCard from './ProductCard';
export default function Products() {
  return (
    <section>
      <div>
        <span>
          <span>
            <p>Things we've built</p>
          </span>
          <span>
            <p>Experiments</p>
          </span>
          <p>
            Over the years, we’ve worked on products across AI, crypto, and consumer apps. Here are
            some of the things we’ve built along the way.
          </p>
        </span>
      </div>
      <div>
        {products.map((product: Product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}
