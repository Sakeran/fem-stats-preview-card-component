module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      violet: "hsl(277, 64%, 61%)",
      blue: {
        800: "hsl(244, 38%, 16%)",
        900: "hsl(233, 47%, 7%)",
      },
    },
    fontFamily: {
      lex: ["Lexend Deca", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
};
