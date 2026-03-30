import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProjectsSection />
        <NewsSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
