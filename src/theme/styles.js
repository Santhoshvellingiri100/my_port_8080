const FontFamily01 = "Anton, sans-serif";
// const FontFamily02 = "Poppins, sans-serif";
const FontFamily02 = "Montserrat, sans-serif";
const FontHeroFamily = "Bungee Outline, sans-serif";

const FONTS = {
    hero01:{
        fontSize: '1.8rem', 
        fontWeight: '500',
        fontFamily:FontHeroFamily,
        lineHeight: '2.8rem', 
    },
    title01: {
        fontSize: '6rem', // Equivalent to 32px scaled up
        fontWeight: '700',
        fontFamily:FontFamily01,
        textTransform: "uppercase",
        letterSpacing:'.2rem',
        lineHeight: '6rem', // 1.2 times font size
    },
    title02: {
        fontSize: '3.2rem', // Equivalent to 28px scaled up
        fontWeight: '700',
        fontFamily:FontFamily01,
        textTransform: "uppercase",
        lineHeight: '3.4rem', // 1.2 times font size
    },
    heading01: {
        fontSize: '1.8rem', // Equivalent to 24px scaled up
        fontWeight: '500',
        fontFamily:FontFamily01,
        textTransform: "uppercase",
        lineHeight: '2.8rem', // 1.17 times font size
    },
    heading02: {
        fontSize: '1.8rem', // Equivalent to 20px scaled up
        fontWeight: '500',
        fontFamily:FontFamily01,
        textTransform: "uppercase",
        lineHeight: '2.4rem', // 1.2 times font size
    },
    subhead01: {
        fontSize: '1.2rem', // Equivalent to 18px scaled up
        fontWeight: '200',
        letterSpacing:'.05rem',
        fontFamily:FontFamily01,
        textTransform: "uppercase",
        lineHeight: '2.2rem', // 1.22 times font size
    },
    subhead02: {
        fontSize: '1rem', // Equivalent to 16px scaled up
        fontWeight: '100',
        letterSpacing:'.05rem',
        fontFamily:FontFamily01,
        textTransform: "uppercase",
        lineHeight: '1.9rem', // 1.19 times font size
    },
    label01: {
        fontSize: '1rem', // Slightly scaled up
        fontWeight: '600',
        fontFamily:FontFamily02,
        lineHeight: '1.7rem', // 1.21 times font size
    },
    label02: {
        fontSize: '0.9rem',
        fontWeight: '400', // Slightly scaled up
        fontFamily:FontFamily02,
        lineHeight: '1.5rem', // 1.25 times font size
    },
    smallText01: {
        fontSize: '0.8rem', // Slightly scaled up
        fontFamily:FontFamily02,
        lineHeight: '1.5rem', // 1.25 times font size
    },
    smallText02: {
        fontSize: '0.7rem', // Slightly scaled up
        fontFamily:FontFamily02,
        lineHeight: '1.3rem', // 1.3 times font size
    },
};

export default FONTS