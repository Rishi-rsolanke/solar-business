import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import SolarCalculator, { useCalculator } from '@/components/SolarCalculator';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

function App() {
  const [bill, setBill] = useState<number>(2000);
  const results = useCalculator(bill);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <SolarCalculator bill={bill} setBill={setBill} />
        <LeadForm data={results} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
