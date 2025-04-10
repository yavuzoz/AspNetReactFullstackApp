import React, { useState } from 'react';

function ProductForm({ onAdd }) {
    const [form, setForm] = useState({ name: '', price: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({ name: '', price: 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Ürün Adı"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Fiyat"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
            />
            <button type="submit">Ekle</button>
        </form>
    );
}

export default ProductForm;
