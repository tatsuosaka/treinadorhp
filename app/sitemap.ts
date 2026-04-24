import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.treinadorhp.com.br/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://www.treinadorhp.com.br/provas-sociais",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
