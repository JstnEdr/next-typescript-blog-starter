import * as React from "react";
import { AppShell } from "../components/AppShell";

export default () => (
  <React.Fragment>
    <p>Welcome to justineder.com - you know now how it works</p>
    <div className="yo">I'm red</div>
  </React.Fragment>
);

// import matter from "gray-matter";
// import Layout from "../components/Layout";
// import BlogList from "../components/BlogList";

// const Index = (props) => {
//   return (
//     <Layout
//       pathname="/"
//       siteTitle={props.title}
//       siteDescription={props.description}
//     >
//       <section>
//         <BlogList allBlogs={props.allBlogs} />
//       </section>
//     </Layout>
//   );
// };

// export default Index;

// export async function getStaticProps() {
//   const siteConfig = await import(`../data/config.json`);
//   //get posts & context from folder
//   const posts = ((context) => {
//     const keys = context.keys();
//     const values = keys.map(context);

//     console.log({ context });
//     console.log({ keys });
//     // console.log({ values });

//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = key
//         .replace(/^.*[\\\/]/, "")
//         .split(".")
//         .slice(0, -1)
//         .join(".");
//       const value = values[index];
//       // Parse yaml metadata & markdownbody in document
//       const document = matter(value.default);
//       return {
//         frontmatter: document.data,
//         markdownBody: document.content,
//         slug,
//       };
//     });

//     // console.log({ data });
//     return data;
//   })(require.context("../posts", true, /\.mdx$/));

//   return {
//     props: {
//       allBlogs: posts,
//       title: siteConfig.default.title,
//       description: siteConfig.default.description,
//     },
//   };
// }
