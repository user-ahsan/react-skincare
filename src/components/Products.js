import React from 'react';
import { store } from "../productsStore/Store";
import OurBestSellers from './OurBestSellers';

const Products = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-24">
            {store
                .filter((item) => item.type === "ourBestSellers")
                .map((item) => (
                    <OurBestSellers
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        price={item.price}
                        image={item.primaryImage}
                    />
                ))}
        </section>
    );
};

export default Products;
