"use client";

import { motion } from "motion/react";
import {
    ShieldCheck,
    Zap,
    HeartHandshake,
    Clock,
    CheckCircle2,
    Layers,
    Activity,
    Dumbbell,
} from "lucide-react";

export default function Plans() {
    const plans = [
        {
            title: "PLANO 1 – ESSENCIAL",
            price: "200",
            whatsappMessage:
                "Olá, Pedro! Tenho interesse no Plano Essencial (R$ 200). Gostaria de dar o primeiro passo na minha transformação!",
            focus: "Estruturação completa de treino com acompanhamento estratégico",
            includes: [
                "Avaliação inicial detalhada (anamnese + objetivos)",
                "Prescrição de treino personalizada",
                "Periodização estratégica (hipertrofia, emagrecimento e performance)",
                "Ajustes mensais de treino",
                "Análise técnica de execução (vídeos)",
                "1 reunião mensal para alinhamento",
                "Suporte via WhatsApp (horário comercial)",
                "Orientações gerais sobre rotina e hábitos",
                "Adaptações a exames e patologias",
            ],
            idealFor:
                "Quem quer resultado com treino bem estruturado, mas sem acompanhamento nutricional e farmacológico.",
            icon: <Layers className="h-8 w-8" />,
            popular: false,
        },
        {
            title: "PLANO 2 – PERFORMANCE",
            price: "300",
            whatsappMessage:
                "Olá, Pedro! Quero acelerar meus resultados com o Plano Performance (R$ 300). Como podemos começar?",
            focus: "Otimização de resultados com controle total (treino + dieta + recursos ergogênicos)",
            includes: [
                "Inclui tudo do plano Essencial +",
                "Visão analítica comportamental e alimentar",
                "Estratégias avançadas (cutting, bulking, recomposição)",
                "Direcionamento sobre uso de fármacos e suplementos",
                "Solicitação e análise de exames laboratoriais",
                "Controle de evolução física (feedback contínuo)",
                "1 a 2 reuniões mensais (sob análise)",
                "Encaminhamento a profissionais habilitados, de acordo com as necessidades observadas durante o acompanhamento.",
            ],
            idealFor:
                "Quem quer acelerar resultados com acompanhamento mais completo e abordagem técnica integrada.",
            icon: <Activity className="h-8 w-8" />,
            popular: true,
        },
        {
            title: "PLANO 3 – ELITE",
            price: "400",
            whatsappMessage:
                "Olá, Pedro! Estou buscando o máximo de resultado e acompanhamento de alto nível com o Plano Elite (R$ 400). Podemos conversar?",
            focus: "Alta performance, estética avançada e acompanhamento próximo",
            includes: [
                "Inclui tudo do plano Performance +",
                "Reuniões semanais (ajustes finos e acompanhamento próximo)",
                "Suporte prioritário (resposta rápida e acompanhamento diário)",
                "Ajustes semanais de protocolo (se necessário)",
                "Estratégias avançadas e individualizadas (nível atleta)",
                "Monitoramento constante de evolução (fotos, medidas, performance)",
                "Planejamento completo de rotina (sono, cardio, hábitos)",
                "Preparação específica (ensaios, eventos, desafios, etc.)",
                "Atenção personalizada e acompanhamento intensivo",
            ],
            differential:
                "Aqui o aluno tem praticamente um coach ao lado todos os dias.",
            idealFor:
                "Quem quer o máximo resultado possível com acompanhamento de alto nível e proximidade total.",
            icon: <Dumbbell className="h-8 w-8" />,
            popular: false,
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

                <div className="grid gap-8 lg:grid-cols-3 items-stretch">
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
                            className={`relative flex flex-col rounded-3xl border ${plan.popular ? "border-orange-500 bg-zinc-900/80 shadow-2xl shadow-orange-500/10" : "border-zinc-800 bg-zinc-900/50 hover:border-orange-500/50"} p-8 transition-colors`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                    Mais Escolhido
                                </div>
                            )}
                            <div className="mb-6 flex items-center space-x-4">
                                <div className="flex-shrink-0 rounded-full bg-orange-500/10 p-3 text-orange-500">
                                    {plan.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        {plan.title}
                                    </h3>
                                    <div className="mt-1 flex items-baseline text-white">
                                        <span className="text-2xl font-extrabold tracking-tight">
                                            R$ {plan.price}
                                        </span>
                                        <span className="ml-1 text-sm font-medium text-zinc-400">
                                            /mês
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-sm font-medium text-orange-400 mb-2">
                                    Foco:
                                </p>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {plan.focus}
                                </p>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                <p className="text-sm font-medium text-white">
                                    Inclui:
                                </p>
                                <ul className="space-y-3">
                                    {plan.includes.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start space-x-3 text-sm text-zinc-400"
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                                            <span
                                                className={
                                                    item.includes(
                                                        "Inclui tudo do plano",
                                                    )
                                                        ? "font-medium text-white"
                                                        : ""
                                                }
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {plan.differential && (
                                <div className="mb-6 rounded-xl bg-orange-500/10 p-4 border border-orange-500/20">
                                    <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">
                                        Diferencial
                                    </p>
                                    <p className="text-sm text-zinc-300">
                                        {plan.differential}
                                    </p>
                                </div>
                            )}

                            <div className="mt-auto pt-6 border-t border-zinc-800">
                                <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                    Ideal para
                                </p>
                                <p className="text-sm text-zinc-300 italic">
                                    {plan.idealFor}
                                </p>
                            </div>

                            <a
                                href={`https://wa.me/5519986017806?text=${encodeURIComponent(plan.whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-bold transition-colors ${plan.popular ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
                            >
                                Escolher Plano
                            </a>
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
