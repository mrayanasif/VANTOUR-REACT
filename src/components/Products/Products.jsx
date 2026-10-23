import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=12');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                // Sort products: "up to 10% items first" implies lower discounts (0-10%) should appear before higher ones.
                // Sorting ascending by discountPercentage.
                const sortedProducts = data.products.sort((a, b) => a.discountPercentage - b.discountPercentage);
                setProducts(sortedProducts);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading amazing products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="loading-container">
                <p style={{ color: 'red' }}>Error: {error}</p>
            </div>
        );
    }

    return (
        <section className="products-section">
            <h2 className="section-title">Trending Now</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Products;
