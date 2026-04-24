import type { Metadata } from "next";
import SocialProofPageClient from "./client";

export const metadata: Metadata = {
    title: "Cases de Sucesso | Treinador HP - Resultados de Transformação",
    description:
        "Confira os cases de sucesso e resultados reais de transformação corporal conquistados com nosso programa de fisioterapia, musculação e treinamento personalizado.",
    keywords:
        "resultados fitness, transformação corporal, cases de sucesso, antes e depois, personal training",
    openGraph: {
        title: "Cases de Sucesso | Treinador HP",
        description:
            "Veja as transformações reais de nossos clientes com treinamento personalizado",
        type: "website",
        url: "https://treinadorhp.com/provas-sociais",
        siteName: "Treinador HP",
        images: [
            {
                url: "/images/case1.webp",
                width: 800,
                height: 1067,
                alt: "Case de sucesso 1",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cases de Sucesso | Treinador HP",
        description: "Transformações reais de nossos clientes",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://treinadorhp.com/provas-sociais",
    },
};

export default function SocialProofPage() {
    return <SocialProofPageClient />;
}
