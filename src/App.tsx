
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import ComputerEquipment from "./pages/services/ComputerEquipment";
import OfficeEquipment from "./pages/services/OfficeEquipment";
import TelecomEquipment from "./pages/services/TelecomEquipment";
import ServerEquipment from "./pages/services/ServerEquipment";
import SpecializedServices from "./pages/services/SpecializedServices";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Success from "./pages/Success";
import Error from "./pages/Error";
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
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services/computer-equipment" element={<ComputerEquipment />} />
          <Route path="/services/office-equipment" element={<OfficeEquipment />} />
          <Route path="/services/telecom-equipment" element={<TelecomEquipment />} />
          <Route path="/services/server-equipment" element={<ServerEquipment />} />
          <Route path="/services/specialized-services" element={<SpecializedServices />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;