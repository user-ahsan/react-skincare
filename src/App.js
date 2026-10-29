/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master application router configuring all 15+ ready-to-ship e-commerce pages.
 */

import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import MobileNav from './components/MobileNav';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import Products from './components/Products';
import FollowONIG from './components/FollowONIG';
import SPFooter from './components/SPFooter';

// Dynamic & Newly Created Pages
import SinglePage from "./components/SinglePage";
import ShopPage from "./components/ShopPage";
import CollectionsPage from "./components/CollectionsPage";
import AboutPage from "./components/AboutPage";
import JournalHubPage from "./components/JournalHubPage";
import JournalPage from "./components/JournalPage";
import JournalPostPage from "./components/JournalPostPage";
import CartHold from './components/CartHold';
import CheckoutPage from './components/CheckoutPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import OrderTrackingPage from './components/OrderTrackingPage';
import WishlistPage from './components/WishlistPage';
import SustainabilityPage from './components/SustainabilityPage';
import ReviewsPage from './components/ReviewsPage';
import Under20 from './components/Under20';
import Under10 from './components/Under10';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';

// Newly Integrated Brand, Ritual & Policy Pages
import RoutineQuizPage from './components/RoutineQuizPage';
import GiftCardsPage from './components/GiftCardsPage';
import RewardsPage from './components/RewardsPage';
import LocationsPage from './components/LocationsPage';
import IngredientsPage from './components/IngredientsPage';
import CareersPage from './components/CareersPage';
import PressPage from './components/PressPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsPage from './components/TermsPage';
import ShippingPolicyPage from './components/ShippingPolicyPage';

// Homepage Storytelling & Interactive Sections
import PressMarquee from './components/PressMarquee';
import RitualQuizBanner from './components/RitualQuizBanner';
import ApothecaryCraftSection from './components/ApothecaryCraftSection';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home View Container
const HomeView = () => (
  <>
    <SimpleSlider />
    <PressMarquee />
    <HeroSection />
    <BsText />
    <Products />
    <RitualQuizBanner />
    <ApothecaryCraftSection />
    <Ingridients />
    <JournalSection />
    <FollowONIG />
    <SPFooter />
  </>
);

function App() {
  return (
    <div className="App bg-[#faf9f6] text-[#162720] min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <MobileNav />

        <main className="w-full">
          <Routes>
            {/* Core Storefront */}
            <Route path="/" element={<HomeView />} />
            <Route path="/shop" element={<ShopPage />} />
            
            {/* Collections & Categories */}
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:category" element={<CollectionsPage />} />
            <Route path="/under20" element={<Under20 />} />
            <Route path="/under40" element={<Under10 />} />
            <Route path="/forher" element={<ForHer />} />
            <Route path="/forhim" element={<ForHim />} />

            {/* Shopping Cart, Wishlist & Checkout */}
            <Route path="/cart" element={<CartHold />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />

            {/* Interactive Rituals & Diagnostics */}
            <Route path="/quiz" element={<RoutineQuizPage />} />
            <Route path="/gift-cards" element={<GiftCardsPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />

            {/* Editorial, Brand Story & Press */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalHubPage />} />
            <Route path="/journal/april" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<JournalPostPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* Customer Care & Concierge */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/track-order" element={<OrderTrackingPage />} />

            {/* Legal & Policies */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />

            {/* Single Product Page */}
            <Route path="/:id" element={<SinglePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
