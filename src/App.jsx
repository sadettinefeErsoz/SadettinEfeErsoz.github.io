import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="relative min-h-screen bg-dark-900 font-sans">
            {/* Fixed animated canvas background */}
            <AnimatedBackground />

            {/* Ambient glow orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            {/* Main content above canvas */}
            <div className="relative z-10">
                <Navbar />

                <main>
                    <Hero />

                    {/* Section divider */}
                    <div className="h-px max-w-6xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(18,173,238,0.2), transparent)' }} />

                    <About />

                    <div className="h-px max-w-6xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }} />

                    <Skills />

                    <div className="h-px max-w-6xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(18,173,238,0.2), transparent)' }} />

                    <Projects />

                    <div className="h-px max-w-6xl mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }} />

                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    );
}
