import "../styles/global.css";
import { AppShell } from "../components/AppShell";
// import Container from "next";

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const NextApp = (props) => {
  const { Component, ...pageProps } = props;
  return (
    <AppShell>
      {/* <Component title="Here?" description="ummmm" {...pageProps} /> */}
      <Component {...pageProps} />
    </AppShell>
  );
};

export default NextApp;
