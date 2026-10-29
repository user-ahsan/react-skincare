# 🌿 Aura Botanics — Luxury Organic E-Commerce Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.0-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.4.1-319795?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **Designed, Engineered & Maintained by [Ahsan Sheikh](mailto:ahsansheikhoffice@gmail.com)**  
> *Full-Stack Aesthetic Luxury E-Commerce Frontend built with React 18, Redux Toolkit, Tailwind CSS, DaisyUI, and Chakra UI.*

---

## 🌟 Executive Summary

**Aura Botanics** is a production-grade, client-ready luxury e-commerce web platform showcasing certified organic skincare, botanical haircare, and restorative self-care rituals. Engineered as a comprehensive frontend application with zero external backend dependencies, the platform features state-of-the-art client-side state management, interactive product catalogs, real-time filtering, promo-code discounts, a multi-step checkout pipeline, an interactive order tracking engine, and rich editorial wellness publications.

---

## ✨ Key Features & Architecture

### 🛍️ 1. Complete Catalog & Real-Time Filtering (`/shop`)

- **Live Search & Filter:** Search by product title, keyword, or botanical category with instant DOM updates.
- **Dynamic Price Range:** Interactive range slider filtering products from $10 to $70+.
- **Multi-Factor Sorting:** Sort by Featured Rituals, Price: Low to High, Price: High to Low, or Highest Customer Rating.
- **Interactive Product Cards:** High-definition photography with hover transitions, star ratings, category pills, wishlist toggle, and instant Add-to-Bag with notifications.

### 🌿 2. Curated Collections System (`/collections` & `/collections/:category`)

- Tailored collection hubs with editorial hero banners and thematic descriptions:
  - **Face & Skincare:** Cold-pressed elixirs, antioxidant toners, and French green clay masques.
  - **Body Sanctuary:** Arabica coffee scrubs, crushed walnut polishes, and virgin coconut body washes.
  - **Holistic Haircare:** Apple cider vinegar scalp detoxifiers and rosemary hair density serums.
  - **Luxury Gift Sets:** Handcrafted biophotonic gift collections.
  - **Restorative Wellness:** French lavender bath crystals and calming sleeping drops.

### 🛒 3. Centralized Redux Toolkit State Management

- **Persistent Cart:** Fully synchronized with browser `localStorage` to preserve items, quantities, and pricing between sessions.
- **Wishlist Manager (`/wishlist`):** Dedicated page to view saved products, remove items, or move all items directly into the shopping bag with one click.
- **Promo Code Engine:** Live coupon evaluation (`AHSAN20` for 20% off, `AHSAN30` for 30% off, `WELCOME20`).
- **Free Shipping Threshold:** Real-time visual progress bar showing exact remaining dollar amount required to unlock complimentary shipping.

### 💳 4. Multi-Step Checkout Pipeline (`/checkout`)

- **Step 1:** Customer Information & Shipping Destination (Name, Email, Street Address, State, Postal Code).
- **Step 2:** Delivery Method Selection (Complimentary Standard over $50, Priority 2-Day Air, Overnight Express).
- **Step 3:** Payment Gateways (Live Card Entry with preview, PayPal, Google Pay, Apple Pay).
- **Order Confirmation:** Dynamic order generation (`AB-2026-XXXX`) with instant order details modal and direct link to live tracking.

### 📦 5. Live Order Tracking Dashboard (`/track-order`)

- Interactive lookup by Order ID (e.g., `AB-2026-8941`) with 1-click demo test mode.
- 5-stage visual progress timeline: *Order Confirmed → Cold-Pressed & Bottled → Quality Inspected → Out for Delivery → Delivered*.
- Displays carrier details, carbon-neutral verification badge, destination address, and parcel contents breakdown.

### 📰 6. Editorial Wellness Journal (`/journal` & `/journal/:slug`)

- Magazine-style publishing hub with article search and category filters.
- In-depth editorial pieces covering botanical haircare, morning-to-night skincare sequencing, and green chemistry.
- Estimated reading times, publication timestamps, and author footprint by Ahsan Sheikh.

### 💬 7. Client Concierge & Support Hub (`/contact` & `/faq`)

- **Contact Concierge:** Interactive contact form with client feedback alerts, direct email (`ahsansheikhoffice@gmail.com`), phone assistance, and global showroom addresses (New York, London, Tokyo, Melbourne).
- **Searchable FAQ:** Accordion knowledge base categorized by Shipping, Ingredients, Returns, and Orders.

### ⭐ 8. Verified Community Reviews (`/reviews`)

- Customer rating breakdown (4.9 / 5.0 across 1,840+ reviews).
- Filter reviews by star rating.
- Interactive "Write a Review" modal with instant submission feedback.

### 🌍 9. Sustainability & Brand Story (`/about` & `/sustainability`)

- Founder's letter from Ahsan Sheikh detailing our green chemistry philosophy.
- Key impact statistics: 50K+ customers, 100% vegan & cruelty-free, zero synthetic fragrances, 1:1 tree planted per order.
- Biophotonic violet glass and zero-waste packaging explanations.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| --- | --- |
| **Core Framework** | React 18.2.0, JavaScript (ES6+), JSX |
| **Routing** | React Router DOM v6 (Nested Routes, URL Search Params, Dynamic Slugs) |
| **State Architecture** | Redux Toolkit (`@reduxjs/toolkit`), React Redux, LocalStorage Persistence |
| **Styling & UI** | Tailwind CSS v3, DaisyUI, Chakra UI, Framer Motion, Vanilla CSS / SCSS |
| **Media & Carousels** | React Slick, Alice Carousel, Fast Marquee, React Hover Image |
| **Typography** | Cormorant Garamond, Montserrat, Font Awesome, React Icons |
| **Build Tools** | Create React App / Webpack 5, Babel, ESLint |

---

## 📂 Project Structure

```
react-e-commerce/
├── public/
│   ├── favicon.ico
│   ├── index.html              # Custom luxury metadata, OpenGraph & Google Fonts
│   ├── manifest.json           # Aura Botanics PWA manifest
│   └── robots.txt
├── src/
│   ├── assets/                 # Brand iconography, ingredient illustrations & logos
│   ├── components/
│   │   ├── AboutPage.js        # Brand origin, philosophy & founder letter by Ahsan Sheikh
│   │   ├── BestSellers.js      # Mega-menu bestsellers preview
│   │   ├── Body.js             # Interactive mega-menu tabbed drawer
│   │   ├── BreadCrumb.js       # Dynamic breadcrumb navigation
│   │   ├── BsText.js           # Bestsellers section header
│   │   ├── Cart.js             # Cart line item component
│   │   ├── CartHold.js         # Master cart view
│   │   ├── CartTotal.js        # Free shipping calculator & promo discount gateway
│   │   ├── CheckoutPage.js     # Multi-step checkout pipeline & confirmation modal
│   │   ├── CollectionsPage.js  # Curated category collections hub
│   │   ├── ContactPage.js      # Concierge contact form & boutique showroom info
│   │   ├── FAQPage.js          # Searchable client care FAQ accordion
│   │   ├── FollowONIG.js       # Curated community lifestyle feed marquee
│   │   ├── ForHer.js           # Gifts for her collection
│   │   ├── ForHim.js           # Gifts for him collection
│   │   ├── GiftSets.js         # Gift sets dropdown showcase
│   │   ├── HeroCarousel.js     # High-definition slick hero slider
│   │   ├── HeroSection.js      # Brand pillars & organic guarantees
│   │   ├── Ingridients.js      # Cold-pressed ingredients showcase
│   │   ├── JournalHubPage.js   # Wellness journal magazine hub
│   │   ├── JournalPage.js      # Single journal article reader
│   │   ├── JournalPostPage.js  # Dynamic article reader for multiple topics
│   │   ├── MobileNav.js        # Responsive mobile drawer navigation
│   │   ├── NavBar.js           # Desktop header with announcement strip & mega-menu
│   │   ├── OrderTrackingPage.js# Interactive live order tracking dashboard
│   │   ├── Products.js         # Featured products showcase
│   │   ├── ReviewsPage.js      # Customer reviews breakdown & submission modal
│   │   ├── SearchBox.js        # Keyword-indexed customer reviews
│   │   ├── ShopPage.js         # Master catalog with search, price slider & filters
│   │   ├── SinglePage.js       # Single product details, gallery & ingredient tabs
│   │   ├── SPFooter.js         # Master luxury footer with newsletter & Ahsan Sheikh footprint
│   │   ├── SustainabilityPage.js # Regenerative Earth pledge & packaging details
│   │   ├── Under10.js          # Under $40 luxury bundles collection
│   │   ├── Under20.js          # Under $20 botanical essentials collection
│   │   └── WishlistPage.js     # Saved favorites manager
│   ├── productsStore/
│   │   └── Store.js            # Master catalog data (60+ products with high-res Unsplash imagery)
│   ├── redux-state/
│   │   └── CartState.js        # Redux Toolkit cart, wishlist & promo code slice
│   ├── styles/                 # Modular CSS & SCSS stylesheets
│   ├── App.js                  # Application routing table & scroll restoration
│   ├── index.js                # React DOM root & Redux Provider setup
│   └── index.css               # Global styling, utilities & typography
├── package.json                # Project dependencies, scripts & Ahsan Sheikh metadata
└── README.md                   # Comprehensive project documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js:** v16.x or newer (Tested through Node v26.x)
- **Package Manager:** `npm` (v8.x+)

### Installation

```bash
# Clone the repository
git clone https://github.com/user-ahsan/aura-botanics-luxury-ecommerce.git

# Navigate into project directory
cd aura-botanics-luxury-ecommerce

# Install dependencies (use legacy peer deps for modern npm versions)
npm install --legacy-peer-deps
```

### Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application live in your browser.

### Production Build

```bash
npm run build
```

Creates an optimized, minified production build in the `build/` directory ready for deployment on Vercel, Netlify, or AWS Amplify.

---

## 👨‍💻 Author & Engineering Credits

- **Lead Engineer & Designer:** **Ahsan Sheikh**
- **Email:** [ahsansheikhoffice@gmail.com](mailto:ahsansheikhoffice@gmail.com)
- **GitHub:** [@user-ahsan](https://github.com/user-ahsan)
- **Project Role:** Complete Frontend Architecture, UI/UX Design System, Redux State Design, Component Implementation, and Responsive Optimization.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Copyright © 2026 Ahsan Sheikh. All rights reserved.
