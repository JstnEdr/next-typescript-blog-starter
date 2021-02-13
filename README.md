# Personal Blog Starter
#### Next.js, Markdown, & TypeScript--hosted on Firebase (or Vercel)
This blog starter is for developers or anyone with editing [Markdown](https://www.markdownguide.org/) files and [git](https://git-scm.com/) to manage the files. This example extends Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source. 

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Get Started
**Option 1: Use Template And Deploy:**  
- makes a copy of this repo in your own Github account
- deploys to [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example)--the hosting platform built for Next.js

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/JstnEdr/next-typescript-blog-starter)


**Option 2:** Clone this repository if you have your own plan for deploying

or simply click the [Use This Template](https://github.com/JstnEdr/next-typescript-blog-starter/generate) button above. 

## How to create new posts
- Create an `.mdx` file in the `./src/_posts` directory 
- Set `draft: true` in the post metadata if you're not ready to publish
- Place locally referenced images in the `./public` folder
- Add html overrides and custom React components used to `./src/components/mdx/index.tsx`


## How to deploy


Your blog should be up and running on [http://localhost:3000](http://localhost:3000)

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

This blog-starter-typescript uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v1.4 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

Inspired by:
- [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- [typescript-blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript)
