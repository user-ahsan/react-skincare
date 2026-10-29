/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Client concierge and interactive contact form with instant submission simulation.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        orderNumber: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            orderNumber: '',
            subject: 'General Inquiry',
            message: ''
        });
        setTimeout(() => setSubmitted(false), 6000);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Client Concierge & Contact" />
                </div>
            </div>

            {/* Header */}
            <div className="max-w-3xl mx-auto px-6 pt-12 pb-6 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                    Aura Botanics Concierge
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-4">
                    How May We Assist Your Ritual?
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Whether you desire a personalized skincare consultation, require order assistance, or wish to connect with founder Ahsan Sheikh, our dedicated apothecary concierge is here to help.
                </p>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Contact Info & Ateliers */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-[#192b23] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#2b4c3e]">
                            <h3 className="font-serif text-2xl mb-6">Concierge Direct</h3>
                            
                            <div className="space-y-6 text-sm text-[#c8d9ce]">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#243e32] flex items-center justify-center text-[#a3c9a8] flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-gray-400 block">Direct Email</span>
                                        <a href="mailto:ahsansheikhoffice@gmail.com" className="font-medium text-white hover:text-[#a3c9a8] transition-colors">
                                            ahsansheikhoffice@gmail.com
                                        </a>
                                        <span className="text-[11px] text-gray-400 block mt-0.5">Response within 24 hours</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#243e32] flex items-center justify-center text-[#a3c9a8] flex-shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-gray-400 block">Phone & WhatsApp</span>
                                        <span className="font-medium text-white">+1 (800) 428-AURA</span>
                                        <span className="text-[11px] text-gray-400 block mt-0.5">Mon–Fri: 9am – 6pm EST</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#243e32] flex items-center justify-center text-[#a3c9a8] flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-gray-400 block">Flagship Atelier</span>
                                        <span className="font-medium text-white">450 Botanical Way, SoHo</span>
                                        <span className="text-[11px] text-gray-400 block mt-0.5">New York, NY 10013</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Boutique Showrooms */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h4 className="font-serif text-lg text-gray-900 font-semibold mb-4">Apothecary Boutiques</h4>
                            <div className="space-y-4 text-xs text-gray-600">
                                <div className="pb-3 border-b border-gray-100">
                                    <strong className="text-gray-900 block text-sm">London Showroom</strong>
                                    <span>28 Marylebone High Street, London W1U 4PH, UK</span>
                                </div>
                                <div className="pb-3 border-b border-gray-100">
                                    <strong className="text-gray-900 block text-sm">Tokyo Wellness Studio</strong>
                                    <span>5-7-22 Minami-Aoyama, Minato-ku, Tokyo, Japan</span>
                                </div>
                                <div>
                                    <strong className="text-gray-900 block text-sm">Melbourne Atelier</strong>
                                    <span>142 Flinders Lane, Melbourne VIC 3000, Australia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
                        <h3 className="font-serif text-2xl text-[#162720] mb-2 font-semibold">Send Us a Message</h3>
                        <p className="text-xs text-gray-500 mb-8 leading-relaxed">
                            Fill in your inquiry below and our skincare advisors will tailor a solution for your needs.
                        </p>

                        {submitted && (
                            <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-emerald-900 text-sm animate-fadeIn">
                                <FaCheckCircle className="text-emerald-600 text-lg flex-shrink-0 mt-0.5" />
                                <div>
                                    <strong className="block font-semibold">Thank you for contacting Aura Botanics!</strong>
                                    Your message has been delivered to Ahsan Sheikh and our concierge desk. We will respond within 24 hours.
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold uppercase tracking-wider mb-2">
                                        Your Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Eleanor Vance"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] bg-gray-50/50 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold uppercase tracking-wider mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="eleanor@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] bg-gray-50/50 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold uppercase tracking-wider mb-2">
                                        Order Reference (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="orderNumber"
                                        value={formData.orderNumber}
                                        onChange={handleChange}
                                        placeholder="e.g. AB-8921"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] bg-gray-50/50 text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold uppercase tracking-wider mb-2">
                                        Subject / Topic *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] bg-gray-50/50 text-sm cursor-pointer"
                                    >
                                        <option value="General Inquiry">General Skincare Inquiry</option>
                                        <option value="Order Tracking">Order & Shipping Status</option>
                                        <option value="Formulation Question">Product Ingredients & Skin Consultation</option>
                                        <option value="Wholesale">Wholesale & Boutique Partnerships</option>
                                        <option value="Founder Direct">Message for Ahsan Sheikh</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold uppercase tracking-wider mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your skin goals, questions, or order details..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2b4c3e] bg-gray-50/50 text-sm leading-relaxed"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane /> Transmit Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default ContactPage;
