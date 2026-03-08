import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const socials = [
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/sadettinefeErsoz', color: '#fff' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/seersoz', color: '#0a66c2' },
    { icon: <Mail size={20} />, label: 'E-posta', href: 'mailto:sadettinefe.rsz@gmail.com', color: '#12adee' },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-28 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">{'// 04. iletişim'}</p>
                    <h2 className="section-heading">İletişime Geç</h2>
                </motion.div>

                {/* Info cards */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid sm:grid-cols-2 gap-4 mb-8"
                >
                    {[
                        { icon: <Mail size={18} />, label: 'E-posta', value: 'sadettinefe.rsz@gmail.com', color: '#12adee', href: 'mailto:sadettinefe.rsz@gmail.com' },
                        { icon: <MapPin size={18} />, label: 'Konum', value: 'Ankara, Türkiye', color: '#8b5cf6', href: null },
                    ].map((item) => (
                        <div key={item.label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}>
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} className="text-sm text-white font-medium hover:text-brand-400 transition-colors">{item.value}</a>
                                ) : (
                                    <p className="text-sm text-white font-medium">{item.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="glass-card rounded-2xl p-6"
                >
                    <p className="text-xs text-gray-500 mb-5 uppercase tracking-widest text-center">Sosyal Medya</p>
                    <div className="flex justify-center gap-4">
                        {socials.map((s) => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm font-medium"
                                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#aaa' }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = `${s.color}50`; e.currentTarget.style.background = `${s.color}10`; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                                {s.icon}
                                <span>{s.label}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}