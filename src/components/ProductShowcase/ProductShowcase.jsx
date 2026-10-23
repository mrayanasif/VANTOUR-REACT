import React from 'react';
import './ProductShowcase.css';
import menacces from '../../assets/mens-accessories.avif';
import shoe from '../../assets/shoes-collection1.avif';

const ProductShowcase = () => {

    const products = [
        {
            category: "Mens Accessories",
            title: "Elevate Your Style",
            image: menacces,
            tagline: "Discover the Perfect Accessories"
        },
        {
            category: "Shoes Collection",
            title: "Step Into Style",
            image: shoe,
            tagline: "Find Your Perfect Pair"
        }
    ];

    const handlePanelClick = (e, panelRef) => {
        const panel = e.currentTarget;
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';

        const rect = panel.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 10) + 'px';
        ripple.style.top = (e.clientY - rect.top - 10) + 'px';

        panel.style.position = 'relative';
        panel.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    const handleDiscoverClick = (e) => {
        e.stopPropagation();
        const button = e.currentTarget;
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        console.log('Discover button clicked');
    };

    return (
        <section className="product-showcase">
            <div className="product-panel product-panel-left" onClick={handlePanelClick}>
                <div className="product-image-container">
                    <img src={products[0].image} alt={products[0].title} className="product-image" style={{ objectFit: 'contain', padding: '20px' }} />
                </div>
                <div className="product-content">
                    <p className="product-category">{products[0].category}</p>
                    <h2 className="product-brand">{products[0].title}</h2>
                    <button className="discover-btn" onClick={handleDiscoverClick}>Discover Now!</button>
                </div>
            </div>

            <div className="product-panel product-panel-right" onClick={handlePanelClick}>
                <div className="product-image-container">
                    <img src={products[1].image} alt={products[1].title} className="product-image" style={{ objectFit: 'contain', padding: '20px' }} />
                </div>
                <div className="product-content">
                    <p className="product-tagline">{products[1].tagline}</p>
                    <h2 className="product-brand">{products[1].title}</h2>
                    <button className="discover-btn discover-btn-outline" onClick={handleDiscoverClick}>Discover Now!</button>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
