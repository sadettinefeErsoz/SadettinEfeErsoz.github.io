import { Code2, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative border-t py-10 px-4 md:px-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #12adee, #8b5cf6)' }}>
                        <Code2 size={15} className="text-white" />
                    </div>

                </div>
                <p className="text-gray-600 text-xs flex items-center gap-1.5">
                    © {currentYear} Sadettin Efe Ersöz. Tüm hakları saklıdır.
                    <span className="text-gray-700">·</span>
                </p>
                <div className="flex gap-4">
                    {['#hero', '#about', '#skills', '#projects', '#contact'].map((href) => (
                        <button key={href} onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-gray-600 hover:text-gray-400 text-xs transition-colors capitalize">
                            {href.replace('#', '')}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
}
