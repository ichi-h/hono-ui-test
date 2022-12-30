import Head from "next/head";

import { readArticleBySlug } from "@/core/infrastructures/fs/articles";
import { mdToHtml } from "@/lib/remark/convert";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const article = readArticleBySlug("example");
  const parsedContent = await mdToHtml(article.content || "");
  return {
    props: { article, content: parsedContent },
  };
};

const Home: NextPage<Props> = ({ article, content }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>title: {article.title}</h1>
          <p>uid: {article.uid}</p>
          <p>slug: {article.slug}</p>
          <p>description: {article.description}</p>
          <p>thumbnail: {article.thumbnail}</p>
          <p>createdAt: {article.createdAt}</p>
          <p>publishedAt: {article.publishedAt}</p>
          <p>revisedAt: {article.revisedAt}</p>
          {article.unpublishedAt && (
            <p>unpublishedAt: {article.unpublishedAt}</p>
          )}
          <p>tags: {article.tags.join(", ")}</p>
          <p>isDraft: {article.isDraft ? "DRAFT" : "PUBLISHED"}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>
    </div>
  );
};

export default Home;
