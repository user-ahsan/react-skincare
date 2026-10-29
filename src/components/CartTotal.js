/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Cart subtotal calculator, free shipping tier indicator, and checkout gateway.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import CartAdditonalFeatures from './CartAdditonalFeatures';
import Features2 from './Features2';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { FaLock, FaArrowRight } from 'react-icons/fa';

const CartTotal = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const discountCode = useSelector((state) => state.cart.discountCode);
    const discountPercent = useSelector((state) => state.cart.discountPercent || 0);

    const [couponInput, setCouponInput] = useState('');
    const [couponMsg, setCouponMsg] = useState('');

    const subtotal = Number(props.totalPr || 0);
    const discountAmount = (subtotal * discountPercent) / 100;
    const shippingCost = subtotal > 50 ? 0 : 6.95;
    const taxAmount = (subtotal - discountAmount) * 0.08;
    const finalPrice = Math.max(0, subtotal - discountAmount + shippingCost + taxAmount);
    const freeShippingRemaining = Math.max(0, 50 - subtotal);

    const cartLen = cartItems.length;

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        const code = couponInput.trim().toUpperCase();
        if (code === 'AHSAN20' || code === 'WELCOME20') {
            dispatch(cartActions.applyDiscount(code));
            setCouponMsg('✨ Promo code AHSAN20 applied! 20% discount granted.');
        } else if (code === 'AHSAN30') {
            dispatch(cartActions.applyDiscount(code));
            setCouponMsg('🌟 VIP code AHSAN30 applied! 30% discount granted.');
        } else {
            setCouponMsg('❌ Invalid promo code. Try AHSAN20 for 20% off.');
        }
    };

    return (
        <div className='cartTotalMainParent bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm'>
            {/* Free Shipping Progress */}
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs">
                {freeShippingRemaining > 0 ? (
                    <div>
                        <p className="text-emerald-900 font-semibold mb-1">
                            🌿 Add <span className="font-bold underline">${freeShippingRemaining.toFixed(2)}</span> more to unlock <strong>FREE Express Shipping</strong>!
                        </p>
                        <div className="w-full bg-emerald-200/60 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-[#2b4c3e] h-full transition-all duration-500"
                                style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }}
                            />
                        </div>
                    </div>
                ) : (
                    <p className="text-emerald-900 font-semibold flex items-center gap-1.5">
                        🎉 Congratulations! You have unlocked <strong>COMPLIMENTARY Carbon-Neutral Shipping</strong>.
                    </p>
                )}
            </div>

            {/* Subtotal & Breakdown */}
            <div className="space-y-3 text-sm text-gray-700 pb-4 border-b border-gray-100">
                <div className='flex justify-between font-semibold text-lg text-gray-900'>
                    <span>SUBTOTAL</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                {discountPercent > 0 && (
                    <div className='flex justify-between text-emerald-700 font-semibold text-xs'>
                        <span>DISCOUNT ({discountCode} - {discountPercent}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                )}

                <div className='flex justify-between text-xs text-gray-500'>
                    <span>SHIPPING</span>
                    <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                </div>

                <div className='flex justify-between text-xs text-gray-500'>
                    <span>ESTIMATED TAX (8%)</span>
                    <span>${taxAmount.toFixed(2)}</span>
                </div>
            </div>

            {/* Total */}
            <div className='flex justify-between items-center py-4 text-xl font-serif font-bold text-[#162720] border-b border-gray-100'>
                <span>TOTAL</span>
                <span>${finalPrice.toFixed(2)}</span>
            </div>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="my-6">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Coupon code (e.g. AHSAN20)..."
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="flex-1 px-4 py-2.5 text-xs rounded-full border border-gray-200 focus:outline-none focus:border-[#2b4c3e] uppercase bg-gray-50"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                        Apply
                    </button>
                </div>
                {couponMsg && (
                    <p className="text-[11px] text-emerald-800 font-medium mt-2">{couponMsg}</p>
                )}
            </form>

            {/* Primary Proceed to Checkout Button */}
            <Link
                to="/checkout"
                className="w-full py-4 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mb-6"
            >
                <FaLock className="text-xs" /> Proceed to Secure Checkout <FaArrowRight className="text-xs" />
            </Link>

            {/* Express Pay Options */}
            <div className="text-center mb-4">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Or instant 1-click checkout</span>
            </div>

            <div className='gpayBtnHold flex justify-center mb-3'>
                <GooglePayButton
                    className='gpayHold'
                    environment='TEST'
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: "CARD",
                                parameters: {
                                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                                },
                                tokenizationSpecification: {
                                    type: "PAYMENT_GATEWAY",
                                    parameters: {
                                        gateway: "example",
                                        gatewayMerchantId: "exampleGatewayMerchantId",
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: "17613812255336763067",
                            merchantName: "Aura Botanics by Ahsan Sheikh"
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: "Total",
                            totalPrice: String(Math.round(finalPrice)),
                            currencyCode: "USD",
                            countryCode: "US",
                        },
                    }}
                    onLoadPaymentData={paymentData => {
                        console.log(paymentData.paymentMethodData);
                    }}
                />
            </div>

            <div className='paypalHold'>
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons
                        aria-label='BUY WITH PAYPAL'
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: String(Math.round(finalPrice)),
                                        },
                                    },
                                ],
                            });
                        }}
                    />
                </PayPalScriptProvider>
            </div>

            {cartLen > 1 && (
                <div className='mt-8 pt-6 border-t border-gray-100 text-center'>
                    <p className='text-xs uppercase tracking-widest text-gray-400 mb-4'>
                        Securely Checkout with Guaranteed Protection
                    </p>
                    <CartAdditonalFeatures />
                    {cartLen > 2 && <Features2 />}
                </div>
            )}
        </div>
    );
};

export default CartTotal;
