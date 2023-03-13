import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: "Stage Grotesk",
    body: "Stage Grotesk",
  },
  styles: {
    global: {
      html: {
        fontFamily: "Gilroy, serif",
        fontSize: "14px",
      },
      body: {
        fontFamily: "Stage Grotesk, sans-serif",
        bg: "#121417",
      },
      "::selection": {
        background: "rgba(255,255,255,0.05)",
        color: "#fff",
      },
    },
  },
  breakpoints,
  components: {
    Breadcrumb: {
      parts: ["link"],
      baseStyle: () => {
        return {
          link: {
            fontWeight: 600,
            color: "#818E9C",
            '&[aria-current="page"]': {
              color: "#EEF0F2",
              textDecoration: "none",
              cursor: "text",
            },
          },
        };
      },
    },
    Modal: {
      parts: ["dialog"],
      baseStyle: {
        dialog: {
          bg: "#22262B",
          borderRadius: "xl",
        },
      },
    },
    Button: {
      sizes: {
        lg: {
          height: "48px",
        },
      },
      variants: {
        primary: {
          bg: "#FFAE00",
          color: "#131519",
          _hover: {
            bg: "#FF9933",
            color: "#131519",
          },
          _focus: {
            bg: "#FF7F00",
            color: "#131519",
          },
        },
        light: {
          bg: "#EEF0F2",
          color: "#16191D",
          _hover: {
            bg: "#c6ccd2",
            color: "#16191D",
          },
          _focus: {
            bg: "#c6ccd2",
            color: "#16191D",
          },
        },
        violet: {
          minH: "40px",
          fontFamily: "Gilroy",
          bg: "#7b3fe4",
          color: "#fff",
          _hover: {
            transform: "scale(1.025)",
          },
          _active: {
            transform: "scale(0.95)",
          },
        },
      },
    },
    Menu: {
      parts: ["list", "item"],
      baseStyle: {
        list: {
          bg: "#2F353C",
          borderColor: "#2F353C",
        },
        item: {
          color: "#9DA6B4",
          _hover: {
            bg: "#363D45",
          },
        },
      },
    },

  },
  config,
});
export default theme;
