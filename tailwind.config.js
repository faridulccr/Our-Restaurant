/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), require("flowbite/plugin")],
    // darkMode: 'class',
    daisyui: {
        // themes: ["light"],
        themes: false,
    },
};
