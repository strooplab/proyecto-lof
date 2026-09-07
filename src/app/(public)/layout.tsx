// @/app/(public)/layout.tsx

import Navbar from "@/components/ui/Navbar"; // UI Top Navbar
import Menubar from "@/components/ui/Menu"; // UI Mobile sidebar
import Carrito from "@/components/ui/Carrito"; // UI Cart Shopping sidebar
import Buscar from "@/components/ui/Buscar"; // UI Search panel
import { ContextProvider } from "@/components/context/PanelContext"; // Shared Context between Menu and Navbar
import Footer from "@/components/ui/Footer"; // UI Footer
import FloatingWhatsApp from "@/components/ui/FloatingWhatsapp"; // UI Whatsapp block
import { getNavigation } from "@/data/navigation"; // Hybrid Navigation

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const Navigation = await getNavigation();

  return (
    <ContextProvider>
      <div className="relative min-h-screen flex flex-col bg-cream">
        <Navbar navigation={Navigation} />
        <Menubar navigation={Navigation} />
        <Carrito />
        <Buscar />
        <main className="grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContextProvider>
  );
}
