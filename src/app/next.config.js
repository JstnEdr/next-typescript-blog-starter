const withMDX = require("@next/mdx")();

module.exports = withMDX({
  distDir: "../../dist/functions/next",
  pageExtensions: ["mdx", "jsx", "js"],
});

// const images = require("remark-images");
// const emoji = require("remark-emoji");

// const withMDX = require("@zeit/next-mdx")({
//   options: {
//     mdPlugins: [images, emoji]
//   }
// });

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "mdx"]
//   // distDir: "../../dist/functions/next"
// });
