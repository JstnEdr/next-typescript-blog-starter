import React from 'react';
import Header from '../../components/Header';
import Document from '../../posts/draft.mdx';

export const meta = {
  title: 'Next.js MDX Blog Kit',
  tags: ['Next.js', 'MDX'],
  layout: 'post',
  publishDate: '2011-01-01',
  modifiedDate: false,
  seoDescription: 'This is the home page.',
};

const H1 = (props) => <h1 style={{ color: 'tomato' }} {...props} />;
const InlineCode = (props) => (
  <code id="codes" style={{ color: 'purple' }} {...props} />
);
const Code = (props) => (
  <code id="codes" style={{ fontWeight: 600 }} {...props} />
);
const Pre = (props) => <pre id="codes" style={{ color: 'red' }} {...props} />;

const BlogList = ({ children }) => (
  <main>
    <Document
      components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }}
    />
  </main>
);

export default BlogList;
