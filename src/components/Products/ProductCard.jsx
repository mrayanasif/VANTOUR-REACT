import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                {product.discountPercentage > 0 && (
                    <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
                )}
                <img src={product.thumbnail} alt={product.title} loading="lazy" />
            </div>

            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>

                <div className="rating-container">
                    <span className="star-icon">★</span>
                    <span className="rating-text">{product.rating}</span>
                </div>

                <div className="product-footer">
                    <div className="price-container">
                        <span className="current-price">${product.price}</span>
                        {product.discountPercentage > 0 && (
                            <span className="original-price">
                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                            </span>
                        )}
                    </div>
                    <button className="add-to-cart-btn">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
