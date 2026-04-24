import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Treinador HP | Consultoria Esportiva de Fisioterapia e Musculação",
    description:
        "Fisioterapia, Musculação e Bodybuilding Coaching personalizado. Transforme seu corpo com ciência, técnica e acompanhamento profissional. Consultoria esportiva especializada.",
};

export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-950">
            <Navbar />
            <Hero />
            <About />
            <Methodology />
            <Testimonials />
            <Plans />
            <Contact />
            <Footer />
        </main>
    );
}
