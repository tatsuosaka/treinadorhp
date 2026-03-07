"use client";

import { motion } from "motion/react";
import {
    Search,
    Compass,
    FlaskConical,
    LineChart,
    Activity,
    CheckCircle,
    TrendingUp,
} from "lucide-react";

export default function Methodology() {
    const steps = [
        {
            id: "01",
            title: "Avaliação",
            description:
                "Avaliação inicial detalhada para entender seu corpo, histórico e objetivos.",
            icon: <Search className="h-8 w-8" />,
        },
        {
            id: "02",
            title: "Plano",
            description:
                "Desenvolvimento de um plano personalizado baseado em evidências científicas.",
            icon: <Compass className="h-8 w-8" />,
        },
        {
            id: "03",
            title: "Execução",
            description:
                "Implementação do treinamento com acompanhamento e ajustes contínuos.",
            icon: <FlaskConical className="h-8 w-8" />,
        },
        {
            id: "04",
            title: "Monitoramento",
            description:
                "Monitoramento de progresso e resultados para garantir a eficácia do programa.",
            icon: <LineChart className="h-8 w-8" />,
        },
    ];

    const results = [
        {
            value: "5-8kg",
            label: "Ganho de Massa Muscular",
            description:
                "Média em 6 meses com acompanhamento contínuo e personalizado.",
            icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
        },
        {
            value: "80%",
            label: "Redução de Dores",
            description:
                "Melhora significativa nos quadros gerais de clientes com dores ou patologias.",
            icon: <Activity className="h-6 w-6 text-orange-500" />,
        },
        {
            value: "90%",
            label: "Adesão ao Programa",
            description:
                "Índices superiores, impulsionados pelo suporte motivacional e personalizado.",
            icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
        },
    ];

    return (
        <section id="methodology" className="py-24 bg-zinc-900 text-zinc-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold uppercase tracking-wider text-orange-500"
                    >
                        Nossa Abordagem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Metodologia de Trabalho: Ciência e Personalização
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 max-w-2xl mx-auto text-zinc-400"
                    >
                        Nossa metodologia integra rigor científico com uma
                        abordagem altamente personalizada, garantindo resultados
                        eficazes e duradouros.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-zinc-900 bg-zinc-950 text-orange-500 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:border-orange-500/50">
                                {step.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">
                                {step.title}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32">
                    <div className="mb-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            Resultados Comprovados: Dados e Feedbacks
                        </motion.h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="flex flex-col items-center p-8 text-center rounded-3xl bg-zinc-950 border border-zinc-800/50 hover:border-orange-500/30 transition-colors"
                            >
                                <div className="mb-4">{result.icon}</div>
                                <div className="text-5xl font-black tracking-tighter text-white mb-4">
                                    {result.value}
                                </div>
                                <h3 className="text-lg font-bold text-orange-500 mb-2">
                                    {result.label}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {result.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 text-center text-zinc-400 italic"
                    >
                        Nossos resultados são a prova do compromisso com a
                        excelência e a eficácia de nossa metodologia.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
