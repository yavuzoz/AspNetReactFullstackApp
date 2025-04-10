import React from 'react';

function ProductList({ products, onDelete }) {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - {product.price}₺
                    <button onClick={() => onDelete(product.id)}>Sil</button>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
