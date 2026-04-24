# Guia de Otimização de Vídeo

## Alterações Realizadas

✅ **Substituído**: YouTube iframe → Vídeo MP4 local  
✅ **Componente**: [components/About.tsx](components/About.tsx) - linha ~132  
✅ **Configuração**: [next.config.ts](next.config.ts) - headers de cache adicionados

## Próximos Passos

### 1. Colocar o arquivo de vídeo

Coloque o arquivo `Pedro Henrique - Apresentação.mp4` na seguinte localização:

```
public/videos/Pedro Henrique - Apresentação.mp4
```

### 2. Otimizar o vídeo (IMPORTANTE)

Para reduzir o tamanho do arquivo mantendo qualidade:

#### Opção 1: FFmpeg (Recomendado)

```bash
ffmpeg -i "Pedro Henrique - Apresentação.mp4" \
  -c:v libx264 \
  -crf 23 \
  -preset slow \
  -c:a aac \
  -b:a 128k \
  "Pedro Henrique - Apresentação-otimizado.mp4"
```

**Parâmetros explicados:**

- `-crf 23`: Qualidade (0=melhor, 51=pior). 23 é padrão, 28 reduz mais.
- `-preset slow`: Melhor compressão (opções: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
- `-b:a 128k`: Bitrate de áudio (reduz tamanho)

#### Opção 2: Comandos para redução mais agressiva

**Para vídeos grandes (>100MB):**

```bash
ffmpeg -i "Pedro Henrique - Apresentação.mp4" \
  -c:v libx264 \
  -crf 28 \
  -preset slower \
  -s 1280x720 \
  -c:a aac \
  -b:a 96k \
  "Pedro Henrique - Apresentação-otimizado.mp4"
```

**Adições:**

- `-s 1280x720`: Redimensiona para 720p (mude conforme necessário)
- `-b:a 96k`: Áudio ainda menor

#### Opção 3: HandBrake GUI

Se preferir interface gráfica:

1. Baixe [HandBrake](https://handbrake.fr/)
2. Abra o vídeo
3. Presets: `General → Fast 720p30` ou `Very Fast 480p30`
4. Export

### 3. Formatos adicionais (Opcional para melhor compatibilidade)

Criar WebM para melhor compressão em navegadores modernos:

```bash
ffmpeg -i "Pedro Henrique - Apresentação.mp4" \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -c:a libopus \
  -b:a 128k \
  "Pedro Henrique - Apresentação.webm"
```

Depois atualize [components/About.tsx](components/About.tsx):

```tsx
<video ... >
    <source
        src="/videos/Pedro Henrique - Apresentação.webm"
        type="video/webm"
    />
    <source
        src="/videos/Pedro Henrique - Apresentação.mp4"
        type="video/mp4"
    />
    Seu navegador não suporta o elemento de vídeo.
</video>
```

## Otimizações Já Implementadas

### No Componente:

- ✅ `loading="lazy"` - Carrega apenas quando visível
- ✅ `preload="metadata"` - Carrega apenas metadados
- ✅ `controls` - Controles nativos (mais leve que player customizado)
- ✅ `object-cover` - Preenche espaço sem distorção

### Na Configuração (next.config.ts):

- ✅ Cache headers: `max-age=31536000` (1 ano)
- ✅ `immutable` - Não revalida o arquivo
- ✅ Content-Type correto

## Recomendações de Tamanho

| Duração | Tamanho Ideal | Qualidade |
| ------- | ------------- | --------- |
| < 30s   | 5-15 MB       | 720p      |
| 30-60s  | 15-30 MB      | 720p      |
| > 60s   | 30-50 MB      | 480p-720p |

## Verificar Tamanho Final

Depois de otimizar, verifique:

```bash
ls -lh public/videos/
```

## Dicas Adicionais

- **Thumbnail**: Adicione uma imagem de poster antes do vídeo carregar
- **Mobile**: Considere versão 480p para dispositivos móveis
- **Analytics**: Adicione rastreamento de reprodução se necessário
- **CDN**: Para produção, considere servir vídeos via CDN (Cloudflare, AWS CloudFront, etc)

---

**Próximo passo**: Coloque o vídeo em `public/videos/` e teste! 🎬
