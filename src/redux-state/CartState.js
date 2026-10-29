/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Centralized Redux Toolkit state slice for shopping cart, wishlist, and promo discounts.
 */

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Load persisted state safely if available in browser
const getInitialCart = () => {
    try {
        const saved = localStorage.getItem("aura_cart_state");
        return saved ? JSON.parse(saved) : { items: [], totalQuantity: 0, discountCode: null, discountPercent: 0 };
    } catch {
        return { items: [], totalQuantity: 0, discountCode: null, discountPercent: 0 };
    }
};

const getInitialWishlist = () => {
    try {
        const saved = localStorage.getItem("aura_wishlist_state");
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

const initialCart = getInitialCart();

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: initialCart.items || [],
        totalQuantity: initialCart.totalQuantity || 0,
        discountCode: initialCart.discountCode || null,
        discountPercent: initialCart.discountPercent || 0,
        wishlist: getInitialWishlist(),
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => String(item.id) === String(newItem.id));
            state.totalQuantity++;

            if (!existingItem) {
                state.items.push({
                    id: String(newItem.id),
                    price: Number(newItem.price),
                    quantity: 1,
                    totalPrice: Number(newItem.price),
                    name: newItem.title || newItem.name,
                    picture: newItem.image || newItem.primaryImage || newItem.picture,
                    category: newItem.category || "Skincare",
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + Number(newItem.price);
            }

            try {
                localStorage.setItem("aura_cart_state", JSON.stringify({
                    items: state.items,
                    totalQuantity: state.totalQuantity,
                    discountCode: state.discountCode,
                    discountPercent: state.discountPercent,
                }));
            } catch {
                // Ignore storage limits
            }
        },

        removeItemFromCart(state, action) {
            const id = String(action.payload);
            const existingItem = state.items.find((item) => String(item.id) === id);
            if (!existingItem) return;

            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => String(item.id) !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - Number(existingItem.price);
            }

            try {
                localStorage.setItem("aura_cart_state", JSON.stringify({
                    items: state.items,
                    totalQuantity: state.totalQuantity,
                    discountCode: state.discountCode,
                    discountPercent: state.discountPercent,
                }));
            } catch {
                // Ignore storage limits
            }
        },

        deleteItemFromCart(state, action) {
            const id = String(action.payload);
            const existingItem = state.items.find((item) => String(item.id) === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter((item) => String(item.id) !== id);
                try {
                    localStorage.setItem("aura_cart_state", JSON.stringify({
                        items: state.items,
                        totalQuantity: state.totalQuantity,
                        discountCode: state.discountCode,
                        discountPercent: state.discountPercent,
                    }));
                } catch {
                    // Ignore storage limits
                }
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.discountCode = null;
            state.discountPercent = 0;
            try {
                localStorage.removeItem("aura_cart_state");
            } catch {
                // Ignore storage limits
            }
        },

        applyDiscount(state, action) {
            const code = (action.payload || "").toUpperCase().trim();
            if (code === "AHSAN20" || code === "WELCOME20") {
                state.discountCode = code;
                state.discountPercent = 20;
            } else if (code === "AURA10" || code === "BOTANICA10") {
                state.discountCode = code;
                state.discountPercent = 10;
            } else if (code === "AHSAN30") {
                state.discountCode = code;
                state.discountPercent = 30;
            } else {
                state.discountCode = null;
                state.discountPercent = 0;
            }
        },

        removeDiscount(state) {
            state.discountCode = null;
            state.discountPercent = 0;
        },

        toggleWishlist(state, action) {
            const item = action.payload;
            const id = String(item.id);
            const exists = state.wishlist.find((w) => String(w.id) === id);
            if (exists) {
                state.wishlist = state.wishlist.filter((w) => String(w.id) !== id);
            } else {
                state.wishlist.push({
                    id: String(item.id),
                    name: item.name || item.title,
                    price: Number(item.price),
                    primaryImage: item.primaryImage || item.image || item.picture,
                    category: item.category || "Skincare",
                    stars: item.stars || 5,
                });
            }
            try {
                localStorage.setItem("aura_wishlist_state", JSON.stringify(state.wishlist));
            } catch {
                // Ignore storage limits
            }
        },

        removeFromWishlist(state, action) {
            const id = String(action.payload);
            state.wishlist = state.wishlist.filter((w) => String(w.id) !== id);
            try {
                localStorage.setItem("aura_wishlist_state", JSON.stringify(state.wishlist));
            } catch {
                // Ignore storage limits
            }
        },
    }
});

const store = configureStore({
    reducer: { cart: cartSlice.reducer }
});

export default store;
export const cartActions = cartSlice.actions;
