/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
    /* farvepalette */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "rgba(255, 157, 154, 1)",
        100: "rgba(255, 123, 118, 1)",
        200: "rgba(255, 89, 83, 1)",
        300: "rgba(255, 65, 58, 1)",
        400: "rgba(251, 41, 41, 1)",
        500: "rgba(233, 29, 0, 1)",
        600: "rgba(211, 26, 0, 1)",
        700: "rgba(191, 24, 0, 1)",
        800: "rgba(179, 28, 6, 1)",
        900: "rgba(166, 21, 0, 1)",
        1000: "rgba(144, 18, 0, 1)",
        1100: "rgba(122, 15, 0, 1)",
        1200: "rgba(100, 13, 0, 1)",
      },
      blue: {
        50: "rgba(241, 244, 251, 1)",
        100: "rgba(212, 222, 243, 1)",
        200: "rgba(184, 201, 235, 1)",
        300: "rgba(155, 179, 227, 1)",
        400: "rgba(127, 157, 219, 1)",
        500: "rgba(98, 135, 211, 1)",
        600: "rgba(73, 116, 204, 1)",
        700: "rgba(57, 104, 200, 1)",
        800: "rgba(52, 96, 185, 1)",
        900: "rgba(44, 81, 156, 1)",
        1000: "rgba(36, 66, 128, 1)",
        1100: "rgba(28, 51, 100, 1)",
        1200: "rgba(20, 37, 71, 1)",
      },

      beige: {
        50: "rgba(255, 255, 255, 1)",
        100: "rgba(254, 253, 252, 1)",
        200: "rgba(253, 249, 246, 1)",
        300: "rgba(251, 245, 238, 1)",
        400: "rgba(248, 238, 228, 1)",
        500: "rgba(244, 227, 211, 1)",
        600: "rgba(239, 216, 193, 1)",
        700: "rgba(234, 205, 176, 1)",
        800: "rgba(230, 194, 158, 1)",
        900: "rgba(225, 183, 141, 1)",
        1000: "rgba(221, 172, 123, 1)",
        1100: "rgba(216, 161, 105, 1)",
        1200: "rgba(212, 150, 88, 1)",
      },

      green: {
        50: "rgba(227, 232, 224, 1)",
        100: "rgba(209, 216, 203, 1)",
        200: "rgba(190, 201, 182, 1)",
        300: "rgba(172, 185, 161, 1)",
        400: "rgba(153, 170, 140, 1)",
        500: "rgba(135, 154, 119, 1)",
        600: "rgba(117, 136, 101, 1)",
        700: "rgba(97, 113, 84, 1)",
        800: "rgba(87, 102, 76, 1)",
        900: "rgba(81, 94, 70, 1)",
        1000: "rgba(63, 73, 54, 1)",
        1100: "rgba(45, 52, 39, 1)",
        1200: "rgba(27, 31, 23, 1)",
      },

      white: "#fff",
      black: "#000",
    },

    /* spacing  */
    spacing: {
      none: "0px",
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "160px",
      "6xl": "208px",
      "7xl": "320px",
      "8xl": "360px",
      "9xl": "424px",
    },

    /*  fonte  */
    fontFamily: {
      sans: ["eds-market-narrow-slant", "serif"],
    },

    /* typografiske hierarki */
        fontSize: {
          konsultativDesk: ["1rem", { lineHeight: "1.2rem" }],
          bodyDesk: ["1.125rem", { lineHeight: "1.5rem" }],
          baseDesk: ["1.25rem", { lineHeight: "1.8rem" }],
smallDesk: ["1.777rem", { lineHeight: "2.2rem" }],
smallMediumDesk: ["2.369rem", { lineHeight: "2.7rem" }],
mediumDesk: ["3.157rem", { lineHeight: "3.7rem" }],
mediumLargeDesk: ["4.209rem", { lineHeight: "4.2rem" }],
largeDesk: ["5.61rem", { lineHeight: "5.4rem"}],
xlargeDesk: ["6rem", { lineHeight: "6.3rem" }],

konsultativMobile: ["0.8rem", { lineHeight: "1rem" }],
bodyMobile: ["1rem", { lineHeight: "1.5rem" }],
baseMobile: ["1.2rem", { lineHeight: "1.8rem" }],
smallMobile: ["1.44rem", { lineHeight: "2rem" }],
smallMediumMobile: ["1.728rem", { lineHeight: "2.5rem" }],
mediumMobile: ["2.074rem", { lineHeight: "3rem" }],
mediumLargeMobile: ["2.488rem", { lineHeight: "3.3rem" }],
largeMobile: ["2.986rem", { lineHeight: "3.5rem" }],
xlargeMobile: ["6rem", { lineHeight: "6rem" }],
    },

    /* fontvægt-hierarki */
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "500",
      bold: "600",
      extrabold: "700",
    },

    /* Borders - borderstørrelser  */
    borderWidth: {
      DEFAULT: "1px",
      none: "0px",
      xxs: "1px",
      xs: "2px",
      sm: "3px",
      md: "4px",
      lg: "5px",
      xl: "6px",
      "2xl": "7px",
      "3xl": "8px",
      "4xl": "9px",
    },

   

    extend: {
      /* Border radius  */
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
        "border_radius-xs": "7px",
        "border_radius-sm": "14px",
        "border_radius-md": "21.5px",
        "border_radius-lg": "30px",
        "border_radius-xl": "49px",
        "border_radius-2xl": "79px",
        "border_radius-3xl": "100px",
      },
       /* Box shadows */
      boxShadow: {
        long: "8px 10px 8px 0px rgba(68, 81, 57, 0.54)",
        short: "8px 10px 8px 0px rgba(68, 81, 57, 0.54)",
        button: "4px 6px 4px 0px rgba(31, 37, 26, 0.54)",
        hover: "8px 10px 8px 0px rgba(98, 135, 211, 0.65)",
      },
    },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
