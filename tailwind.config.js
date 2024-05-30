/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "btm-dsktp": "url('/public/images/bg-pattern-bottom-desktop.svg')",
        "top-dsktp": "url('/public/images/bg-pattern-top-desktop.svg')",
        "btm-mobile": "url('/public/images/bg-pattern-bottom-mobile.svg')",
        "top-mobile": "url('/public/images/bg-pattern-top-mobile.svg')",
      },
      colors: {
        "dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        body: "15px",
      },
            screens: {
        'min-1350': '1350px',
      },

    },
  },
  plugins: [],
};
