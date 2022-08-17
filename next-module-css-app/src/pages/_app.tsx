import "../globals.css";
import AppWrapper from "../widgets/AppWrapper/AppWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
