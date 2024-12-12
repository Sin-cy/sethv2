/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#050816",
                secondary: "#aaa6c3",
                tertiary: "#151030",
                "black-100": "#100d25",
                "black-200": "#090325",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.jpeg')",
            },
            keyframes: {
                textRotate1: {
                    '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
                    '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
                },
                textRotate2: {
                    '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
                    '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
                },
                shimmer: {
                    "0%, 90%, 100%": {
                        "background-position": "calc(-100% - var(--shimmer-width)) 0",
                    },
                    "30%, 60%": {
                        "background-position": "calc(100% + var(--shimmer-width)) 0",
                    },
                },
                gradient: {
                    to: {
                        backgroundPosition: "var(--bg-size) 0",
                    },
                },
            },
            animation: {
                textRotate1: 'textRotate1 2.4s infinite alternate',
                textRotate2: 'textRotate2 2.4s infinite alternate',
                shimmer: "shimmer 8s infinite",
                gradient: "gradient 8s linear infinite",
            },
            fontSize: {
                title: '2rem',
                subtitle: '1.5rem',
            },

        },
    },
    plugins: [],
};
