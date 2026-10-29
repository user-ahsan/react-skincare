/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Careers page detailing open atelier roles, culture, and interactive application modal.
 */

import React, { useState } from 'react';
import BreadCrumb from './BreadCrumb';
import SPFooter from './SPFooter';
import { FaBriefcase, FaMapMarkerAlt, FaCheck, FaTimes, FaLeaf } from 'react-icons/fa';

const openings = [
    {
        id: 'chemist',
        title: 'Senior Green Chemist & Formulation Lead',
        department: 'Atelier Formulation & R&D',
        location: 'Melbourne Lab or New York, NY',
        type: 'Full-Time',
        description: 'Lead the next generation of cold-pressed, waterless botanical formulations. 5+ years experience in green lipid chemistry and certified organic preservation systems required.'
    },
    {
        id: 'sustainability',
        title: 'Global Sustainability & Carbon Program Lead',
        department: 'Environmental Impact',
        location: 'Remote (Worldwide) or London, UK',
        type: 'Full-Time',
        description: 'Direct our zero-waste supply chain, biophotonic glass life cycle analysis, and reforestation partnerships across Madagascar, Chile, and Provence.'
    },
    {
        id: 'concierge',
        title: 'Flagship Apothecary Concierge Specialist',
        department: 'Retail Experience',
        location: 'SoHo Flagship, New York, NY',
        type: 'Full-Time',
        description: 'Provide bespoke skin diagnostic consultations, custom oil blending rituals, and VIP client hospitality in our premier Manhattan atelier.'
    },
    {
        id: 'frontend',
        title: 'Lead Frontend UI/UX Software Engineer',
        department: 'Digital Experience',
        location: 'Remote / Hybrid',
        type: 'Full-Time',
        description: 'Architect aesthetic, blazing-fast React and state-driven e-commerce interfaces reflecting the luxury botanical ethos of Aura Botanics.'
    }
];

const CareersPage = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setSelectedJob(null);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] pt-28">
            <div className="bg-[#f0ece1]/50 border-b border-[#e5dfd3] py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <BreadCrumb name="Careers & Atelier Culture" />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#2b4c3e] font-bold block mb-2">
                        Work With Ahsan Sheikh
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#162720] tracking-wide mb-3">
                        Careers at Aura Botanics
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Join our mission to redefine luxury skincare through uncompromised green chemistry, carbon-neutral logistics, and mindful wellness rituals.
                    </p>
                </div>

                {/* Values 3-Col Banner */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="p-8 rounded-3xl bg-white border border-[#e8e2d5] text-center shadow-sm">
                        <FaLeaf className="mx-auto text-2xl text-[#2b4c3e] mb-3" />
                        <h2 className="font-serif text-lg text-[#162720] mb-2 font-bold">Cold-Pressed Ethics</h2>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            We never cut corners or sacrifice sustainability for profit margins. Every employee receives complete creative and scientific autonomy.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-[#e8e2d5] text-center shadow-sm">
                        <FaBriefcase className="mx-auto text-2xl text-[#2b4c3e] mb-3" />
                        <h2 className="font-serif text-lg text-[#162720] mb-2 font-bold">Holistic Wellness Stipend</h2>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            $2,500 annual wellness credit for acupuncture, meditation retreats, organic CSA farm shares, and unlimited complimentary Aura Botanics rituals.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white border border-[#e8e2d5] text-center shadow-sm">
                        <FaMapMarkerAlt className="mx-auto text-2xl text-[#2b4c3e] mb-3" />
                        <h2 className="font-serif text-lg text-[#162720] mb-2 font-bold">Global Mobility</h2>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Opportunities to spend seasonal residencies in our ateliers in New York, London, Paris, Tokyo, and Melbourne.
                        </p>
                    </div>
                </div>

                {/* Open Positions List */}
                <h2 className="text-2xl font-serif text-[#162720] mb-6">Open Atelier Positions</h2>
                <div className="space-y-4 mb-16">
                    {openings.map(job => (
                        <div
                            key={job.id}
                            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#2b4c3e] transition-all"
                        >
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-[#2b4c3e] font-bold block mb-1">
                                    {job.department} • {job.type}
                                </span>
                                <h3 className="text-xl font-serif text-[#162720] mb-1">{job.title}</h3>
                                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1.5">
                                    <FaMapMarkerAlt className="text-gray-400 text-[10px]" /> {job.location}
                                </p>
                                <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">{job.description}</p>
                            </div>

                            <button
                                onClick={() => setSelectedJob(job)}
                                className="shrink-0 px-6 py-3 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Application Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100">
                        <button
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-black p-2"
                        >
                            <FaTimes />
                        </button>

                        <div className="mb-6">
                            <span className="text-[10px] uppercase tracking-widest text-[#2b4c3e] font-bold block">
                                Atelier Application
                            </span>
                            <h3 className="text-2xl font-serif text-[#162720]">
                                {selectedJob.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
                                Please introduce yourself to founder Ahsan Sheikh and our formulation team.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-2">
                                <FaCheck className="mx-auto text-2xl text-emerald-600" />
                                <h4 className="font-serif text-lg font-bold">Application Received!</h4>
                                <p className="text-xs">
                                    Thank you. Our talent concierge will review your background and reach out within 48 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Full Name *</label>
                                    <input type="text" required placeholder="Elena Rostova" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2b4c3e]" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Email Address *</label>
                                    <input type="email" required placeholder="elena@example.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2b4c3e]" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">LinkedIn / Portfolio URL *</label>
                                    <input type="url" required placeholder="https://linkedin.com/in/..." className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#2b4c3e]" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-700 uppercase mb-1">Why Aura Botanics? (Cover Note)</label>
                                    <textarea rows="3" required placeholder="Share what draws you to our green science philosophy..." className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#2b4c3e]" />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-full bg-[#1a2e26] hover:bg-[#2b4c3e] text-white text-xs uppercase tracking-widest font-bold shadow-md transition-all"
                                >
                                    Submit Application
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            <SPFooter />
        </div>
    );
};

export default CareersPage;

