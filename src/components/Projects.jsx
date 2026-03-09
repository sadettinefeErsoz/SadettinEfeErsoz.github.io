import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Eye, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

// Bento grid layout: projects[0] big, projects[1] medium, 3 small, 2 half-width
const BENTO_LAYOUTS = [
    { gridColumn: 'span 7', gridRow: 'span 2' },   // 0 large
    { gridColumn: 'span 5', gridRow: 'span 2' },   // 1 medium
    { gridColumn: 'span 4', gridRow: 'span 1' },   // 2 small
    { gridColumn: 'span 4', gridRow: 'span 1' },   // 3 small
    { gridColumn: 'span 4', gridRow: 'span 1' },   // 4 small
    { gridColumn: 'span 6', gridRow: 'span 1' },   // 5 half-width
    { gridColumn: 'span 6', gridRow: 'span 1' },   // 6 half-width
];

function ProjectCard({ project, layout, index, onClick }) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 12;
        const rotateY = (x / rect.width) * 12;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
        if (ref.current) {
            ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        }
    };

    const isLarge = index === 0;
    const isFullWidth = false;

    return (
        <motion.div
            ref={ref}
            layoutId={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            style={{ ...layout, transition: 'transform 0.15s ease-out', cursor: 'pointer' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(project)}
            className="group relative overflow-hidden rounded-2xl"
        >
            {/* Card background with image */}
            <div className="absolute inset-0">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,18,32,0.98) 0%, rgba(10,18,32,0.7) 50%, rgba(10,18,32,0.2) 100%)' }} />
            </div>

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: `1px solid ${project.borderColor}`, boxShadow: `inset 0 0 30px ${project.borderColor}20, 0 0 30px ${project.borderColor}20` }} />

            {/* Static border */}
            <div className="absolute inset-0 rounded-2xl"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }} />

            {/* Content */}
            <div className={`relative z-10 h-full flex flex-col justify-between ${isLarge ? 'p-8' : isFullWidth ? 'p-6 md:flex-row md:items-center' : 'p-5'}`}>
                <div className={isFullWidth ? 'flex-1' : ''}>
                    {/* Icon + Category */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">{project.icon}</span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium"
                                style={{ background: 'rgba(255,255,255,0.06)', color: '#888', border: '1px solid rgba(255,255,255,0.08)' }}>
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Commercial badge */}
                    {project.isCommercial && (
                        <div className="commercial-badge mb-3 inline-flex">
                            <Briefcase size={10} />
                            Bu Proje Ticarileşmiştir
                        </div>
                    )}

                    {/* Title */}
                    <h3 className={`font-bold text-white mb-2 leading-tight group-hover:text-brand-300 transition-colors duration-300 ${isLarge ? 'text-xl md:text-2xl' : 'text-base'}`}>
                        {project.title}
                    </h3>

                    {/* Short desc */}
                    <p className={`text-gray-400 text-xs leading-relaxed ${isLarge ? 'max-w-sm' : 'line-clamp-2'}`}>
                        {project.shortDesc}
                    </p>

                    {/* Tech tags (large cards only) */}
                    {(isLarge || isFullWidth) && (
                        <div className="flex flex-wrap gap-1.5 mt-4">
                            {project.technologies.slice(0, 4).map((tech) => (
                                <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="tech-badge">+{project.technologies.length - 4}</span>
                            )}
                        </div>
                    )}
                </div>

                {/* View button */}
                <div className={`flex items-center gap-3 mt-4 ${isFullWidth ? 'md:mt-0 md:ml-6 flex-shrink-0' : ''}`}>
                    <div className="flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0"
                        style={{ color: '#12adee' }}>
                        <Eye size={14} />
                        İncele
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative py-28 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-3">{'// 03. projeler'}</p>
                    <h2 className="section-heading">Öne Çıkan Projeler</h2>
                    <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
                        Her birine tıklayarak detayları, kullanılan teknolojileri ve görselleri inceleyebilirsiniz.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gridTemplateRows: 'auto',
                        gap: '1rem',
                    }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            style={{
                                ...BENTO_LAYOUTS[index],
                                minHeight: index === 0 ? '360px' : index === 1 ? '360px' : (index === 5 || index === 6) ? '180px' : '180px',
                            }}
                        >
                            <ProjectCard
                                project={project}
                                layout={{ height: '100%' }}
                                index={index}
                                onClick={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
