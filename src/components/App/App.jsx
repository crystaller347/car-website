import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "../Navigation/Navigation.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"));
const CarDetailsPage = lazy(() => import("../../pages/CarDetailsPage/CarDetailsPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));

export default function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:carId" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

