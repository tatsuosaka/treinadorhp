"use client";

import { motion } from "motion/react";
import { Phone, Instagram, ArrowRight, CalendarCheck } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">
                                Como Contratar e Entrar em Contato
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Estamos prontos para iniciar sua transformação.
                                Agende sua consulta e descubra como podemos
                                trabalhar juntos.
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2">
                            <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-colors">
                                <div className="flex items-center space-x-3 text-orange-500">
                                    <CalendarCheck className="h-6 w-6" />
                                    <h3 className="text-xl font-bold text-white">
                                        Agendamento
                                    </h3>
                                </div>
                                <p className="text-sm text-zinc-400">
                                    Para consultas e detalhes sobre planos,
                                    entre em contato.
                                </p>
                                <div className="flex items-center space-x-2 text-zinc-300">
                                    <Phone className="h-4 w-4 text-orange-500" />
                                    <span className="font-medium">
                                        (19) 98601-7806
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-colors">
                                <div className="flex items-center space-x-3 text-orange-500">
                                    <Instagram className="h-6 w-6" />
                                    <h3 className="text-xl font-bold text-white">
                                        Siga-me
                                    </h3>
                                </div>
                                <p className="text-sm text-zinc-400">
                                    Acompanhe meu trabalho e dicas nas redes
                                    sociais.
                                </p>
                                <a
                                    href="https://instagram.com/treinador.hp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
                                >
                                    <span>@treinador.hp</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8 p-8 md:p-12 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl"
                    >
                        <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-orange-500 before:rounded-full">
                            <p className="text-xl md:text-2xl font-medium text-white leading-tight italic">
                                &quot;Seu corpo é o único lugar que você vai
                                morar para sempre. Cuide dele como seu maior
                                patrimônio, afinal, quem não encontra tempo para
                                a saúde, terá que encontrar tempo para a
                                doença... uma vida, uma chance!&quot;
                            </p>
                        </div>

                        <p className="text-zinc-400">
                            Agradeço sua atenção! Estou à disposição para
                            perguntas ou para agendar seu primeiro passo rumo à
                            transformação.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://wa.me/5519986017806"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-14 items-center justify-center rounded-xl bg-orange-500 px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                            >
                                Agende Sua Reunião Agora!
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
