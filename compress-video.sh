#!/bin/bash

# Script de otimização de vídeo para o projeto
# Use: ./compress-video.sh "seu-video.mp4"

if [ -z "$1" ]; then
    echo "Uso: ./compress-video.sh <arquivo-video>"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="${INPUT_FILE%.*}-otimizado.${INPUT_FILE##*.}"

if [ ! -f "$INPUT_FILE" ]; then
    echo "Erro: Arquivo '$INPUT_FILE' não encontrado"
    exit 1
fi

echo "🎬 Iniciando compressão de vídeo..."
echo "Arquivo de entrada: $INPUT_FILE"
echo "Arquivo de saída: $OUTPUT_FILE"
echo ""

# Compressão com FFmpeg
ffmpeg -i "$INPUT_FILE" \
    -c:v libx264 \
    -crf 28 \
    -preset slow \
    -c:a aac \
    -b:a 128k \
    "$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Vídeo comprimido com sucesso!"
    echo ""
    echo "Tamanho original: $(ls -lh "$INPUT_FILE" | awk '{print $5}')"
    echo "Tamanho comprimido: $(ls -lh "$OUTPUT_FILE" | awk '{print $5}')"
    echo ""
    echo "Próximo passo: Mova o arquivo para public/videos/"
    echo "  mv $OUTPUT_FILE public/videos/"
else
    echo "❌ Erro ao comprimir vídeo"
    exit 1
fi
