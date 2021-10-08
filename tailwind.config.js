module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1140px"
      }
    },
    extend: {
      colors: {
        'primary': '#463DB2',
        'primary-dark': '#0A0616',
        'secondary': '#CE3434',
        'highlight': '#601414',
        'gradient-1': '#0C0D38',
        'gradient-2': '#1b1e61',
      },
      fontFamily: {
        alpha: ['Alpha', 'sans-serif'],
        neub: ['NeubauGrotesk', 'sans-serif'],
        merriweather: ['Merriweather', 'sans-serif'],
      },
      fontSize: {
        '13xl': '13rem',
      },
      backgroundImage: {
        'hero-sky': "url('/static/img/sky-min.png')",
        'hero-mnt': "url('/static/img/midground-min.png')",
        'hero-bear': "url('/static/img/foreground-bottom.png')",
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
