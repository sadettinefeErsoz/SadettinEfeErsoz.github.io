import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const skillCategories = [

    {
        title: 'Backend',
        icon: '⚙️',
        color: '#8b5cf6',
        skills: [
            { name: 'Node.js', level: 92 },
            { name: 'Expres.js', level: 89 },
            { name: 'PHP', level: 85 },
            { name: 'REST API', level: 87 }
        ],
    },
    {
        title: 'Frontend',
        icon: '🎨',
        color: '#12adee',
        skills: [
            { name: 'React.js', level: 80 },
            { name: 'Tailwind CSS', level: 70 },
            { name: 'JavaScript (ES6+)', level: 85 },
            { name: 'HTML5 / CSS3', level: 85 },
        ],
    },

    {
        title: 'Veritabanı & Cloud',
        icon: '🗄️',
        color: '#10b981',
        skills: [
            { name: 'MongoDB', level: 97 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'MySQL', level: 92 },
            { name: 'Docker', level: 80 },
        ],
    },
    {
        title: 'Yazılım Mimarisi & Analiz',
        icon: '🧩',
        color: '#ec4899',
        skills: [
            { name: 'Yazılım Mimarisi', level: 80 },
            { name: 'Sistem Tasarımı', level: 78 },
            { name: 'Gereksinim Analizi', level: 82 },
            { name: 'Tasarım Desenleri', level: 75 },
        ],
    }
];

const techBadges = [
    'Node.js', 'Express.js', 'React.js', 'MongoDB', 'PHP', 'Docker',
    'PostgreSQL', 'REST API', 'Git', 'AWS', 'Tailwind CSS' , 'TypeScript'
];

function SkillBar({ name, level, color, delay }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm text-gray-300 font-medium">{name}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-dark-600 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: delay, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        boxShadow: `0 0 8px ${color}60`,
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative py-28 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">{'// 02. yetenekler'}</p>
                    <h2 className="section-heading">Teknik Yetenekler</h2>
                </motion.div>

                {/* Skill cards grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {skillCategories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: ci * 0.1, duration: 0.6 }}
                            className="glass-card rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{cat.icon}</span>
                                <h3 className="font-bold text-white">{cat.title}</h3>
                            </div>
                            {cat.skills.map((skill, si) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    color={cat.color}
                                    delay={ci * 0.1 + si * 0.08}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>

                {/* Tech badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card rounded-2xl p-8"
                >
                    <div className="flex items-center gap-2 mb-5">
                        <Cpu size={18} className="text-brand-400" />
                        <span className="text-sm font-semibold text-gray-300">Teknoloji Araç Kutusu</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techBadges.map((badge, i) => (
                            <motion.span
                                key={badge}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="tech-badge cursor-default"
                            >
                                {badge}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
