"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Quote, CheckCircle2, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SocialProofPage() {
    const cases = [
        {
            id: 1,
            name: "Ricardo S.",
            result: "Perda de 12kg e Ganho de Massa",
            description: "Ricardo buscava melhorar sua composição corporal e saúde geral. Com um plano focado em musculação terapêutica e ajuste nutricional, conseguimos reverter um quadro de pré-diabetes e transformar seu físico em 6 meses.",
            image: "/images/case1.webp",
            tags: ["Emagrecimento", "Saúde", "Musculação"]
        },
        {
            id: 2,
            name: "Mariana L.",
            result: "Reabilitação e Fortalecimento",
            description: "Após uma lesão no joelho, Mariana precisava de um acompanhamento que unisse fisioterapia e treino de força. Hoje ela treina sem dor e com cargas superiores ao que imaginava.",
            image: "/images/case2.webp",
            tags: ["Fisioterapia", "Reabilitação", "Força"]
        },
        {
            id: 3,
            name: "André M.",
            result: "Hipertrofia Avançada",
            description: "Focado em estética e performance, André utilizou nossa metodologia de treinamento avançado para quebrar platôs e atingir um novo nível de densidade muscular.",
            image: "/images/case3.webp",
            tags: ["Hipertrofia", "Performance", "Bodybuilding"]
        },
        {
            id: 4,
            name: "Juliana F.",
            result: "Definição Muscular",
            description: "Trabalhamos a biomecânica aplicada para corrigir assimetrias e melhorar a linha estética, focando em pontos específicos para um físico harmonioso.",
            image: "/images/case4.webp",
            tags: ["Estética", "Biomecânica", "Definição"]
        }
    ];

    const testimonials = [
        {
            text: "O Pedro Henrique não é apenas um treinador, ele é um estrategista. Ele entende a fisiologia por trás de cada movimento. Minha evolução foi constante e segura.",
            author: "Carlos Alberto",
            role: "Empresário"
        },
        {
            text: "Vim pela fisioterapia e fiquei pelo treinamento. A integração entre as duas áreas é o diferencial que eu não encontrava em lugar nenhum.",
            author: "Beatriz Santos",
            role: "Atleta Amadora"
        },
        {
            text: "Resultados reais sem promessas milagrosas. O método é sólido e o acompanhamento é diário. Recomendo para quem quer seriedade.",
            author: "Felipe Mendes",
            role: "Engenheiro"
        }
    ];

    return (
        <main className="bg-zinc-950 min-h-screen text-zinc-100">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/bg.webp"
                        alt="Background"
                        fill
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
                        >
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Voltar para o Início
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Resultados que <span className="text-orange-500">Falam por Si</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            A prova real da nossa metodologia aplicada. Transformações físicas e de saúde 
                            construídas com ciência, estratégia e acompanhamento individualizado.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {cases.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-500"
                            >
                                <div className="grid md:grid-cols-2">
                                    <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/20 to-transparent" />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                                        <p className="text-orange-500 font-medium mb-4">{item.result}</p>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-zinc-500 text-xs">
                                            <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2" />
                                            Metodologia HP Aplicada
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24 bg-zinc-900/50 border-t border-zinc-800">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Depoimentos de Alunos</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            O que dizem aqueles que vivenciam o acompanhamento diário e a estratégia personalizada.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 relative"
                            >
                                <Quote className="absolute top-6 right-6 h-8 w-8 text-orange-500/10" />
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-orange-500 fill-orange-500" />
                                    ))}
                                </div>
                                <p className="text-zinc-300 italic mb-6 leading-relaxed">
                                    &quot;{t.text}&quot;
                                </p>
                                <div>
                                    <p className="font-bold text-white">{t.author}</p>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-12 text-center text-white shadow-2xl shadow-orange-500/20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para ser o próximo caso de sucesso?</h2>
                        <p className="text-orange-50/80 text-lg mb-8 max-w-2xl mx-auto">
                            Não deixe para depois a transformação que você pode começar hoje. 
                            Agende sua avaliação e vamos construir seu novo físico.
                        </p>
                        <Link 
                            href="/#contact" 
                            className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-orange-600 font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl"
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
