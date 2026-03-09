import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Briefcase, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ProjectModal({ project, onClose }) {
    const [currentImg, setCurrentImg] = useState(0);

    if (!project) return null;

    const prevImg = () => setCurrentImg((v) => (v - 1 + project.images.length) % project.images.length);
    const nextImg = () => setCurrentImg((v) => (v + 1) % project.images.length);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="modal-overlay"
            >
                <motion.div
                    layoutId={`project-card-${project.id}`}
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
                    style={{
                        background: 'rgba(10, 18, 32, 0.95)',
                        border: `1px solid ${project.borderColor}`,
                        backdropFilter: 'blur(30px)',
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-xl text-gray-400 hover:text-white transition-all hover:bg-white/10"
                    >
                        <X size={20} />
                    </button>

                    {/* Image carousel */}
                    <div className="relative h-72 md:h-96 overflow-hidden rounded-t-2xl" style={{ background: '#060d1a' }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImg}
                                src={project.images[currentImg]}
                                alt={`${project.title} - görsel ${currentImg + 1}`}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35 }}
                                className="w-full h-full object-contain"
                            />
                        </AnimatePresence>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0"
                            style={{ background: 'linear-gradient(to top, rgba(10,18,32,0.6) 0%, transparent 40%)' }} />

                        {/* Navigation arrows */}
                        <button onClick={prevImg}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-sm">
                            <ChevronLeft size={18} />
                        </button>
                        <button onClick={nextImg}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-sm">
                            <ChevronRight size={18} />
                        </button>

                        {/* Image dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.images.map((_, i) => (
                                <button key={i} onClick={() => setCurrentImg(i)}
                                    className="w-2 h-2 rounded-full transition-all"
                                    style={{ background: i === currentImg ? '#12adee' : 'rgba(255,255,255,0.3)' }} />
                            ))}
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold"
                                style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#aaa', backdropFilter: 'blur(10px)' }}>
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        {/* Title + Commercial badge */}
                        <div className="flex flex-wrap items-start gap-3 mb-3">
                            <h2 className="text-xl md:text-2xl font-bold text-white flex-1">{project.title}</h2>
                            {project.isCommercial && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring' }}
                                    className="commercial-badge flex-shrink-0"
                                >
                                    <Briefcase size={12} />
                                    Bu Proje Ticarileşmiştir
                                </motion.div>
                            )}
                        </div>

                        {/* Long description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.longDesc}</p>

                        {/* Technologies */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Tag size={14} className="text-brand-400" />
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Kullanılan Teknolojiler</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Thumbnail strip */}
                        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                            {project.images.map((img, i) => (
                                <button key={i} onClick={() => setCurrentImg(i)}
                                    className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all"
                                    style={{ border: i === currentImg ? `2px solid #12adee` : '2px solid transparent', opacity: i === currentImg ? 1 : 0.5, background: '#060d1a' }}>
                                    <img src={img} alt="" className="w-full h-full object-contain" />
                                </button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex gap-3">
                            {!project.isCommercial && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                                    style={{ background: 'linear-gradient(135deg, #12adee, #8b5cf6)', boxShadow: '0 0 20px rgba(18,173,238,0.3)' }}
                                >
                                    <ExternalLink size={16} />
                                    Projeye Git
                                </a>
                            )}
                            <button onClick={onClose}
                                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                                style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#aaa', background: 'rgba(255,255,255,0.03)' }}>
                                Kapat
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
