import { useState } from 'react';
import { products, experiments, type Product } from '../utils/product';
import ProductCard from './ProductCard';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'products' | 'experiments'>('products');
  const displayItems = activeTab === 'products' ? products : experiments;

  return (
    <section
      id="products"
      className="px-6 md:px-16"
      style={{
        background: '#09090D',
        paddingBottom: '10rem',
        position: 'relative',
      }}
    >
      {/* Top divider */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'rgba(255,255,255,0.06)',
          marginBottom: '10rem',
        }}
      />

      <div style={{ maxWidth: '140rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '8rem' }}>
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '1.2rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#309fe9',
              marginBottom: '3.5rem',
            }}
          >
            // our work
          </p>

          {/* Tab toggle */}
          <div
            style={{
              display: 'inline-flex',
              gap: '0.3rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '10rem',
              padding: '0.4rem',
              marginBottom: '3.5rem',
            }}
          >
            {(['products', 'experiments'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: 'Unbounded, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.6rem)',
                  letterSpacing: '-0.01em',
                  padding: '1.2rem 3.5rem',
                  borderRadius: '10rem',
                  transition: 'all 0.3s ease',
                  background: activeTab === tab ? '#309fe9' : 'transparent',
                  color: activeTab === tab ? '#060608' : 'rgba(240, 237, 230, 0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: 'clamp(1.3rem, 1.7vw, 1.7rem)',
              color: 'rgba(240, 237, 230, 0.38)',
              lineHeight: 1.8,
              maxWidth: '72rem',
              letterSpacing: '0.01em',
            }}
          >
            {activeTab === 'products'
              ? "Over the years, we've worked on products across AI, crypto, and consumer apps. Here are some of the things we've built along the way."
              : "We love to experiment with frontier crypto technologies. Here are some of the fun stuff we've been up to."}
          </p>
        </div>

        {/* Product cards */}
        <div style={{ transition: 'all 0.5s ease' }}>
          {displayItems.map((item: Product) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
