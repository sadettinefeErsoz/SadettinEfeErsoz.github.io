import { motion } from 'framer-motion';
import { GraduationCap, Handshake, CheckCircle, MapPin, Calendar, Briefcase, FlaskConical, Code2 } from 'lucide-react';

const timelineItems = [
    {
        year: 'Mart 2026 - Günümüz',
        title: 'Arch of Sigma',
        org: 'Intern',
        location: 'Ankara, Türkiye',
        icon: <Briefcase size={18} />,
        color: '#8b5cf6',
        tags: ['Python', 'AutoCAD', 'Blender'],
    },
    {
        year: '2025',
        title: 'Canfam HairSalon',
        org: 'Product Developer',
        location: 'Vancouver, Kanada',
        icon: <Code2 size={18} />,
        color: '#ec4899',
        tags: [],
    },
    {
        year: '2025',
        title: 'Aker Teknik Hırdavat',
        org: 'Product Developer',
        location: 'Gaziantep, Türkiye',
        icon: <Code2 size={18} />,
        color: '#f97316',
        tags: [],
    },
    {
        year: '2024',
        title: 'Edevat Market',
        org: 'Product Developer',
        location: 'Gaziantep, Türkiye',
        icon: <Code2 size={18} />,
        color: '#10b981',
        tags: [],
    },
    {
        year: '2023 – Günümüz',
        title: 'Yazılım Mühendisliği',
        org: 'Ankara Üniversitesi',
        location: 'Ankara, Türkiye',
        icon: <GraduationCap size={18} />,
        color: '#12adee',
        tags: [],
    },
];

const stats = [
    { label: 'Tamamlanan Proje', value: '10+', icon: <CheckCircle size={20} /> },
    { label: 'Ticari Proje', value: '5', icon: <Handshake size={20} /> },
    { label: 'Ar-Ge Projesi', value: '2', icon: <FlaskConical size={20} /> },
    { label: 'GANO', value: '3.31', icon: <GraduationCap size={20} /> },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
    return (
        <section id="about" className="relative py-28 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">{'// 01. hakkımda'}</p>
                    <h2 className="section-heading">Hakkımda & Eğitim</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Bio + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Profile card */}
                        <div className="glass-card rounded-2xl p-8 mb-8">
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-20 h-20 rounded-2xl flex-shrink-0 overflow-hidden"
                                    style={{ border: '1px solid rgba(18,173,238,0.3)' }}>
                                    <img
                                        src="/info/images-photo/1760275649141.jpg"
                                        alt="Sadettin Efe Ersöz"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Sadettin Efe Ersöz</h3>
                                    <p className="text-brand-400 font-medium text-sm">Yazılım Mühendisi</p>
                                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                                        <MapPin size={11} /> Ankara, Türkiye
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Web tabanlı çözümlerden otonom sürüş ve sensör füzyonu gibi ileri mühendislik uygulamalarına uzanan proje
                                çeşitliliğim farklı sektörlerin dinamiklerine hızla adapte olma yeteneğimi ve multidisipliner öğrenme tutkumu kanıtlamaktadır. Akademik sürecimde alan dışı sektörlerde edindiğim iş tecrübeleriyle operasyonel yetkinliklerimi geliştirirken, teknik projelerimin pazarlama ve satış süreçlerini de bizzat yöneterek ticari vizyonumu güçlendirdim. Karmaşık problemleri çözme motivasyonuyla her alanda katma değer yaratmayı hedefliyorum.
                            </p>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card rounded-xl p-5 text-center hover:border-brand-500/30 transition-all duration-300"
                                >
                                    <div className="text-brand-400 flex justify-center mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-black text-white mb-1" style={{
                                        background: 'linear-gradient(135deg, #12adee, #8b5cf6)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}>{stat.value}</div>
                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Timeline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute left-5 top-5 bottom-5 w-px"
                            style={{ background: 'linear-gradient(to bottom, #12adee, #8b5cf6, transparent)' }} />

                        <div className="space-y-4">
                            {timelineItems.map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="relative pl-14">
                                    {/* Icon dot */}
                                    <div className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: `${item.color}22`,
                                            border: `1px solid ${item.color}40`,
                                            color: item.color,
                                        }}>
                                        {item.icon}
                                    </div>

                                    <div className="glass-card rounded-xl p-5 hover:border-brand-500/30 transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                                                <Calendar size={11} /> {item.year}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}30` }}>{item.org}</span>
                                            {item.location && (
                                                <span className="text-gray-500 text-xs flex items-center gap-1">
                                                    <MapPin size={10} /> {item.location}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span key={tag} className="tech-badge">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
