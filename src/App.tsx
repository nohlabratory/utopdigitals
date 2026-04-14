import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Team from "./components/Team";
import Works from "./components/Works";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PricingPage from "./PricingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#E6E9EC] text-gray-900">
            <Header />
            <Hero />
            <SocialProof />
            <Services />
            <HowItWorks />
            <Works />
            <Team />
            <CTA />
            <Footer />
          </div>
        } />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
