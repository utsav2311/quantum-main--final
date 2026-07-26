import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

import { AuthProvider } from "@/context/AuthContext";
import { LeadModalProvider } from "@/context/LeadModalContext";
import SmoothScroll from "@/components/SmoothScroll";
import LeadModal from "@/components/LeadModal";
import Layout from "@/components/Layout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import DevicePage from "@/pages/DevicePage";
import B2BHub from "@/pages/B2BHub";
import ContactUs from "@/pages/ContactUs";
import Terms from "@/pages/Terms";

import { DEVICES } from "@/data/site";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <LeadModalProvider>
          <BrowserRouter>
            <SmoothScroll />
            <Toaster position="top-center" richColors />
            <LeadModal />
            <Routes>
              {/* Public site */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/b2b-innovation-hub" element={<B2BHub />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/terms" element={<Terms />} />
                {DEVICES.map((d) => (
                  <Route key={d.slug} path={`/${d.slug}`} element={<DevicePage />} />
                ))}
                <Route path="*" element={<DevicePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LeadModalProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}


export default App;
