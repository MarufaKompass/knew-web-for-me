/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      colors: {
        "custom-base-head": "#465765",
        "paragraph-base": "#757575",
      },
      screens: {
        xs: "450px",
        // => @media (min-width: 400px) { ... }
        mobile: {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px) { ... }

        tablet: {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px) { ... }

        laptop: {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px) { ... }

        desktop: {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px) { ... }

        '2xl': {'min': '1536px'},
         // => @media (min-width: 1536px) { ... }
        // "3xl": "1920px",
        // // => @media (min-width: 1536px) { ... }
      },
      fontSize: {
        xs: ".9rem",
        sm: ".75rem",
        tiny: ".9rem",
        tabstext:'.8rem',
        tabsLgtext:'1rem',
        smHeading:'2rem',
        base: "1rem",
        lg: ".9rem",
        "heading-md": "2rem",
        paragraph: "1.1rem",
        xl: "2.4rem",
        "2xl": "1.6rem",
        "3xl": "1.1rem",
        "4xl": "1.4rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "InvoFontP":'.8rem',
        "InvoFontH":'1rem',
      },
      margin: {
        // side: "32px",
        // '2xl': "12rem",
        //  xl: "8rem",
        //  lg:'3.5rem',
        //  md:'2.4rem',
        //  sm:'1.3rem'
            
      },

      boxShadow: {
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        boxShadow:
          "0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1",

          md: '0 4px 6px -1px rgba(18, 169, 178, 0.1), 0 2px 4px -2px rgba(18, 169, 178, 0.1)',
      },

      fontWeight: {
        normal: 350,
      },
      
    },
  },

  daisyui: {
    themes: [
      {
        Kompass: {
          primary: "#12a9b2",
          secondary: "#149999",
          accent: "#3A4256",
          neutral: "#647393",
          "base-100": "#ffffff",
          info: "#0C1E21",
          success: "#3A4256",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
