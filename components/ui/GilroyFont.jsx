import { Global } from "@emotion/react";

export const GilroyFont = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Thin.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Light.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Regular.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Medium.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Semibold.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Semibold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Bold.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Extrabold.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Extrabold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy/Gilroy-Heavy.woff2') format('woff2'),
            url('/fonts/Gilroy/Gilroy-Heavy.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    `}
  />
);
