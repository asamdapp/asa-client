import { withTranslateRoutes } from "next-translate-routes";
import type { AppProps } from "next/app";

// Fonts
import "assets/fonts/OpenSans/stylesheet.css";
import "assets/fonts/NotoSerif/stylesheet.css";

// Styles
import "styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withTranslateRoutes(App);
