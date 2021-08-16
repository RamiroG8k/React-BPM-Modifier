const plugin = require("tailwindcss/plugin");
const selectorParser = require("postcss-selector-parser");

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'xs': '320px',
            },
            borderRadius: {
                '4xl': '2.5rem;',
                '5xl': '3.5rem;'
            }
        },
    },
    variants: {
        extend: {
            textColor: ['dark', 'responsive', 'hover', 'focus'],
            backgroundColor: ['dark', 'responsive', 'hover', 'focus']

        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        plugin(function ({ addVariant, prefix }) {
            addVariant('dark', ({ modifySelectors, separator }) => {
                modifySelectors(({ selector }) => {
                    return selectorParser((selectors) => {
                        selectors.walkClasses((sel) => {
                            sel.value = `dark${separator}${sel.value}`
                            sel.parent.insertBefore(sel, selectorParser().astSync('.scheme-dark '))
                        })
                    }).processSync(selector)
                })
            })
        })
    ],
}
