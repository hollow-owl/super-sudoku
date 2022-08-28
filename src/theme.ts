const THEME = {
  colors: {
    primary: "#F09A7A",
    foreground: "#FFFFFF",
    background: "#333333",
  },
  sudokuColors: {
    numberInitial: "#000000",
    numberHighlighted: "#69a1c2",
    cellHighlightNumber: "rgba(150, 150, 150, 0.3)",
    number: "#d57b59",
    note: "#69a1c2",
    background: "#FFFFFF",
    gridLine: "#eeeeee",
    gridLineBold: "#aaaaaa",
    cellBackgroundHover: "#eeeeee",
    cellBackgroundHighlight: "#eeeeee",
    cellBorderHighlight: "#F09A7A",
    cellBorderHighlightNote: "#84caf3",
    cellHighlight: "rgba(150, 150, 150, 0.2)",
    cellConflict: "rgba(240, 54, 22, 0.2)",
  },
  menuColors: {
    normal: "#F09A7A",
    alternate: "#ED8963",
    alternate2: "#d57b59",
    noteNormal: "#84caf3",
    noteAlternate: "#76B5DA",
    noteAlternate2: "#69a1c2",
  },
  fontFamily: `'Source Sans Pro', sans-serif`,
  fontSize: {
    base: 16,
    menu: 20,
    h1: 48,
  },
  boxShadow: "none",
  boxShadowSmall: "none",
  borderRadius: 2,
  lineHeight: 1.5,
  sizes: {
    header: 60,
  },
  widths: {
    hideCircleMenu: 700,
    maxMobile: 600,
    maxDesktop: 1200,
  },
};

export default THEME;
