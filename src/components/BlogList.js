import React from "react";
import Header from "./layouts/Header";
import Document from "../posts/2019/20190531_my-journey.mdx";

const H1 = (props) => <h1 style={{ color: "tomato" }} {...props} />;
const InlineCode = (props) => (
  <code id="codes" style={{ color: "purple" }} {...props} />
);
const Code = (props) => (
  <code id="codes" style={{ fontWeight: 600 }} {...props} />
);
const Pre = (props) => <pre id="codes" style={{ color: "red" }} {...props} />;

const BlogList = ({ children }) => (
  <main>
    <Document
      components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }}
    />
  </main>
);

export default BlogList;
