import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { emeraldRoyal: '#063f31', gold: '#d8ad55', ivory: '#fff7e6', night: '#030806' }, fontFamily: { display: ['var(--font-playfair)'], sans: ['var(--font-inter)'] }, boxShadow: { glow: '0 0 70px rgba(216,173,85,.32)' } } }, plugins: [] };
export default config;
