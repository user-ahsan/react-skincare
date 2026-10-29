/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Single product information accordion detailing formulations, ritual application,
 * pure botanical ingredients, and eco-luxury values.
 */

import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';
import { FaLeaf, FaRecycle, FaPaw, FaAward, FaCheckCircle } from 'react-icons/fa';

const SinglePageFAQ = () => {
    return (
        <div className="w-full my-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem className="border-b border-gray-100 py-2">
                    <h2>
                        <AccordionButton className="py-3 hover:bg-gray-50 rounded-lg">
                            <Box flex="1" textAlign="left" className="font-serif font-semibold text-gray-800 tracking-wider">
                                FORMULA & BOTANICAL PROFILE
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-600 text-sm leading-relaxed">
                        Handcrafted with cold-pressed plant extracts and bio-compatible botanical oils.
                        Every Aura Botanics formulation delivers potent nutrients without harsh preservatives, synthetic fragrances, sulfates, parabens, or mineral oils. Certified 100% vegan, cruelty-free, and dermatologically tested for high performance on all skin types.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="border-b border-gray-100 py-2">
                    <h2>
                        <AccordionButton className="py-3 hover:bg-gray-50 rounded-lg">
                            <Box flex="1" textAlign="left" className="font-serif font-semibold text-gray-800 tracking-wider">
                                RITUAL APPLICATION & HOW TO USE
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-600 text-sm leading-relaxed">
                        Dispense a dime-sized amount onto clean palms. Gently warm the formulation between hands, then press delicately into face, neck, or body in upward circular motions. For optimal bioavailability, use morning and evening as part of your daily mindful skincare ritual.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="border-b border-gray-100 py-2">
                    <h2>
                        <AccordionButton className="py-3 hover:bg-gray-50 rounded-lg">
                            <Box flex="1" textAlign="left" className="font-serif font-semibold text-gray-800 tracking-wider">
                                CERTIFIED INGREDIENTS
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} className="text-gray-600 text-sm leading-relaxed font-mono text-xs">
                        Aqua (Spring Water), Rosa Damascena (Damask Rose Floral Distillate)*, Aloe Barbadensis Leaf Juice*, Vegetable Glycerin, Simmondsia Chinensis (Jojoba) Seed Oil*, Chamomilla Recutita (Matricaria) Flower Extract, Camellia Sinensis (Green Tea) Leaf Extract, Sodium Hyaluronate (Plant-derived), Tocopherol (Vitamin E), Citric Acid. <br />
                        <span className="text-[#2b4c3e] font-sans font-medium mt-1 inline-block">*Certified Organic Agriculture</span>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="py-2">
                    <h2>
                        <AccordionButton className="py-3 hover:bg-gray-50 rounded-lg">
                            <Box flex="1" textAlign="left" className="font-serif font-semibold text-gray-800 tracking-wider">
                                SUSTAINABILITY & BRAND VALUES
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                                <FaLeaf className="text-emerald-700 text-2xl mb-1" />
                                <span className="font-bold text-xs text-emerald-900">100% Organic</span>
                                <span className="text-[10px] text-emerald-700">Wild-harvested</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                                <FaPaw className="text-emerald-700 text-2xl mb-1" />
                                <span className="font-bold text-xs text-emerald-900">Cruelty-Free</span>
                                <span className="text-[10px] text-emerald-700">Leaping Bunny certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                                <FaRecycle className="text-emerald-700 text-2xl mb-1" />
                                <span className="font-bold text-xs text-emerald-900">Zero Plastic</span>
                                <span className="text-[10px] text-emerald-700">Amber glass vessels</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-3 rounded-lg bg-emerald-50/60 border border-emerald-100">
                                <FaAward className="text-emerald-700 text-2xl mb-1" />
                                <span className="font-bold text-xs text-emerald-900">Ahsan Guarantee</span>
                                <span className="text-[10px] text-emerald-700">30-day glow refund</span>
                            </div>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default SinglePageFAQ;
