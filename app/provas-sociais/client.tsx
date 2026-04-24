"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SocialProofPageClient() {
    const cases = [
        {
            id: 1,
            image: "/images/case1.webp",
            alt: "Transformação corporal case de sucesso 1 - antes e depois",
        },
        {
            id: 2,
            image: "/images/case2.webp",
            alt: "Transformação corporal case de sucesso 2 - antes e depois",
        },
        {
            id: 3,
            image: "/images/case3.webp",
            alt: "Transformação corporal case de sucesso 3 - antes e depois",
        },
        {
            id: 4,
            image: "/images/case4.webp",
            alt: "Transformação corporal case de sucesso 4 - antes e depois",
        },
        {
            id: 5,
            image: "/images/case5.webp",
            alt: "Transformação corporal case de sucesso 5 - antes e depois",
        },
        {
            id: 6,
            image: "/images/case6.webp",
            alt: "Transformação corporal case de sucesso 6 - antes e depois",
        },
        {
            id: 7,
            image: "/images/case7.webp",
            alt: "Transformação corporal case de sucesso 7 - antes e depois",
        },
        {
            id: 8,
            image: "/images/case8.webp",
            alt: "Transformação corporal case de sucesso 8 - antes e depois",
        },
        {
            id: 9,
            image: "/images/case9.webp",
            alt: "Transformação corporal case de sucesso 9 - antes e depois",
        },
        {
            id: 10,
            image: "/images/case10.webp",
            alt: "Transformação corporal case de sucesso 10 - antes e depois",
        },
        {
            id: 11,
            image: "/images/case11.webp",
            alt: "Transformação corporal case de sucesso 11 - antes e depois",
        },
        {
            id: 12,
            image: "/images/case12.webp",
            alt: "Transformação corporal case de sucesso 12 - antes e depois",
        },
    ];

    return (
        <main className="bg-zinc-950 min-h-screen text-zinc-100">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative pt-32 pb-20 overflow-hidden"
                aria-labelledby="hero-title"
            >
                <div className="absolute inset-0 z-0 opacity-20 w-full h-full">
                    <Image
                        src="/images/bg.webp"
                        alt="Fundo com equipamento de ginásio"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8 group"
                            aria-label="Voltar para a página inicial"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Voltar para o Início
                        </Link>
                        <h1
                            id="hero-title"
                            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                        >
                            Resultados que{" "}
                            <span className="text-orange-500">
                                Falam por Si
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            A prova real da nossa metodologia aplicada.
                            Transformações físicas e de saúde construídas com
                            ciência, estratégia e acompanhamento
                            individualizado.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cases Gallery */}
            <section className="py-12 pb-24" aria-labelledby="gallery-title">
                <div className="container px-4 mx-auto">
                    <h2 id="gallery-title" className="sr-only">
                        Galeria de casos de sucesso
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {cases.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                className="group relative aspect-[1/1] rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-24 border-t border-zinc-800"
                aria-labelledby="cta-title"
            >
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-12 text-center text-white shadow-2xl shadow-orange-500/20">
                        <h2
                            id="cta-title"
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            Pronto para ser o próximo caso de sucesso?
                        </h2>
                        <p className="text-orange-50/80 text-lg mb-8 max-w-2xl mx-auto">
                            Não deixe para depois a transformação que você pode
                            começar hoje. Agende sua avaliação e vamos construir
                            seu novo físico.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-orange-600 font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl"
                            aria-label="Começar agora - ir para seção de contato"
                        >
                            Começar Agora
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
