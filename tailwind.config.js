/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                brand: {
                    50: '#eefbff',
                    100: '#d8f4ff',
                    200: '#b5ecff',
                    300: '#7de0ff',
                    400: '#3cc9fd',
                    500: '#12adee',
                    600: '#068bc9',
                    700: '#0770a3',
                    800: '#0b5d87',
                    900: '#0f4e72',
                    950: '#0a334d',
                },
                accent: {
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                },
                dark: {
                    900: '#050a0e',
                    800: '#0a1220',
                    700: '#0d1a2d',
                    600: '#132238',
                    500: '#1a2d47',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(18,173,238,0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(18,173,238,0.7), 0 0 40px rgba(18,173,238,0.3)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
