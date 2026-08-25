import Navbar from "@/components/ui/Navbar";
import Menubar from "@/components/ui/Menu";
import Carrito from "@/components/ui/Carrito";
import Buscar from "@/components/ui/Buscar";
import { ContextProvider } from "@/components/context/PanelContext";
import Footer from "@/components/ui/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <div className="relative min-h-screen flex flex-col bg-cream">
        <Navbar />
        <Menubar />
        <Carrito />
        <Buscar />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </ContextProvider>
  );
}
