"use client";

import { motion } from "motion/react";
import {
    Calendar,
    Layers,
    Activity,
    Dumbbell,
    ShieldCheck,
    Zap,
    HeartHandshake,
    Clock,
} from "lucide-react";
import Image from "next/image";

export default function Plans() {
    const plans = [
        {
            title: "Formatos Flexíveis",
            description:
                "Consultoria presencial e online, adaptada para atletas, praticantes de musculação e reabilitação.",
            icon: <Layers className="h-6 w-6" />,
        },
        {
            title: "Períodos Variados",
            description:
                "Planos mensais, trimestrais e semestrais, todos com acompanhamento individualizado e constante.",
            icon: <Calendar className="h-6 w-6" />,
        },
        {
            title: "Serviços Completos",
            description:
                "Avaliação inicial, prescrição de treino, orientações nutricionais básicas e suporte motivacional contínuo.",
            icon: <Activity className="h-6 w-6" />,
        },
        {
            title: "Bodybuilding",
            description:
                "Pacotes especiais para preparação de competições, com foco em performance e estética.",
            icon: <Dumbbell className="h-6 w-6" />,
        },
    ];

    const differentials = [
        {
            title: "Abordagem Integrada",
            description:
                "Fisioterapia e treinamento físico juntos para resultados seguros e duradouros, prevenindo lesões e maximizando o desempenho.",
            icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
        },
        {
            title: "Conhecimento Atualizado",
            description:
                "Sempre à frente com as últimas pesquisas em hipertrofia, biomecânica e reabilitação, garantindo as melhores práticas.",
            icon: <Zap className="h-8 w-8 text-orange-500" />,
        },
        {
            title: "Atendimento Humanizado",
            description:
                "Foco no bem-estar físico e mental do aluno, construindo uma relação de confiança e respeito.",
            icon: <HeartHandshake className="h-8 w-8 text-orange-500" />,
        },
        {
            title: "Flexibilidade Total",
            description:
                "Planos adaptados para diferentes perfis, objetivos e rotinas, garantindo que o programa se encaixe perfeitamente em sua vida.",
            icon: <Clock className="h-8 w-8 text-orange-500" />,
        },
    ];

    return (
        <section id="plans" className="py-24 bg-zinc-950 text-zinc-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold uppercase tracking-wider text-orange-500"
                    >
                        Seus Objetivos, Nossos Planos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Planos de Consultoria Personalizada
                    </motion.p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative mx-auto w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/50"
                    >
                        <Image
                            src="/images/plan.webp"
                            alt="Consultoria"
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="flex items-start space-x-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-orange-500/50 transition-colors"
                            >
                                <div className="flex-shrink-0 rounded-full bg-orange-500/10 p-3 text-orange-500">
                                    {plan.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {plan.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-32">
                    <div className="mb-16 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold uppercase tracking-wider text-orange-500"
                        >
                            Por que me escolher?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            Diferenciais do Meu Trabalho
                        </motion.p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {differentials.map((diff, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors"
                            >
                                <div className="flex-shrink-0">{diff.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {diff.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {diff.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
