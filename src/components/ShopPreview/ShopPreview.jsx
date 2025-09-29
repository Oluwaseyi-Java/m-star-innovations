import React from 'react';
import './ShopPreview.css';

const ShopPreview = () => {
  const products = [
    {
      id: 1,
      name: 'Dell XPS 13 Laptop',
      category: 'Laptops',
      price: '₦450,000',
      originalPrice: '₦520,000',
      image: '💻',
      features: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.4" FHD Display'],
      rating: 4.8,
      reviewCount: 124,
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 2,
      name: 'HP Pavilion 15',
      category: 'Laptops',
      price: '₦320,000',
      originalPrice: '₦380,000',
      image: '💻',
      features: ['Intel Core i5', '8GB RAM', '256GB SSD', '15.6" Display'],
      rating: 4.5,
      reviewCount: 89,
      badge: 'Great Value',
      inStock: true
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      category: 'Laptops',
      price: '₦680,000',
      originalPrice: '',
      image: '💻',
      features: ['Apple M2 Chip', '8GB RAM', '256GB SSD', '13.6" Retina'],
      rating: 4.9,
      reviewCount: 156,
      badge: 'Premium',
      inStock: true
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      category: 'Accessories',
      price: '₦8,500',
      originalPrice: '₦12,000',
      image: '🖱️',
      features: ['2.4GHz Wireless', 'Ergonomic Design', '12 Months Warranty'],
      rating: 4.3,
      reviewCount: 67,
      badge: 'Sale',
      inStock: true
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      category: 'Accessories',
      price: '₦25,000',
      originalPrice: '₦32,000',
      image: '⌨️',
      features: ['RGB Backlit', 'Blue Switches', 'Anti-ghosting'],
      rating: 4.6,
      reviewCount: 42,
      badge: 'Hot Item',
      inStock: true
    },
    {
      id: 6,
      name: 'Laptop Backpack',
      category: 'Accessories',
      price: '₦15,000',
      originalPrice: '',
      image: '🎒',
      features: ['Water Resistant', 'Laptop Compartment', 'Multiple Pockets'],
      rating: 4.4,
      reviewCount: 38,
      badge: 'New',
      inStock: true
    },
    {
      id: 7,
      name: 'USB-C Hub',
      category: 'Accessories',
      price: '₦12,000',
      originalPrice: '₦16,000',
      image: '🔌',
      features: ['7-in-1 Ports', '4K HDMI', '100W PD', 'USB 3.0'],
      rating: 4.2,
      reviewCount: 53,
      badge: '',
      inStock: true
    },
    {
      id: 8,
      name: 'Laptop Cooling Pad',
      category: 'Accessories',
      price: '₦9,500',
      originalPrice: '₦13,000',
      image: '❄️',
      features: ['Dual Fans', 'Adjustable Height', 'Blue LED Lights'],
      rating: 4.1,
      reviewCount: 29,
      badge: 'Sale',
      inStock: true
    }
  ];

  const categories = ['All', 'Laptops', 'Accessories'];

  return (
    <section className="shop-preview" id="shop">
      <div className="shop-container">
        
        {/* Section Header */}
        <div className="shop-header">
          <h2 className="shop-title">Featured Laptops & Accessories</h2>
          <p className="shop-subtitle">
            Discover our curated selection of high-quality laptops and essential accessories 
            at competitive prices. Perfect for work, study, and gaming.
          </p>
        </div>

        {/* Category Filters */}
        <div className="shop-filters">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`shop-filter-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
              {/* Product Badge */}
              {product.badge && (
                <div className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="product-image">
                <div className="product-emoji">{product.image}</div>
                {/* In real implementation, this would be an actual image */}
              </div>

              {/* Product Category */}
              <div className="product-category">{product.category}</div>
              
              {/* Product Name */}
              <h3 className="product-name">{product.name}</h3>
              
              {/* Product Rating */}
              <div className="product-rating">
                <div className="stars">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="rating-text">({product.reviewCount})</span>
              </div>

              {/* Product Features */}
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price Section */}
              <div className="product-pricing">
                <span className="current-price">{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
              </div>

              {/* Stock Status */}
              <div className="stock-status">
                <span className={`status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="product-actions">
                <button className="add-to-cart-btn">
                  <span className="cart-icon">🛒</span>
                  Add to Cart
                </button>
                <button className="buy-now-btn">Buy Now</button>
              </div>

            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="shop-cta">
          <div className="cta-content">
            <h3>Ready to Find Your Perfect Tech?</h3>
            <p>Explore our full catalog with 20+ quality products and exclusive deals.</p>
            <button className="view-all-btn">View All Products</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopPreview;