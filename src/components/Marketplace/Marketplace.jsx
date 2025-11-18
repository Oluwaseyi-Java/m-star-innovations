import React, { useState } from 'react';
import './Marketplace.css';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'computers', name: 'Computers', icon: '💻' },
    { id: 'phones', name: 'Phones', icon: '📱' },
    { id: 'office-equipment', name: 'Office Equipment', icon: '🖨️' },
    { id: 'safety-security', name: 'Safety & Security', icon: '🚨' },
    { id: 'ict-gadgets', name: 'ICT Gadgets', icon: '🔧' },
    { id: 'medical-lab', name: 'Medical & Lab', icon: '🧪' },
    { id: 'agricultural', name: 'Agricultural', icon: '🌾' }
  ];

  const products = [
    {
      id: 1,
      name: 'Dell XPS 13 Business Laptop',
      category: 'computers',
      price: 450000,
      originalPrice: 520000,
      image: '/images/products/laptop-dell-xps13.jpg',
      description: 'Professional business laptop with Intel Core i7, 16GB RAM, 512GB SSD for optimal performance',
      features: ['Intel Core i7', '16GB RAM', '512GB SSD', '13.4" FHD Display', 'Business Grade'],
      rating: 4.8,
      reviewCount: 124,
      inStock: true,
      badge: 'Best Seller',
      delivery: '24-48 hours'
    },
    {
      id: 2,
      name: 'HP LaserJet Pro Printer',
      category: 'office-equipment',
      price: 85000,
      originalPrice: 105000,
      image: '/images/products/printer-hp-laserjet.jpg',
      description: 'High-speed professional laser printer for office use with wireless connectivity',
      features: ['Laser Printing', 'Wireless', 'Auto Duplex', 'High Capacity'],
      rating: 4.5,
      reviewCount: 89,
      inStock: true,
      badge: 'Office Essential',
      delivery: '24 hours'
    },
    {
      id: 3,
      name: 'Industrial Fire Extinguisher',
      category: 'safety-security',
      price: 25000,
      originalPrice: 32000,
      image: '/images/products/fire-extinguisher.jpg',
      description: 'Industrial-grade fire extinguisher meeting all safety standards and regulations',
      features: ['10kg Capacity', 'ABC Type', 'Wall Mount', 'Certified'],
      rating: 4.7,
      reviewCount: 56,
      inStock: true,
      badge: 'Safety First',
      delivery: '48 hours'
    },
    {
      id: 4,
      name: 'Network Switch 24-Port',
      category: 'ict-gadgets',
      price: 65000,
      originalPrice: 80000,
      image: '/images/products/network-switch.jpg',
      description: 'Professional 24-port gigabit network switch for enterprise infrastructure',
      features: ['24 Ports', 'Gigabit Speed', 'Rack Mount', 'Managed'],
      rating: 4.6,
      reviewCount: 42,
      inStock: true,
      badge: 'Infrastructure',
      delivery: '72 hours'
    },
    {
      id: 5,
      name: 'Laboratory Microscope',
      category: 'medical-lab',
      price: 120000,
      originalPrice: 150000,
      image: '/images/products/microscope.jpg',
      description: 'Professional laboratory microscope with digital imaging capabilities',
      features: ['1000x Magnification', 'Digital Camera', 'LED Illumination', 'Professional Grade'],
      rating: 4.8,
      reviewCount: 31,
      inStock: true,
      badge: 'Lab Equipment',
      delivery: '1 week'
    },
    {
      id: 6,
      name: 'Office Desk Executive',
      category: 'office-equipment',
      price: 75000,
      originalPrice: 90000,
      image: '/images/products/office-desk.jpg',
      description: 'Executive office desk with premium finish and built-in cable management',
      features: ['Premium Wood', 'Cable Management', 'Spacious', 'Ergonomic'],
      rating: 4.4,
      reviewCount: 67,
      inStock: true,
      badge: 'Furniture',
      delivery: '3-5 days'
    },
    {
      id: 7,
      name: 'CCTV Security System',
      category: 'safety-security',
      price: 185000,
      originalPrice: 220000,
      image: '/images/products/cctv-system.jpg',
      description: 'Complete 8-channel CCTV security system with night vision and remote monitoring',
      features: ['8 Cameras', 'Night Vision', 'Remote Access', '1TB Storage'],
      rating: 4.9,
      reviewCount: 78,
      inStock: true,
      badge: 'Security',
      delivery: '48 hours'
    },
    {
      id: 8,
      name: 'Agricultural Sprayer',
      category: 'agricultural',
      price: 45000,
      originalPrice: 55000,
      image: '/images/products/sprayer.jpg',
      description: 'Professional agricultural sprayer for farm and plantation use',
      features: ['20L Capacity', 'Pressure Pump', 'Adjustable Nozzle', 'Durable'],
      rating: 4.3,
      reviewCount: 45,
      inStock: true,
      badge: 'Farm Equipment',
      delivery: '1 week'
    },
    {
      id: 9,
      name: 'Desktop Computer i5',
      category: 'computers',
      price: 285000,
      originalPrice: 320000,
      image: '/images/products/desktop-i5.jpg',
      description: 'High-performance desktop computer for office and business applications',
      features: ['Intel Core i5', '8GB RAM', '1TB HDD', 'Windows 11 Pro'],
      rating: 4.5,
      reviewCount: 92,
      inStock: true,
      badge: 'Office Ready',
      delivery: '24-48 hours'
    },
    {
      id: 10,
      name: 'Medical Refrigerator',
      category: 'medical-lab',
      price: 320000,
      originalPrice: 380000,
      image: '/images/products/medical-fridge.jpg',
      description: 'Professional medical refrigerator for vaccine and pharmaceutical storage',
      features: ['2-8°C Range', 'Digital Display', 'Alarm System', 'Lockable'],
      rating: 4.7,
      reviewCount: 38,
      inStock: true,
      badge: 'Medical Grade',
      delivery: '1 week'
    },
    {
      id: 11,
      name: 'Smartphone Samsung A系列',
      category: 'phones',
      price: 125000,
      originalPrice: 150000,
      image: '/images/products/samsung-phone.jpg',
      description: 'Latest Samsung smartphone with advanced features for business professionals',
      features: ['6.4" Display', '128GB Storage', 'Quad Camera', '5G Ready'],
      rating: 4.6,
      reviewCount: 156,
      inStock: true,
      badge: 'Latest Model',
      delivery: '24 hours'
    },
    {
      id: 12,
      name: 'Projector Epson',
      category: 'office-equipment',
      price: 95000,
      originalPrice: 120000,
      image: '/images/products/projector.jpg',
      description: 'High-lumen projector for presentations and conference room setup',
      features: ['4000 Lumens', 'HD Resolution', 'Wireless', 'Portable'],
      rating: 4.4,
      reviewCount: 63,
      inStock: true,
      badge: 'Presentation',
      delivery: '48 hours'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="marketplace-page">
      
      {/* Hero Section */}
      <section className="marketplace-hero">
        <div className="marketplace-hero-container">
          <div className="marketplace-hero-content">
            <h1 className="marketplace-hero-title">M-Star Innovations Marketplace</h1>
            <p className="marketplace-hero-subtitle">
              We provide high standard of goods and services with timely delivery from modern 
              universal technologies and digital advancement. Your trusted partner for quality 
              procurement in Nigeria.
            </p>
            
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-box">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search computers, office equipment, safety devices, medical equipment..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Quality Assured</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🚚</span>
                <span>Timely Delivery</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🔧</span>
                <span>After-Sales Support</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💼</span>
                <span>Bulk Order Discount</span>
              </div>
            </div>
          </div>
          <div className="marketplace-hero-image">
            <div className="hero-graphic">
              <div className="graphic-element">🏢</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Banner */}
      <section className="specialization-banner">
        <div className="container">
          <div className="banner-content">
            <h2>Our Specializations</h2>
            <p>
              We specialize in comprehensive procurement of Computers, Phones, Office equipment, 
              Printing equipment, Safety/Fire equipment, Mechanical spares, Security gadgets, 
              Electrical instrumentation, Chemical, Medical and Laboratory equipment, Civil materials, 
              Fixtures and furniture, Agricultural produces and commodities.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-header">
            <h2>Product Categories</h2>
            <p>Browse our comprehensive range of quality products and equipment</p>
          </div>
          
          <div className="categories-grid">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <div className="products-info">
              <h2>
                {activeCategory === 'all' ? 'All Products' : 
                 categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              <p>{filteredProducts.length} products found • Quality guaranteed</p>
            </div>
            
            <div className="cart-indicator" onClick={() => setIsCartOpen(true)}>
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartItems.length}</span>
              <span className="cart-text">Cart</span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="cta-button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && (
                    <div className={`product-badge ${product.badge.toLowerCase().replace(' ', '-')}`}>
                      {product.badge}
                    </div>
                  )}

                  <div className="product-image">
                    {/* Image placeholder - replace with actual image path */}
                    <div className="image-placeholder">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="image-fallback">
                        <span className="fallback-icon">{categories.find(cat => cat.id === product.category)?.icon}</span>
                        <span className="fallback-text">Product Image</span>
                      </div>
                    </div>
                    <div className="delivery-time">
                      <span className="delivery-icon">🚚</span>
                      {product.delivery}
                    </div>
                  </div>

                  <div className="product-info">
                    <span className="product-category">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    
                    <div className="product-features">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="feature-tag more">+{product.features.length - 3} more</span>
                      )}
                    </div>

                    <div className="product-rating">
                      <div className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="rating-value">{product.rating}</span>
                      <span className="rating-text">({product.reviewCount})</span>
                    </div>

                    <div className="product-pricing">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                      )}
                      {product.originalPrice && (
                        <span className="discount">
                          Save {formatPrice(product.originalPrice - product.price)}
                        </span>
                      )}
                    </div>

                    <div className="stock-status">
                      <span className={`status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                      </span>
                    </div>
                  </div>

                  <div className="product-actions">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      <span className="cart-icon">🛒</span>
                      Add to Cart
                    </button>
                    <button 
                      className="buy-now-btn"
                      disabled={!product.inStock}
                    >
                      Quick Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services CTA */}
      {/* <section className="services-cta">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2>Beyond Products: Comprehensive Services</h2>
              <p>
                In addition to quality procurement, M-Star Innovations offers expert services in:
              </p>
              <div className="services-list">
                <div className="service-item">
                  <span className="service-icon">💡</span>
                  <span>ICT Solutions & Gadgets</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">🎓</span>
                  <span>Learning & Capacity Building</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">🔍</span>
                  <span>General Research & Consultancy</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">🏢</span>
                  <span>Project & Facility Management</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">👥</span>
                  <span>Strategic Human Resources</span>
                </div>
              </div>
            </div>
            <div className="services-action">
              <button className="services-btn">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="marketplace-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Quality Assured</h3>
              <p>All products meet international standards and come with proper certifications and warranties.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Timely Delivery</h3>
              <p>Efficient logistics network ensuring prompt delivery across Nigeria with real-time tracking.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Technical Support</h3>
              <p>Expert technical support and after-sales service for all products and equipment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Bulk Order Advantage</h3>
              <p>Special pricing and customized solutions for corporate and bulk purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="marketplace-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Procure with Confidence?</h2>
            <p>Get quality products with guaranteed service excellence from M-Star Innovations</p>
            <div className="cta-buttons">
              <button className="primary-cta" onClick={() => setIsCartOpen(true)}>
                View Cart ({cartItems.length})
              </button>
              <button className="secondary-cta">
                Request Quote
              </button>
              <button className="tertiary-cta">
                Call: +234 812 345 6789
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="cart-sidebar">
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
          <div className="cart-content">
            <div className="cart-header">
              <h3>Shopping Cart ({cartItems.length})</h3>
              <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
            </div>

            <div className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-icon">🛒</div>
                  <p>Your cart is empty</p>
                  <button 
                    className="cta-button"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="item-image">
                        <div className="item-emoji">
                          {categories.find(cat => cat.id === item.category)?.icon}
                        </div>
                      </div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p className="item-price">{formatPrice(item.price)}</p>
                        <div className="quantity-controls">
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="item-total">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="summary-row">
                    <span>Delivery:</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="cart-total">
                    <span>Total:</span>
                    <span className="total-price">{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
                <div className="cart-actions">
                  <button className="continue-shopping" onClick={() => setIsCartOpen(false)}>
                    Continue Shopping
                  </button>
                  <button className="checkout-btn">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Marketplace;