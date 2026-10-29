import React from 'react';
import "../styles/OurBestSellers.css";
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux-state/CartState'

import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


const OurBestSellers = (props) => {

    const { title, price, id, image } = props;

    const dispacth = useDispatch();

    const addItemToCartHandler = (e) => {

        dispacth(
            cartActions.addItemToCart({
                id,
                price,
                title,
                image,
            })
        )
    }

    const toast = useToast();




    return (
        <div key={id} className="w-full max-w-sm">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#e8e2d5] overflow-hidden flex flex-col h-full">
                <Link to={`/${id}`} className="block overflow-hidden bg-[#f5f2ea] p-6 aspect-square flex items-center justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                    />
                </Link>

                <div className="p-6 flex flex-col justify-between flex-1 text-center">
                    <div>
                        <h2 className="font-serif font-bold text-lg text-[#162720] mb-1 line-clamp-1">
                            {title}
                        </h2>
                        <p className="text-base font-bold text-[#2b4c3e] mb-4">
                            ${price}
                        </p>
                    </div>

                    <div
                        className="card-actions justify-center"
                        onClick={() =>
                            toast({
                                title: 'Added to Bag',
                                description: `${title} added to your sacred ritual.`,
                                status: 'success',
                                duration: 2000,
                                isClosable: true,
                            })
                        }
                    >
                        <button
                            className="px-6 py-2.5 rounded-full bg-[#192b23] hover:bg-[#2b4c3e] text-white text-xs font-semibold tracking-wider transition-all shadow-md active:scale-95"
                            onClick={addItemToCartHandler}
                        >
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBestSellers
