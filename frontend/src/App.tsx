import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PowerBatches from "./pages/PowerBatches";
import ServicesPage from "./pages/ServicesPage";
import UniversitySelectionPage from "./pages/UniversitySelectionPage";
import VisaAssistancePage from "./pages/VisaAssistancePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import PreDeparturePage from "./pages/PreDeparturePage";
import AcademicCounselingPage from "./pages/AcademicCounselingPage";
import ChannelPartnerPage from "./pages/ChannelPartnerPage";
import CountryPage from "./pages/CountryPage";
import IELTSPage from "./pages/IELTSPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndConditions from "./pages/TermsAndConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/power-batches" element={<PowerBatches />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* Services pages */}
          <Route
            path="/university-selection"
            element={<UniversitySelectionPage />}
          />
          <Route path="/visa-assistance" element={<VisaAssistancePage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/pre-departure" element={<PreDeparturePage />} />
          <Route
            path="/career-counseling"
            element={<AcademicCounselingPage />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          <Route path="/channel-partner" element={<ChannelPartnerPage />} />
          {/* Country pages */}
          <Route path="/country/:countrySlug" element={<CountryPage />} />
          <Route path="/ielts" element={<IELTSPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
