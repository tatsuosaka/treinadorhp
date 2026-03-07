"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Início", href: "#" },
        { name: "Sobre", href: "#about" },
        { name: "Metodologia", href: "#methodology" },
        { name: "Resultados", href: "#testimonials" },
        { name: "Planos", href: "#plans" },
        { name: "Contato", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
                <a
                    href="#"
                    className="flex items-center space-x-2 text-white group"
                >
                    <div className="flex h-10 w-10 p-1 items-center justify-center rounded-xl bg-orange-500 text-white transition-transform group-hover:scale-105">
                        <Image
                            src={"/images/logo-svg.svg"}
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    {/* <span className="text-xl font-light  tracking-tight">
                        Treinador HP
                    </span> */}
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
                    >
                        Agendar
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-b border-zinc-800"
                    >
                        <nav className="flex flex-col px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-zinc-400 hover:text-orange-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-6 text-base font-medium text-white shadow transition-colors hover:bg-orange-600"
                            >
                                Agendar Sessão
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
