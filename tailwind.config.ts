import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'scale-in-bounce': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(5px) rotate(-1deg)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.1', transform: 'scale(1)' },
					'50%': { opacity: '0.3', transform: 'scale(1.1)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'dna-helix': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(8px) translateY(-2px)' },
					'50%': { transform: 'translateX(0) translateY(-4px)' },
					'75%': { transform: 'translateX(-8px) translateY(-2px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'dna-helix-reverse': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(-8px) translateY(-2px)' },
					'50%': { transform: 'translateX(0) translateY(-4px)' },
					'75%': { transform: 'translateX(8px) translateY(-2px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--primary))' },
					'50%': { boxShadow: '0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-left': 'fade-in-left 0.8s ease-out',
				'fade-in-right': 'fade-in-right 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'scale-in-bounce': 'scale-in-bounce 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'dna-helix': 'dna-helix 3s ease-in-out infinite',
				'dna-helix-reverse': 'dna-helix-reverse 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'medical': 'var(--shadow-medical)',
				'card-soft': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
