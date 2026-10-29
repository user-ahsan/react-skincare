/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Dedicated client support hub & searchable FAQ accordion.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import { FaSearch, FaTruck, FaLeaf, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const faqCategories = [
    {
        name: "Shipping & Delivery",
        icon: FaTruck,
        questions: [
            {
                q: "How long does delivery take?",
                a: "Domestic orders arrive within 2-4 business days via carbon-neutral carrier. Priority overnight is available at checkout for orders placed prior to 1:00 PM EST. International deliveries generally take 5-9 business days."
            },
            {
                q: "Is shipping really free on orders over $50?",
                a: "Yes! All domestic orders totaling $50 or more receive complimentary carbon-neutral shipping. For orders below $50, a nominal flat rate of $6.95 applies."
            },
            {
                q: "Do you ship internationally?",
                a: "We ship to over 60 countries across the globe including the UK, European Union, Australia, New Zealand, Canada, and Asia. Customs and import duties are calculated upfront at checkout."
            }
        ]
    },
    {
        name: "Formulations & Ingredients",
        icon: FaLeaf,
        questions: [
            {
                q: "Are all Aura Botanics ingredients 100% certified organic?",
                a: "Yes. Every plant extract, hydrosol, and carrier oil is harvested from certified organic farms or ethically wild-harvested. We maintain a zero-tolerance policy against parabens, sulfates, silicones, petrochemicals, synthetic colorants, and synthetic fragrances."
            },
            {
                q: "Is Aura Botanics cruelty-free and vegan?",
                a: "Absolutely. We are certified by Leaping Bunny and PETA. We never test on animals, nor do we contract third parties to test on our behalf. All formulas are 100% plant-powered and vegan."
            },
            {
                q: "How should I store my botanical skincare?",
                a: "Because we formulate without synthetic artificial preservatives, store your bottles away from direct sunlight in a cool, dry place. Our biophotonic violet glass naturally filters damaging light spectrums to prolong active nutrient bioavailability."
            }
        ]
    },
    {
        name: "Returns & Guarantees",
        icon: FaUndo,
        questions: [
            {
                q: "What is the 30-Day Pure Glow Guarantee?",
                a: "If an Aura Botanics formulation does not harmonize beautifully with your skin within 30 days of delivery, simply notify our concierge desk for a full refund or an alternative formulation recommendation."
            },
            {
                q: "How do I initiate a return?",
                a: "Contact our concierge team via our Contact page or directly email ahsansheikhoffice@gmail.com with your order number (e.g., AB-2026-8941) to receive a prepaid return label."
            }
        ]
    },
    {
        name: "Orders & Payments",
        icon: FaShieldAlt,
        questions: [
            {
                q: "Which payment options do you accept?",
                a: "We support Visa, MasterCard, American Express, PayPal, Google Pay, and Apple Pay. All transactions are securely routed through 256-bit encrypted gateways."
            },
            {
                q: "Can I use multiple promo codes?",
                a: "One promotional code may be applied per checkout session. You can use promo code AHSAN20 at checkout for an exclusive 20% discount on your order."
            }
        ]
    }
];

const FAQPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState(0);

    const filteredFaqs = faqCategories.map((cat) => ({
        ...cat,
        questions: cat.questions.filter((item) => {
            if (!searchTerm.trim()) return true;
            const q = searchTerm.toLowerCase();
            return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
        })
    })).filter((cat) => cat.questions.length > 0);

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Help Center & FAQ" />
                </div>
            </div>

            {/* Header */}
            <div className="max-w-3xl mx-auto px-6 pt-12 pb-8 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                    Client Care & Knowledge Base
                </span>
                <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-4">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    Discover answers regarding botanical formulation safety, carbon-neutral fulfillment, returns, and ordering with Aura Botanics.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                    <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-sm" />
                    <input
                        type="text"
                        placeholder="Search answers (e.g., shipping, organic, returns, AHSAN20)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#2b4c3e] bg-white text-sm shadow-sm"
                    />
                </div>
            </div>

            {/* Category Tabs */}
            <div className="max-w-5xl mx-auto px-6 mb-12">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {faqCategories.map((cat, i) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.name}
                                onClick={() => {
                                    setActiveTab(i);
                                    setSearchTerm('');
                                }}
                                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
                                    activeTab === i && !searchTerm
                                        ? 'bg-[#1a2e26] text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                <Icon /> {cat.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Accordion List */}
            <div className="max-w-4xl mx-auto px-6 pb-20">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 text-sm">
                            No answers found for "{searchTerm}". <br />
                            Please reach out directly to our concierge team at ahsansheikhoffice@gmail.com.
                        </div>
                    ) : (
                        (searchTerm ? filteredFaqs : [faqCategories[activeTab]]).map((category) => (
                            <div key={category.name} className="mb-8 last:mb-0">
                                <h3 className="font-serif text-xl font-bold text-gray-900 pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
                                    <category.icon className="text-[#2b4c3e] text-base" /> {category.name}
                                </h3>

                                <Accordion defaultIndex={[0]} allowMultiple>
                                    {category.questions.map((faq, idx) => (
                                        <AccordionItem key={idx} className="border-b border-gray-100 py-2">
                                            <h2>
                                                <AccordionButton className="py-3 hover:bg-gray-50 rounded-xl text-left">
                                                    <Box flex="1" className="font-serif font-semibold text-gray-800 text-base">
                                                        {faq.q}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4} className="text-gray-600 text-sm leading-relaxed">
                                                {faq.a}
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))
                    )}
                </div>

                {/* Bottom Support Prompt */}
                <div className="mt-12 bg-emerald-50 rounded-3xl p-8 border border-emerald-100 text-center">
                    <h4 className="font-serif text-xl font-bold text-emerald-950 mb-2">Still Have Questions?</h4>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto mb-6 leading-relaxed">
                        Our botanical advisors are always delighted to assist you with tailored skincare consultations and order inquiries.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-8 py-3 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
                    >
                        Contact Ahsan Sheikh & Concierge
                    </Link>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default FAQPage;
