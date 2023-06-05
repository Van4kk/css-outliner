module.exports = {
    content: [
        "./src/index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    // darkMode: true,
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
        extend: {
            fontFamily: {
                'default': ['Roboto', 'sans-serif !important'],
                'bolder': ['Roboto Medium', 'sans-serif !important'],
                'code': ['Code', 'monospace'],
            },
            width: {
              '400': '400px',
              '280': '280px',
            },
            height: {
              '400': '400px',
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
            maxHeight: {
                'for-popup': 'calc(100vh - 3rem)',
            },
            minHeight: {
                '500': '500px'
            },
            colors: {
                blue: 'rgba(38, 77, 228, 1)',
                white: 'rgba(255, 255, 255, 1)',
                black: 'rgba(0, 0, 0, 1)',
                horizon: 'rgba(34, 36, 41, 1)', //background
                icons: 'rgba(0, 0, 0, 1)',

                //dark mode colors ↓
                'blue-darkmode': 'rgba(41, 101, 241, 1)',
                'black-darkmode': 'rgba(41, 101, 241, 1)',
                'light-blue-darkmode': 'rgba(41, 101, 241, 1)',
                'horizon-darkmode': 'rgba(235, 235, 235, 1)', //background on dark mode
                'icons-darkmode': 'rgba(188, 201, 219, 1)',
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
                    '0%': {transform: 'scale(1)'},
                    '20%': {transform: 'scale(1.1)'},
                    '100%': {transform: 'scale(0)'},
                }
            },
            animation: {
                'scale-z': 'scale-z',
                'circle': 'circle',
                'bounce-in': 'bounce-in',
                'show-modal': 'show-modal 0.7s ease-in-out',
                'hide-modal': 'hide-modal 0.6s ease-in-out both',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
