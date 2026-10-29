/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Interactive FAQ accordion on cart page clarifying shipping, returns, and customs.
 */

import React from "react";
import Faq from "react-faq-component";

const data = {
    title: "FREQUENTLY ASKED QUESTIONS",
    rowContentTextSize: "13px",
    rows: [
        {
            title: "HOW LONG WILL MY ORDER TAKE TO ARRIVE?",
            content: `All Aura Botanics orders are hand-packed from our temperature-controlled apothecary within 24 hours.
            
            • Standard Express: 2 to 4 business days.
            • Priority Overnight: Next business day delivery on orders placed before 1:00 PM EST.
            • International Tracked Courier: 5 to 9 business days worldwide.
            
            You will receive a live dispatch notification and tracking number via email as soon as your parcel is scanned.`
        },
        {
            title: "HOW IS SHIPPING CALCULATED?",
            content: "We proudly provide COMPLIMENTARY carbon-neutral shipping on all domestic orders over $50. For orders under $50, a flat $6.95 standard rate applies at checkout. Express options are calculated at live carrier rates."
        },
        {
            title: "DO YOU SHIP INTERNATIONALLY?",
            content: "Yes! Aura Botanics ships to over 60 countries across North America, Europe, the UK, Australia, and Asia. All international shipments are sent with duties and taxes calculated transparently at checkout to ensure zero unexpected customs delays."
        },
        {
            title: "WHAT IS THE AURA BOTANICS SATISFACTION GUARANTEE?",
            content: "We stand 100% behind the potency and purity of our formulations. If you are not thoroughly enamored with your skin's glow within 30 days of receiving your order, simply reach out to concierge@aurabotanics.com or contact Ahsan Sheikh directly for an effortless refund or exchange."
        },
        {
            title: "WHAT HAPPENS IF I NEED TO UPDATE MY SHIPPING ADDRESS?",
            content: "If you notice an error in your shipping address, please contact our concierge team immediately via our Contact page or at ahsansheikhoffice@gmail.com. As long as your order has not been dispatched, we can adjust your destination address free of charge."
        },
        {
            title: "ARE YOUR PACKAGING MATERIALS 100% RECYCLABLE?",
            content: "Yes! Every single bottle is manufactured from ultraviolet-blocking biophotonic glass to preserve botanical potency without plastic leaching. Our shipping boxes, tape, and protective fillers are 100% compostable and certified FSC post-consumer recycled paper."
        }
    ]
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: '#1a2e26',
    rowTitleColor: '#243e32',
    rowContentColor: '#4a5568',
    arrowColor: '#2b4c3e',
};

const config = {
    animate: true,
    tabFocus: true
};

const CartPageFaq = () => {
    return (
        <div className="max-w-4xl mx-auto my-12 px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-10 shadow-sm border border-emerald-100">
                <Faq data={data} styles={styles} config={config} />
            </div>
        </div>
    );
};

export default CartPageFaq;
