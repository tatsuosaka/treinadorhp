"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const images = [
        { src: "/images/case1.webp", alt: "Transformação 1" },
        {
            src: "/images/case2.webp",
            alt: "Transformação 2",
        },
        {
            src: "/images/case3.webp",
            alt: "Transformação 3",
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-zinc-900 text-zinc-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold uppercase tracking-wider text-orange-500"
                    >
                        Transformações Reais
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Provas Sociais: Histórias de Sucesso
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-zinc-400"
                    >
                        Veja como a dedicação e o acompanhamento profissional
                        podem mudar vidas. Cada imagem conta uma história de
                        superação e conquistas.
                    </motion.p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 mb-16">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-[1/1] rounded-2xl overflow-hidden border border-zinc-800/50 group"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="absolute -top-6 -left-6 text-orange-500/20">
                        <Quote className="h-24 w-24 rotate-180" />
                    </div>
                    <div className="relative z-10 rounded-3xl bg-zinc-950 border border-zinc-800 p-8 md:p-12 text-center shadow-2xl">
                        <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed italic mb-6">
                            &quot;Em X meses, alcancei resultados que nunca
                            imaginei serem possíveis. O acompanhamento foi
                            fundamental!&quot;
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="h-1 w-12 bg-orange-500 rounded-full" />
                            <p className="font-bold text-white uppercase tracking-wider text-sm">
                                Cliente Satisfeito
                            </p>
                            <div className="h-1 w-12 bg-orange-500 rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
