import Head from 'next/head'
import React, { ReactNode } from 'react'
import { CMS_NAME } from '../lib/constants'
import PostType from '../types/post'
import Container from './container'
import Header from './header'
import Layout from './layout'
import MdxPostBody from './mdx-post-body'
import PostHeader from './post-header'

type Props = {
  meta: PostType
  content: string
}

const MdxPostShell = ({ meta, content }: Props) => {
  return (
    <Layout preview={false}>
    <Container>
      <Header />
      <article className="mb-32">
        <Head>
          <title>
            {meta.title} | Next.js Blog Example with {CMS_NAME}
          </title>
          <meta property="og:image" content={meta.ogImage.url} />
        </Head>
        <PostHeader
          title={meta.title}
          coverImage={meta.coverImage}
          date={meta.date}
          author={meta.author}
        />
        <MdxPostBody content={content} />
      </article>
    </Container>
  </Layout>
  )
}

export default MdxPostShell
