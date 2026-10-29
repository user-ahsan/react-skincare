import React from 'react';
import { store } from "../productsStore/Store";
import OurBestSellers from './OurBestSellers';

const Products = () => {
    return (
        <div className='ourBestSellersMainParent'>
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
        </div>
    );
};

export default Products;
