'use client';

import { motion } from 'motion/react';
import { ArrowRight, Dumbbell, Activity, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/gym/1920/1080"
          alt="Gym Background"
          fill
          className="object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500"
              >
                <Activity className="mr-2 h-4 w-4" />
                Apresentação Profissional
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Fisioterapia, Musculação e <span className="text-orange-500">Bodybuilding Coaching</span>
              </h1>
              <p className="max-w-[600px] text-zinc-400 md:text-xl leading-relaxed">
                Sua jornada para um corpo mais forte, saudável e transformado começa aqui.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Agende Sua Sessão
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950/50 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-800 disabled:pointer-events-none disabled:opacity-50"
              >
                Saiba Mais
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-800/50">
              <div className="flex flex-col items-center text-center space-y-2">
                <Dumbbell className="h-6 w-6 text-orange-500" />
                <span className="text-sm font-medium text-zinc-300">Treino Personalizado</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <Activity className="h-6 w-6 text-orange-500" />
                <span className="text-sm font-medium text-zinc-300">Fisioterapia</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck className="h-6 w-6 text-orange-500" />
                <span className="text-sm font-medium text-zinc-300">Resultados Seguros</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto w-full max-w-[500px] aspect-[4/5] lg:aspect-square"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/20 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm">
              <Image
                src="/images/pic1.webp"
                alt="Treinador"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
