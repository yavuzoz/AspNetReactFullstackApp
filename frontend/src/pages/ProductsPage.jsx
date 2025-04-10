import React, { useEffect, useState } from 'react';
import { getProducts, addProduct, deleteProduct } from '../services/ProductService';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    const load = () => getProducts().then(res => setProducts(res.data));

    useEffect(() => {
        load();
    }, []);

    const handleAdd = (product) => {
        addProduct(product).then(load);
    };

    const handleDelete = (id) => {
        deleteProduct(id).then(load);
    };

    return (
        <div>
            <h2>Ürünler</h2>
            <ProductForm onAdd={handleAdd} />
            <ProductList products={products} onDelete={handleDelete} />
        </div>
    );
};

export default ProductsPage;
