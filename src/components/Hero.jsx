import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const TITLES = [
    'Yazılım Mühendisi',
    'Full-Stack Geliştirici',
    'MERN Stack Developer'
];

function useTypewriter(words, speed = 80, pause = 1800) {
    const [displayed, setDisplayed] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex];
        let timeout;

        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
        }

        setDisplayed(current.substring(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, wordIndex, words, speed, pause]);

    return displayed;
}

const floatVariants = {
    initial: { opacity: 0, y: 60 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Hero() {
    const title = useTypewriter(TITLES);

    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
            {/* Gradient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(18,173,238,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
                {/* Badge */}
                <motion.div
                    custom={0}
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
                    style={{
                        background: 'rgba(18,173,238,0.08)',
                        border: '1px solid rgba(18,173,238,0.25)',
                        color: '#3cc9fd',
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                    Merhaba, Ben
                </motion.div>

                {/* Name */}
                <motion.h1
                    custom={1}
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
                >
                    <span className="text-white">Sadettin </span>
                    <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #12adee 0%, #8b5cf6 50%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Efe Ersöz
                    </span>
                </motion.h1>

                {/* Typewriter title */}
                <motion.div
                    custom={2}
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="text-xl md:text-2xl font-mono font-medium mb-6 h-8"
                >
                    <span className="text-gray-400">{'> '}</span>
                    <span className="neon-text typewriter-cursor">{title}</span>
                </motion.div>

                {/* Motto */}
                <motion.p
                    custom={3}
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-10"
                >
                    Multidisipliner öğrenme yaklaşımımla hem mühendislik hem de iş süreçlerini bir arada ele alarak projelerimin teknik geliştirme, pazarlama ve satış aşamalarında aktif rol aldım. Karmaşık problemleri analiz ederek farklı disiplinleri birleştiren ve her sektörde
                    <span className="text-brand-400 font-semibold"> katma değer </span>
                    üreten projeler üretiyorum.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    custom={4}
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="flex flex-wrap items-center justify-center gap-4 mb-14"
                >
                    <button
                        onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="relative overflow-hidden px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                            background: 'linear-gradient(135deg, #12adee, #8b5cf6)',
                            boxShadow: '0 0 30px rgba(18,173,238,0.3)',
                        }}
                    >
                        Projeleri İncele
                    </button>
                    <a
                        href="/info/cv/Sadettin_Efe_ERSOZ_CV-TR.pdf"
                        download="Sadettin_Efe_ERSOZ_CV-TR.pdf"
                        className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                        style={{
                            border: '1px solid rgba(18,173,238,0.3)',
                            color: '#12adee',
                            background: 'rgba(18,173,238,0.05)',
                        }}
                    >
                        <Download size={16} />
                        CV İndir
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    custom={5}
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    className="flex items-center justify-center gap-4 mb-16"
                >
                    {[
                        { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
                        { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                        { icon: <Mail size={20} />, href: 'mailto:info@efeersoz.com', label: 'E-posta' },
                    ].map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            title={s.label}
                            className="p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                            style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}
                        >
                            {s.icon}
                        </a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    onClick={scrollToAbout}
                    className="text-gray-500 hover:text-brand-400 transition-colors"
                >
                    <ArrowDown size={24} />
                </motion.button>
            </div>
        </section>
    );
}
