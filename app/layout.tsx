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
    metadataBase: new URL("https://treinadorhp.com"),
    title: "Treinador HP | Consultoria Esportiva de Fisioterapia e Musculação",
    description:
        "Fisioterapia, Musculação e Bodybuilding Coaching personalizado. Transforme seu corpo com ciência, técnica e acompanhamento profissional. Consultoria esportiva especializada.",
    keywords: [
        "personal trainer",
        "fisioterapia",
        "musculação",
        "bodybuilding",
        "consultoria esportiva",
        "treinamento personalizado",
        "coaching fitness",
        "educação física",
    ].join(", "),
    authors: [
        {
            name: "Treinador HP",
            url: "https://treinadorhp.com",
        },
    ],
    creator: "Treinador HP",
    icons: {
        icon: "/images/logo-svg.svg",
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://treinadorhp.com",
        siteName: "Treinador HP",
        title: "Treinador HP | Consultoria Esportiva de Fisioterapia e Musculação",
        description:
            "Fisioterapia, Musculação e Bodybuilding Coaching personalizado. Transforme seu corpo com ciência, técnica e acompanhamento profissional.",
        images: [
            {
                url: "/images/logo-svg.svg",
                width: 1200,
                height: 630,
                alt: "Treinador HP - Consultoria Esportiva",
                type: "image/svg+xml",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Treinador HP | Consultoria Esportiva",
        description:
            "Fisioterapia, Musculação e Bodybuilding Coaching personalizado",
        images: ["/images/logo-svg.svg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    alternates: {
        canonical: "https://treinadorhp.com",
        languages: {
            "pt-BR": "https://treinadorhp.com",
        },
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
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
                />
                <meta name="theme-color" content="#09090b" />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="alternate"
                    hrefLang="pt-BR"
                    href="https://treinadorhp.com"
                />
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Treinador HP",
                            description:
                                "Consultoria de Fisioterapia, Musculação e Bodybuilding",
                            url: "https://treinadorhp.com",
                            telephone: "+55 19 99497-9554",
                            email: "personalpedroh@hotmail.com",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Sua rua aqui",
                                addressLocality: "Mogi Guaçu",
                                addressRegion: "SP",
                                postalCode: "Seu CEP",
                                addressCountry: "BR",
                            },
                            areaServed: "BR",
                            priceRange: "$$$",
                            sameAs: [
                                "https://www.instagram.com/treinador.hp/",
                                "https://www.facebook.com/seu-perfil",
                            ],
                            knowsAbout: [
                                "Fisioterapia",
                                "Personal Training",
                                "Musculação",
                                "Bodybuilding",
                                "Nutrição Esportiva",
                            ],
                            hasCredential: [
                                {
                                    "@type":
                                        "EducationalOccupationalCredential",
                                    credentialCategory: "degree",
                                    name: "Graduação em Fisioterapia",
                                },
                                {
                                    "@type":
                                        "EducationalOccupationalCredential",
                                    credentialCategory: "degree",
                                    name: "Bacharelado em Educação Física",
                                },
                            ],
                        }),
                    }}
                />
            </head>
            <body
                className="font-sans antialiased bg-zinc-950 text-zinc-100"
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
