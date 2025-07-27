import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ClientTypesPageSection from '@/components/sections/ClientTypesPageSection';
import { useState } from 'react';

export default function Clients() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <ClientTypesPageSection />
      </main>
      <Footer />
    </div>
  );
}