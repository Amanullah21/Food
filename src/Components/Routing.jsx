import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import WelcomPage from "./WelcomPage";
import Login from "./Login";
import ProductList from "./ProductList";
import Summery from "./Summery";
import Navbar from "./Navbar";
import Checkout from "./Checkout";
export const Routing = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcompage" element={<WelcomPage />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/summery" element={<Summery />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
    );
};