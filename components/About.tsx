"use client";

import { motion } from "motion/react";
import {
    GraduationCap,
    HeartPulse,
    Award,
    BookOpen,
    CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function About() {
    const competences = [
        {
            id: 1,
            title: "Fisioterapia",
            description:
                "Graduado em Fisioterapia pela FHO Fundação Hermínio Ometto (2023)",
            icon: <HeartPulse className="h-6 w-6" />,
        },
        {
            id: 2,
            title: "Educação Física",
            description:
                "Bacharelado em Educação Física pela UniCV - Centro Universitário Cidade Verde (2024)",
            icon: <GraduationCap className="h-6 w-6" />,
        },
        {
            id: 3,
            title: "Fisiologia do Exercício",
            description: "Curso de especialização complementar pela Anhanguera",
            icon: <BookOpen className="h-6 w-6" />,
        },
        {
            id: 4,
            title: "Nutrição e Farmacologia",
            description:
                "Cursos complementares em Nutrição Esportiva e Farmacologia",
            icon: <Award className="h-6 w-6" />,
        },
    ];

    const courses = [
        "Nutrição Esportiva (Udemy)",
        "Farmacologia Básica (Udemy)",
        "Curso de Dieta (Leandro Twin)",
        "Curso de treino (Leandro Twin) ",
        "Mecânica da musculação (Waldemar Guimarães)",
        "Powerbuilding (Caio Bottura)",
        "Massoterapia (Senac Mogi Guaçu)",
    ];

    return (
        <section id="about" className="py-24 bg-zinc-950 text-zinc-100">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold uppercase tracking-wider text-orange-500"
                    >
                        Minha Trajetória
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Quem é Pedro Henrique?
                    </motion.p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="relative pl-8 before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-zinc-800">
                            <div className="relative mb-8">
                                <div className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 border border-orange-500">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Fisioterapeuta, Educador Físico e
                                    especialista em treinamento avançado
                                </h3>
                                <p className="mt-2 text-zinc-400">
                                    Eu sou Pedro Henrique, Fisioterapeuta e
                                    Educador Físico. Hoje já acumulo a
                                    experiência de centenas de clientes
                                    transformados através de método, estratégia
                                    e acompanhamento individualizado.
                                </p>
                                <p className="mt-2 text-zinc-400">
                                    Ajudo pessoas comuns a conquistarem
                                    resultados extraordinários, aplicando a
                                    metodologia utilizada por atletas de
                                    fisiculturismo, porém adaptada com
                                    inteligência, segurança e sustentabilidade
                                    para a realidade de cada aluno. Minha
                                    abordagem une Treinamento Avançado, visão
                                    preventiva e corretiva, biomecánica
                                    aplicada, cinesiologia e análise estratégica
                                    de dieta, exames laboratoriais e protocolos
                                    hormonais.
                                </p>
                                <p className="mt-2 text-zinc-400">
                                    Meu trabalho não é apenas prescrever treino.
                                    É construir um projeto fisico estruturado,
                                    com planejamento, controle e direção clara
                                    de resultado.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative mx-auto w-full max-w-[500px] aspect-video rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl bg-zinc-900"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Quem é Pedro Henrique"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </motion.div>
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
                            Competências e Certificações
                        </motion.h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {competences.map((comp, index) => (
                            <motion.div
                                key={comp.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="relative flex flex-col items-center p-6 text-center rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                            >
                                <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                                    {comp.id}
                                </div>
                                <div className="mb-4 rounded-full bg-orange-500/10 p-3 text-orange-500">
                                    {comp.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">
                                    {comp.title}
                                </h3>
                                <p className="text-sm text-zinc-400">
                                    {comp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8"
                    >
                        <h3 className="mb-6 text-xl font-bold text-center text-white">
                            Cursos Complementares
                        </h3>
                        <div className="flex flex-wrap justify-start md:justify-center gap-x-12 gap-y-4">
                            {courses.map((course, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 text-zinc-300"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0" />
                                    <span className="text-sm">{course}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
