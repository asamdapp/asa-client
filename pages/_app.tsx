import { withTranslateRoutes } from "next-translate-routes";
import type { AppProps } from "next/app";

import NextProgress from "next-progress";
import { setConfiguration } from "react-grid-system";
import { ThemeProvider } from "next-themes";

// Fonts
import "assets/fonts/OpenSans/stylesheet.css";
import "assets/fonts/NotoSerif/stylesheet.css";

// Styles
import "styles/globals.scss";

setConfiguration({ maxScreenClass: "xxl" });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <NextProgress color="#B91F2E" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default withTranslateRoutes(App);
