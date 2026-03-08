import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hakkımda', href: '#about' },
    { label: 'Yetenekler', href: '#skills' },
    { label: 'Projeler', href: '#projects' },
    { label: 'İletişim', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('#hero');
    const clickedRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy: update active nav item based on which section is visible
    useEffect(() => {
        const sectionIds = navItems.map((item) => item.href.replace('#', ''));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !clickedRef.current) {
                        setActive(`#${id}`);
                    }
                },
                { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNav = (href) => {
        // Temporarily suppress scroll spy so click wins
        clickedRef.current = true;
        setActive(href);
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        // Re-enable scroll spy after animation settles
        setTimeout(() => { clickedRef.current = false; }, 900);
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'py-3 bg-dark-800/80 backdrop-blur-xl border-b border-brand-500/10 shadow-lg shadow-black/20'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #12adee, #8b5cf6)' }}>
                        <Code2 size={18} className="text-white" />
                    </div>

                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => handleNav(item.href)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active === item.href
                                ? 'text-brand-400'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {item.label}
                            {active === item.href && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className="absolute inset-0 rounded-lg"
                                    style={{ background: 'rgba(18, 173, 238, 0.1)', border: '1px solid rgba(18, 173, 238, 0.3)' }}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                    <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                        className="ml-4 btn-primary text-white px-5 py-2 rounded-lg text-sm font-semibold"
                        style={{ background: 'linear-gradient(135deg, #12adee, #8b5cf6)' }}>
                        <span>İletişime Geç</span>
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-dark-800/95 backdrop-blur-xl border-b border-brand-500/10"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNav(item.href)}
                                    className="text-left px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-brand-500/10 rounded-lg transition-all"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
