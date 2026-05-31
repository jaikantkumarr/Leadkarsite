import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background" data-testid="page-home">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ServicesOverview />
        <WhyChooseUs />
        <Testimonials />
        <FAQ limit={8} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
