/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Transparent GDPR & CCPA privacy policy for client review.
 */

import React from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Privacy Policy" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-10 text-center">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Client Trust & Protection
                    </span>
                    <h1 className="text-4xl font-serif text-[#162720] tracking-wide mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-xs text-gray-500">Effective Date: October 2026 | Last Updated by Ahsan Sheikh</p>
                </div>

                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e2d5] shadow-sm space-y-8 text-xs text-gray-600 leading-relaxed">
                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">1. Our Commitment to Your Privacy</h2>
                        <p>
                            At Aura Botanics, founded by Ahsan Sheikh, we hold your personal data in the same sacred reverence as our botanical ingredients. We will never sell, lease, or monetize your personal information to third-party data brokers or advertisement networks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">2. Information We Collect</h2>
                        <p className="mb-2">We collect only necessary information required to fulfill orders and provide bespoke client concierge care:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Contact information: Name, shipping address, billing address, email address, telephone number.</li>
                            <li>Order history and ritual preferences: Saved wishlist items, diagnostic quiz results.</li>
                            <li>Payment data: Encrypted directly via tokenized PCI-DSS Level 1 compliant gateways (Stripe, PayPal, Google Pay). We never store raw credit card numbers on our servers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">3. How Your Data Is Protected</h2>
                        <p>
                            All interactions across Aura Botanics utilize 256-bit TLS encryption. Client account information is securely hashed. Diagnostic quiz results are strictly used to compute personalized recommendations on your local device.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">4. Your Global Rights (GDPR & CCPA)</h2>
                        <p>
                            Regardless of where you reside, you possess the permanent right to request access to your stored personal data, request complete erasure ("Right to Be Forgotten"), or opt out of our editorial journal newsletter at any time with a single click.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-serif text-[#162720] mb-2 font-bold">5. Contact Our Privacy Officer</h2>
                        <p>
                            If you have any questions regarding this Privacy Policy or wish to request data deletion, contact lead engineer Ahsan Sheikh directly at <a href="mailto:ahsansheikhoffice@gmail.com" className="text-[#2b4c3e] underline font-semibold">ahsansheikhoffice@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </div>

            <SPFooter />
        </div>
    );
};

export default PrivacyPolicyPage;

