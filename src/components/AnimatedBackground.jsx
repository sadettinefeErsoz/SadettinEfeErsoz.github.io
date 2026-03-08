import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', resize);

        // Nodes
        const NODE_COUNT = 50;
        const nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
        }));

        // Code lines (floating)
        const codeSnippets = [
            'const api = express()',
            'db.connect(URI)',
            'JWT.verify(token)',
            'await Model.find({})',
            'socket.emit("data")',
            'npm install',
            'git commit -m "feat"',
            'docker build .',
            'SELECT * FROM users',
            'axios.get("/api")',
            'useState(null)',
            'useEffect(()=>{})',
            'class Node extends',
            'async/await fetch',
            'ML.predict(data)',
            'iptables -A INPUT',
            'pip install torch',
            'gradient.descent()',
        ];

        const codeLines = Array.from({ length: 12 }, (_, i) => ({
            text: codeSnippets[i % codeSnippets.length],
            x: Math.random() * width,
            y: Math.random() * height,
            opacity: Math.random() * 0.12 + 0.03,
            speed: Math.random() * 0.3 + 0.1,
            fontSize: Math.floor(Math.random() * 4) + 9,
        }));

        let tick = 0;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            tick++;

            // Draw code lines
            ctx.fontFamily = 'JetBrains Mono, monospace';
            codeLines.forEach((line) => {
                line.y -= line.speed;
                if (line.y < -30) {
                    line.y = height + 30;
                    line.x = Math.random() * width;
                    line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                }
                ctx.save();
                ctx.globalAlpha = line.opacity;
                ctx.fillStyle = Math.random() > 0.7 ? '#12adee' : '#8b5cf6';
                ctx.font = `${line.fontSize}px "JetBrains Mono", monospace`;
                ctx.fillText(line.text, line.x, line.y);
                ctx.restore();
            });

            // Update and draw nodes
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(18, 173, 238, ${node.opacity})`;
                ctx.fill();
            });

            // Draw connections
            const CONNECT_DIST = 100;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DIST) {
                        const alpha = (1 - dist / CONNECT_DIST) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(18, 173, 238, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="particle-canvas"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        />
    );
}
