import "../styles/global.css";
import { AppShell } from "../components/layouts/AppShell";
// import Container from "next";

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const NextApp = (props) => {
  const { Component, ...pageProps } = props;
  return (
    <AppShell>
      <Component {...pageProps} />
      <div className="yo">yoyooyo</div>
    </AppShell>
    // <Component {...pageProps} />
  );
};

export default NextApp;
