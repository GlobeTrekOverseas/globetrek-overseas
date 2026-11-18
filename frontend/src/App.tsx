import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import RouteSeo from "./components/RouteSeo";

// Every page except Home is code-split: its JS downloads only when visited.
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PowerBatches = lazy(() => import("./pages/PowerBatches"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const UniversitySelectionPage = lazy(
  () => import("./pages/UniversitySelectionPage"),
);
const VisaAssistancePage = lazy(() => import("./pages/VisaAssistancePage"));
const ScholarshipsPage = lazy(() => import("./pages/ScholarshipsPage"));
const PreDeparturePage = lazy(() => import("./pages/PreDeparturePage"));
const AcademicCounselingPage = lazy(
  () => import("./pages/AcademicCounselingPage"),
);
const ChannelPartnerPage = lazy(() => import("./pages/ChannelPartnerPage"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const IELTSPage = lazy(() => import("./pages/IELTSPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const BlogLive = lazy(() => import("./pages/BlogListingLive"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div
      className="w-10 h-10 rounded-full border-2 border-accent/20 border-t-accent animate-spin"
      role="status"
      aria-label="Loading page"
    />
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <RouteSeo />
      <Suspense fallback={<PageFallback />}>
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
          <Route path="/blog-live" element={<BlogLive />} />
          <Route
            path="/career-counseling"
            element={<AcademicCounselingPage />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/channel-partner" element={<ChannelPartnerPage />} />
          {/* Country pages */}
          <Route path="/country/:countrySlug" element={<CountryPage />} />
          <Route path="/ielts" element={<IELTSPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE.
                Also add new routes to vercel.json rewrites and public/sitemap.xml. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
