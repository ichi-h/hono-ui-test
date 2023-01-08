import Head from "next/head";

import { getAllArticles } from "@/api/articles/getAllArticles";
import { ArticleSummary } from "@/core/entities/article";
import { WorksTemplate } from "@/features/works/template";
import { useFilteredArticles } from "@/features/works/useFilteredArticles";
import { WorksContext } from "@/features/works/worksContext";
import { ErrorResponse } from "@/types/response";
import { DefaultLayout } from "@/ui/components/layouts/default";
import { either } from "@/utils/either";

import type { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const response = await getAllArticles();
  const onLeft = () => [] as ArticleSummary[];
  const onRight = (articles: ArticleSummary[]) => articles;
  const articles = either<ErrorResponse, ArticleSummary[], ArticleSummary[]>(
    onLeft
  )(onRight)(response);
  return {
    props: { articles },
  };
};

const Home: NextPage<Props> = ({ articles }) => {
  const provider = useFilteredArticles(articles);
  return (
    <>
      <Head>
        <title>Works - ichi-h.com</title>
      </Head>
      <WorksContext.Provider value={provider}>
        <DefaultLayout>
          <WorksTemplate />
        </DefaultLayout>
      </WorksContext.Provider>
    </>
  );
};

export default Home;
