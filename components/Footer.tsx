"use client";

import { Dumbbell, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8 text-zinc-400">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-white group"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white transition-transform group-hover:scale-105">
                                <Dumbbell className="h-6 w-6" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                Treinador HP
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Consultoria especializada em Fisioterapia,
                            Musculação e Bodybuilding Coaching. Transformando
                            corpos e vidas com ciência e dedicação.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#about"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Sobre Mim
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/provas-sociais"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Resultados
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#plans"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Planos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="hover:text-orange-500 transition-colors"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contato</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-orange-500" />
                                <span>(19) 99497-9554</span>
                            </li>
                            {/* <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-orange-500" />
                                <span>contato@treinadorhp.com.br</span>
                            </li> */}
                            <li className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 text-orange-500" />
                                <span>Atendimento Online e Presencial</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">
                            Redes Sociais
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/treinador.hp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 text-center text-sm flex flex-col md:flex-row justify-between items-center">
                    <p>
                        © {new Date().getFullYear()} Treinador HP. Todos os
                        direitos reservados.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Desenvolvido com{" "}
                        <span className="text-orange-500">♥</span> para sua
                        transformação.
                    </p>
                </div>
            </div>
        </footer>
    );
}
