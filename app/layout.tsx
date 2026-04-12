import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css"; // Global styles

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "Treinador HP | Consultoria Esportiva",
    description:
        "Fisioterapia, Musculação e Bodybuilding Coaching. Transforme seu corpo com ciência e personalização.",
    icons: {
        icon: "/images/logo-svg.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="pt-BR"
            className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
        >
            <body
                className="font-sans antialiased bg-zinc-950 text-zinc-100"
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
