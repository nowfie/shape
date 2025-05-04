/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./navigation/**/*.{js,jsx,ts,tsx}",
        "./static_components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: {
                    default: '#EAC05F',
                    dark: '#FDD98D',
                    light: '#FDD98D'
                },
                secondary: {
                    default: '#F9B475',
                    dark: '#F9B475',
                    light: '#F9B475'
                },
                tertiary: {
                    default: '#2C2C2C',
                    dark: '#2C2C2C',
                    light: '#2C2C2C'
                },
                background: {
                    default: '#f5f5f5',
                    dark: '#020202',
                    light: '#f5f5f5'
                },
                foreground: {
                    default: '#EAEAEA',
                    dark: '#EAEAEA',
                    light: '#EAEAEA'
                },
                middleground: {
                    default: '#F9B475',
                    dark: '#F9B475',
                    light: '#F9B475'
                },
                extraground: {
                    default: '#ffffff',
                    dark: '#1B1C1C',
                    light: '#ffffff'
                },
                middleshade: {
                    default: '#FFF4EA',
                    dark: '#FFF4EA',
                    light: '#FFF4EA'
                },
                extrashade: {
                    default: '#2A2A2A',
                    dark: '#3A3A3A',
                    light: '#f5f5f5'
                },
                heading: {
                    default: '#121011',
                    dark: '#fff',
                    light: '#121011'
                },
                para: {
                    default: '#A3A2A3',
                    dark: '#A3A2A3',
                    light: '#A3A2A3'
                },

            },
            screens: {
                xxs: '320px',
                xs: '375px',
                sm: '425px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                xxl: '1440px'
            },
            boxShadow: {
                // minimal: {
                //     default: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                //     light: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                //     dark: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                // }
                minimal: 'rgba(99, 99, 99, 0.04) 0px 8px 24px 24px'
            }
        },
    },
    plugins: [],
}