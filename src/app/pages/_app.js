import "../styles/global.css";
// import Container from "next";

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const NextApp = (props) => {
  const { Component, ...pageProps } = props;
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <div className="yo">yoyooyo</div>
    </React.Fragment>
  );
};

export default NextApp;
