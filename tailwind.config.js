module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        fontSize: {
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '20px',
            '2xl': '24px',
            '3xl': '30px',
            '4xl': '36px',
            '5xl': '48px',
            '6xl': '60px',
            '7xl': '72px',
        },
        spacing: {
            px: '1px',
            0: '0',
            0.5: '2px',
            1: '4px',
            1.5: '6px',
            2: '8px',
            2.5: '10px',
            3: '12px',
            3.5: '14px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
            11: '44px',
            12: '48px',
            14: '56px',
            16: '64px',
            20: '80px',
            24: '96px',
            28: '112px',
            32: '128px',
            36: '144px',
            40: '160px',
            44: '176px',
            48: '192px',
            52: '208px',
            56: '224px',
            60: '240px',
            64: '256px',
            72: '288px',
            80: '320px',
            96: '384px',
        },
        borderRadius: {
            DEFAULT: '0.75rem',
        },
        extend: {
            fontFamily: {
                'default': ['Roboto', 'sans-serif !important'],
                'bolder': ['Roboto Medium', 'sans-serif !important'],
                'code': ['Code', 'monospace'],
            },
            boxShadow: {
              'error-modal-wrapper': '1px 2px 10px 0 rgba(0, 0, 0, 0.3)',
              'error-modal': '4px 8px 12px 0 rgba(0, 0, 0, 0.4)',
            },
            lineHeight: {
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '40px',
            },
            zIndex: {
              'full': 9999,
            },
            width: {
                '70': '280px',
                '85': '340px',
                '100': '400px',
                '4/5': '80%',
            },
            height: {
                '70': '280px',
                '85': '340px',
                '100': '400px',
                '4/5': '80%',
            },
            maxHeight: {
                'for-popup': 'calc(100vh - 2rem)',
            },
            minHeight: {
                'for-popup': 'calc(100vh - 6rem)',
            },
            margin: {
                '1/10': '10%',
            },
            colors: {
                //this will be dark mode values than will switch values with light mode
                primary: 'rgb(40, 241, 169, 1)',
                'primary-horizon': 'rgba(40, 241, 169,.1)',
                white: 'rgba(188, 201, 219, 1)',
                'white-hover': 'rgba(255,255,255,.08)',
                gray: 'rgba(188, 201, 219, 0.6)',
                horizon: 'rgb(26, 28, 31, 1)',
                'horizon-darker': 'rgb(22, 24, 27, 1)',
                'horizon-hover': 'rgb(34, 36, 41, 1)',
                black: 'rgba(0, 0, 0, 1)',

                //dark mode colors ↓
                'blue-darkmode': 'rgba(41, 101, 241, 1)',
                'black-darkmode': 'rgba(41, 101, 241, 1)',
                'light-blue-darkmode': 'rgba(41, 101, 241, 1)',
                'horizon-darkmode': 'rgba(235, 235, 235, 1)', //background on dark mode
                'icons-darkmode': 'rgba(188, 201, 219, 1)',

                'spinner': '#fff transparent transparent transparent',
            },
            keyframes: {
                'scale-to-z': {
                    from: { transform: 'scale(1)' },
                    to: { transform: 'scale(1.1)' }
                },
                'circle': {
                    '0%': { opacity: 0 },
                    '5%': { opacity: 1 },
                    to: { opacity: 0, transform: 'translate(-50%,-50%) scale(2.5)' }
                },
                'bounce-in': {
                    '0%': { transform: 'scale(0)' },
                    '50%': { transform: 'scale(1.15)' },
                    to: { transform: 'scale(1)' }
                },
                'rotate-load': {
                    '0%': { transform: 'rotate(0)' },
                    to: { transform: 'rotate(360deg)' }
                },
                'loading-circle': {
                    '0%': { 'stroke-dashoffset': 0 },
                    to: { 'stroke-dashoffset': -400 },
                },
                'show-modal': {
                    '0%': { transform: 'scale(0)' },
                    '60%': { transform: 'scale(1.1)' },
                    '80%': { transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' },
                },
                'hide-modal': {
                    '0%': { transform: 'scale(1)' },
                    '20%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(0)' },
                },
                'loading-spinner-animation': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'scale-z': 'scale-z',
                'circle': 'circle',
                'bounce-in': 'bounce-in',
                'show-modal': 'show-modal 0.7s ease-in-out',
                'hide-modal': 'hide-modal 0.6s ease-in-out both',
                'spinner': 'loading-spinner-animation cubic-bezier(0.5, 0, 0.5, 1) infinite',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
