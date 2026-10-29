/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Complete multi-step checkout pipeline with live order calculation,
 * promo code validation, address forms, and order success modal.
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux-state/CartState';
import { Link } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaLock, FaShieldAlt, FaCheckCircle, FaCreditCard, FaPaypal, FaGooglePay } from 'react-icons/fa';

const CheckoutPage = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items || []);
    const discountCode = useSelector((state) => state.cart.discountCode);
    const discountPercent = useSelector((state) => state.cart.discountPercent || 0);

    const [step, setStep] = useState(1); // 1: Shipping, 2: Delivery, 3: Payment
    const [couponInput, setCouponInput] = useState('');
    const [couponMessage, setCouponMessage] = useState('');
    const [shippingOption, setShippingOption] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [generatedOrderId, setGeneratedOrderId] = useState('');

    const [shippingForm, setShippingForm] = useState({
        firstName: 'Elena',
        lastName: 'Rostova',
        email: 'elena.rostova@example.com',
        phone: '+1 (555) 234-5678',
        address: '742 Evergreen Terrace',
        city: 'Springfield',
        state: 'Oregon',
        postalCode: '97477',
        country: 'United States'
    });

    const [cardForm, setCardForm] = useState({
        cardNumber: '•••• •••• •••• 4242',
        nameOnCard: 'Elena Rostova',
        expiry: '08/28',
        cvv: '382'
    });

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discountAmount = (subtotal * discountPercent) / 100;

    let shippingCost = 0;
    if (shippingOption === 'standard') {
        shippingCost = subtotal > 50 ? 0 : 6.95;
    } else if (shippingOption === 'express') {
        shippingCost = 9.95;
    } else if (shippingOption === 'overnight') {
        shippingCost = 19.95;
    }

    const estimatedTax = (subtotal - discountAmount) * 0.08;
    const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost + estimatedTax);

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        const code = couponInput.trim().toUpperCase();
        if (code === 'AHSAN20' || code === 'WELCOME20') {
            dispatch(cartActions.applyDiscount(code));
            setCouponMessage('🎉 Promo code AHSAN20 applied! 20% discount activated.');
        } else if (code === 'AHSAN30') {
            dispatch(cartActions.applyDiscount(code));
            setCouponMessage('🌟 VIP code AHSAN30 applied! 30% discount activated.');
        } else {
            setCouponMessage('❌ Invalid coupon code. Try AHSAN20 for 20% off.');
        }
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const orderId = `AB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        setGeneratedOrderId(orderId);
        setOrderPlaced(true);
        dispatch(cartActions.clearCart());
    };

    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <div className="min-h-screen bg-[#faf9f6] pt-32 pb-20 text-center">
                <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <span className="text-4xl block mb-4">🛍️</span>
                    <h2 className="text-2xl font-serif text-gray-800 mb-2">Your Bag is Empty</h2>
                    <p className="text-xs text-gray-500 mb-6">
                        Add pure botanical formulations to your shopping bag before proceeding to checkout.
                    </p>
                    <Link
                        to="/shop"
                        className="inline-block px-8 py-3 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                    >
                        Explore The Catalog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Secure Express Checkout" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-gray-200 gap-4">
                    <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-1">
                            Aura Botanics Boutique
                        </span>
                        <h1 className="text-3xl font-serif text-[#162720]">Express Checkout</h1>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                        <FaLock className="text-emerald-700" /> 256-Bit SSL Encrypted & Bank-Grade Secure
                    </div>
                </div>

                {/* Steps Indicator */}
                <div className="max-w-xl mx-auto mb-12">
                    <div className="flex items-center justify-between relative text-xs">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full z-10 font-bold transition-all ${
                                step >= 1 ? 'bg-[#1a2e26] text-[#a3c9a8]' : 'bg-gray-200 text-gray-500'
                            }`}
                        >
                            1
                        </div>
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full z-10 font-bold transition-all ${
                                step >= 2 ? 'bg-[#1a2e26] text-[#a3c9a8]' : 'bg-gray-200 text-gray-500'
                            }`}
                        >
                            2
                        </div>
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-full z-10 font-bold transition-all ${
                                step >= 3 ? 'bg-[#1a2e26] text-[#a3c9a8]' : 'bg-gray-200 text-gray-500'
                            }`}
                        >
                            3
                        </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-gray-500 font-medium mt-2">
                        <span>1. Shipping Details</span>
                        <span>2. Delivery Method</span>
                        <span>3. Payment & Review</span>
                    </div>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Form: Steps 1, 2, 3 */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
                        {step === 1 && (
                            <div>
                                <h3 className="font-serif text-2xl text-gray-900 font-semibold mb-6">
                                    Shipping Destination
                                </h3>

                                <div className="space-y-4 text-xs">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">First Name</label>
                                            <input
                                                type="text"
                                                value={shippingForm.firstName}
                                                onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                value={shippingForm.lastName}
                                                onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                value={shippingForm.email}
                                                onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
                                            <input
                                                type="text"
                                                value={shippingForm.phone}
                                                onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-1">Street Address</label>
                                        <input
                                            type="text"
                                            value={shippingForm.address}
                                            onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">City</label>
                                            <input
                                                type="text"
                                                value={shippingForm.city}
                                                onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">State / Province</label>
                                            <input
                                                type="text"
                                                value={shippingForm.state}
                                                onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Postal Code</label>
                                            <input
                                                type="text"
                                                value={shippingForm.postalCode}
                                                onChange={(e) => setShippingForm({ ...shippingForm, postalCode: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="mt-6 w-full py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
                                    >
                                        Proceed to Delivery Options →
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h3 className="font-serif text-2xl text-gray-900 font-semibold mb-6">
                                    Delivery Method
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <label
                                        className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                                            shippingOption === 'standard'
                                                ? 'border-[#2b4c3e] bg-emerald-50/50 shadow-sm'
                                                : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                checked={shippingOption === 'standard'}
                                                onChange={() => setShippingOption('standard')}
                                                className="accent-[#2b4c3e]"
                                            />
                                            <div>
                                                <span className="font-bold text-gray-900 text-sm block">Standard Express</span>
                                                <span className="text-xs text-gray-500">2-4 business days • Carbon-Neutral</span>
                                            </div>
                                        </div>
                                        <span className="font-bold text-sm text-[#1a2e26]">
                                            {subtotal > 50 ? 'FREE' : '$6.95'}
                                        </span>
                                    </label>

                                    <label
                                        className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                                            shippingOption === 'express'
                                                ? 'border-[#2b4c3e] bg-emerald-50/50 shadow-sm'
                                                : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                checked={shippingOption === 'express'}
                                                onChange={() => setShippingOption('express')}
                                                className="accent-[#2b4c3e]"
                                            />
                                            <div>
                                                <span className="font-bold text-gray-900 text-sm block">Priority 2-Day Air</span>
                                                <span className="text-xs text-gray-500">2 business days guaranteed</span>
                                            </div>
                                        </div>
                                        <span className="font-bold text-sm text-[#1a2e26]">$9.95</span>
                                    </label>

                                    <label
                                        className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                                            shippingOption === 'overnight'
                                                ? 'border-[#2b4c3e] bg-emerald-50/50 shadow-sm'
                                                : 'border-gray-200 hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="radio"
                                                name="shipping"
                                                checked={shippingOption === 'overnight'}
                                                onChange={() => setShippingOption('overnight')}
                                                className="accent-[#2b4c3e]"
                                            />
                                            <div>
                                                <span className="font-bold text-gray-900 text-sm block">Overnight Priority</span>
                                                <span className="text-xs text-gray-500">Next business day by 12:00 PM</span>
                                            </div>
                                        </div>
                                        <span className="font-bold text-sm text-[#1a2e26]">$19.95</span>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="text-xs text-gray-500 hover:text-black font-semibold uppercase tracking-wider"
                                    >
                                        ← Back to Address
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(3)}
                                        className="px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
                                    >
                                        Proceed to Payment →
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h3 className="font-serif text-2xl text-gray-900 font-semibold mb-6">
                                    Payment Method
                                </h3>

                                {/* Payment Tabs */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('card')}
                                        className={`p-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                                            paymentMethod === 'card'
                                                ? 'border-[#2b4c3e] bg-emerald-50 text-emerald-900 shadow-sm'
                                                : 'border-gray-200 text-gray-600'
                                        }`}
                                    >
                                        <FaCreditCard /> Credit Card
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('paypal')}
                                        className={`p-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                                            paymentMethod === 'paypal'
                                                ? 'border-[#2b4c3e] bg-emerald-50 text-emerald-900 shadow-sm'
                                                : 'border-gray-200 text-gray-600'
                                        }`}
                                    >
                                        <FaPaypal /> PayPal
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('gpay')}
                                        className={`p-3 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                                            paymentMethod === 'gpay'
                                                ? 'border-[#2b4c3e] bg-emerald-50 text-emerald-900 shadow-sm'
                                                : 'border-gray-200 text-gray-600'
                                        }`}
                                    >
                                        <FaGooglePay /> Google Pay
                                    </button>
                                </div>

                                {paymentMethod === 'card' && (
                                    <div className="space-y-4 text-xs mb-8">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-1">Card Number</label>
                                            <input
                                                type="text"
                                                value={cardForm.cardNumber}
                                                onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm font-mono"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-1">Name on Card</label>
                                                <input
                                                    type="text"
                                                    value={cardForm.nameOnCard}
                                                    onChange={(e) => setCardForm({ ...cardForm, nameOnCard: e.target.value })}
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <label className="block text-gray-700 font-semibold mb-1">Expiry</label>
                                                    <input
                                                        type="text"
                                                        value={cardForm.expiry}
                                                        onChange={(e) => setCardForm({ ...cardForm, expiry: e.target.value })}
                                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm font-mono"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-700 font-semibold mb-1">CVV</label>
                                                    <input
                                                        type="password"
                                                        maxLength="4"
                                                        value={cardForm.cvv}
                                                        onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] text-sm font-mono"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="text-xs text-gray-500 hover:text-black font-semibold uppercase tracking-wider"
                                    >
                                        ← Back to Delivery
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handlePlaceOrder}
                                        className="px-10 py-4 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Place Order • ${finalTotal.toFixed(2)}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Summary: Items, Promo Code & Totals */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                                Order Summary ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
                            </h3>

                            {/* Cart Items List */}
                            <div className="max-h-72 overflow-y-auto space-y-4 mb-6 pr-1">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 text-xs">
                                        <img
                                            src={item.picture}
                                            alt={item.name}
                                            className="w-14 h-14 object-cover rounded-xl border border-gray-100"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h4>
                                            <span className="text-gray-500">Qty: {item.quantity}</span>
                                        </div>
                                        <span className="font-serif font-bold text-gray-900 text-sm">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Promo Code Input */}
                            <form onSubmit={handleApplyCoupon} className="flex gap-2 mb-4">
                                <input
                                    type="text"
                                    placeholder="Promo code (try AHSAN20)..."
                                    value={couponInput}
                                    onChange={(e) => setCouponInput(e.target.value)}
                                    className="flex-1 px-4 py-2 text-xs rounded-full border border-gray-200 focus:outline-none focus:border-[#2b4c3e] uppercase bg-gray-50"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-2 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                                >
                                    Apply
                                </button>
                            </form>
                            {couponMessage && (
                                <p className="text-xs text-emerald-800 font-medium mb-4">{couponMessage}</p>
                            )}

                            {/* Calculation Breakdown */}
                            <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                {discountPercent > 0 && (
                                    <div className="flex justify-between text-emerald-700 font-semibold">
                                        <span>Discount ({discountCode} - {discountPercent}%)</span>
                                        <span>-${discountAmount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-medium text-gray-900">
                                        {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Sales Tax (8%)</span>
                                    <span className="font-medium text-gray-900">${estimatedTax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-base font-serif font-bold text-[#162720] border-t border-gray-200 pt-3">
                                    <span>Total Due</span>
                                    <span>${finalTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Guarantee Badges */}
                        <div className="bg-[#192b23] text-[#e8eee9] rounded-3xl p-6 border border-[#2b4c3e] text-xs space-y-3">
                            <div className="flex items-center gap-3">
                                <FaShieldAlt className="text-[#a3c9a8] text-lg flex-shrink-0" />
                                <span>30-Day Pure Glow Guarantee • Effortless returns</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-[#a3c9a8] text-lg flex-shrink-0" />
                                <span>Directly overseen & engineered by Ahsan Sheikh</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Success Modal */}
            {orderPlaced && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-8 sm:p-10 text-center shadow-2xl border border-emerald-100 animate-scaleUp">
                        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-3xl mx-auto mb-6">
                            🌿
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#2b4c3e] font-bold block mb-1">
                            Ritual Confirmed
                        </span>
                        <h2 className="text-3xl font-serif text-[#162720] font-normal mb-2">
                            Thank You for Your Order!
                        </h2>
                        <p className="text-sm text-gray-600 mb-6">
                            Your order <strong className="font-mono text-gray-900">{generatedOrderId}</strong> has been received by our apothecary team and is being hand-formulated for dispatch.
                        </p>

                        <div className="bg-[#faf9f6] p-4 rounded-2xl border border-gray-200 text-xs text-gray-600 mb-8 space-y-1">
                            <p>Destination: <strong>{shippingForm.firstName} {shippingForm.lastName}</strong></p>
                            <p>{shippingForm.address}, {shippingForm.city}</p>
                            <p>Confirmation email transmitted to: <strong>{shippingForm.email}</strong></p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                to={`/track-order`}
                                className="flex-1 px-6 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                            >
                                Track Your Delivery
                            </Link>
                            <Link
                                to="/shop"
                                className="flex-1 px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                            >
                                Return to Catalog
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <SPFooter />
        </div>
    );
};

export default CheckoutPage;
