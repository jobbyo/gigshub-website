/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mc: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontSize: {
        xxs: ["10px", "14px"],
      },
      colors: {
        "off-white": "#F3F3FF",
        purple: "#3C3C8E",
        "pale-purple": "#D0D0FF",
        white: "#ffffff",
        "dark-purple": "#1E1E53",
        "dark-grey": "#505050",
        "washed-purple": "#ADADFF",
        "light-purple": "#7575E5",
        "light-liliac": "#9797ED",
        "soft-liliac": "#E5E5FF",
        "dark-blue": "#2C2C70",
        "lime-green": "#D7F77C",
        "semi-dark-purple": "#4D4DAB",
      },
      padding: {
        button: "30px 10px",
        "30.89px": "30.89px",
        "9.67px": "9.67px",
      },
      boxShadow: {
        button: "0 0 5px rgba(0, 0, 0, 0.5)",
        "card-1": "0px 0px 100px 0px #ADADFFE5",
        "card-2": "0px 4px 10px 0px #8A8AFF4D",
        "custom-inner": "0px 10px 30px 0px rgba(0, 0, 0, 0.08) inset",
        "custom-drop": "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
        "homepage-icon": "0px 5px 10px 0px #7575E5",
      },
      width: {
        textContainer: "550px",
        textContainer2: "800px",
        textContainer3: "830px",
        shortTextContainer: "480px",
        headingContainer: "768px",
        headingMobileContainer: "340px",
        card: "246px",
        card1: "346px",
        card2: "200px",
        stepContainer: "528px",
        testimonialContainer: "834px",
        ctaBannerImage: "660px",
        heroImage: "500px",
        teamImage: "400px",
        socialMediaIcon: "24px",
        pricingButtons: "160px",
        pricingCard: "416px",
        accordion: "730px",
        contactUsForm: "100%",
        input: "300px",
        featuredBlogPost: "970px",
        blogPostCardVer: "470px",
        blogPostCardHor: "632px",
        blogPostCardHorImg: "300px",
        blogPostCardHorTxt: "300px",
        blogCategoriesMenu: "240px",
        arrowDownWhite: "32px",
        paragraph: "620px",
        engineIcon: "28.24px",
        vectorArrow: "8.47px",
        orbitechLogo: "63.55px",
        textBox: "303.82px",
        logoIcon: "30.36px",
        applyButton: "251.56px",
      },
      height: {
        heroContainer: "1289px",
        logo: "34px",
        imageContainer: "252px",
        card: "241px",
        testimonialContainer: "400px",
        heroImage: "500px",
        aboutUsBanner: "800px",
        contactUsMessage: "180px",
        blogPostCardVer: "300px",
        blogPostCardHorImg: "250px",
        arrowDownWhite: "32px",
        cardHeader: "56.45px",
        engineIcon: "28.24px",
        cardHero: "718px",
        vectorArrow: "21.17px",
        orbitechLogo: "63.51px",
        textBox: "169.36px",
        logoIcon: "28.27px",
        cardJobSummary: "683px",
        textBoxJobSummary: "303.63px",
        applyButton: "38.88px",
        cardHRMessage: "530px",
        textBoxHRMessage: "280px",
      },
      lineHeight: {
        textHero: "5.375rem",
        textHero2: "3.375rem",
        headingCardsContainer: "3.6rem",
        aboutUsBanner: "3rem",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        ctaBanner: "32px",
      },
      listStyleImage: {
        checkmark: 'url("assets/check-icon2.svg")',
      },
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [],
};
