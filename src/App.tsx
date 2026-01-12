import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import PowerBatches from "./pages/PowerBatches";
import ServicesPage from "./pages/ServicesPage";
import UniversitySelectionPage from "./pages/UniversitySelectionPage";
import VisaAssistancePage from "./pages/VisaAssistancePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/power-batches" element={<PowerBatches />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/university-selection" element={<UniversitySelectionPage />} />
          <Route path="/visa-assistance" element={<VisaAssistancePage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
