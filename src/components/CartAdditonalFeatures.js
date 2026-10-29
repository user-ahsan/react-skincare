import React from 'react';
import { FaCcVisa, FaCcPaypal, FaCcStripe, FaCcMastercard } from "react-icons/fa";

const CartAdditonalFeatures = () => {
    return (
        <div className='payemntIconHold flex gap-12 flex-row relative top-10'>
            <FaCcVisa className=' w-96 h-44' />
            <FaCcPaypal className=' w-96 h-44' />
            <FaCcMastercard className=' w-96 h-44' />
            <FaCcStripe className=' w-96 h-44' />
        </div>
    );
};

export default CartAdditonalFeatures;
