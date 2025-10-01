import type { Product } from '../utils/product';

export default function ProductCard({ name, tagline, description, logo, banner }: Product) {
  return (
    <div>
      <div>
        <img src={logo} alt="Snap Logo" />
        <h3>{name}</h3>
        <a href="">View Project</a>
      </div>
      <div>
        <h4>{tagline}</h4>
        <p>{description}</p>
      </div>
      
      <img src={banner} alt={`${name}-banner`} />
    </div>
  );
}
