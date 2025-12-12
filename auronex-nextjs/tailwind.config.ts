import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#050505', // Deep Black
                    light: '#1e293b',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#f8fafc', // Off-white
                    dark: '#94a3b8',
                },
                accent: {
                    DEFAULT: '#38bdf8', // Light blue accent
                    foreground: '#0f172a',
                },
                background: "#050505", // Deep Black Background
                foreground: "#f8fafc", // White text
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "glass": "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
            },
        },
    },
    plugins: [],
};
export default config;
