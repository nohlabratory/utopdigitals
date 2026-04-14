import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#E6E9EC] text-gray-900">
      <Header />
      <main className="pt-24">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
