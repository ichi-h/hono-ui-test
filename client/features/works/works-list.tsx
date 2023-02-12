import { useState } from "react";

import { ArticleSummary } from "@/core/entities/article";
import { useCustomContext } from "@/lib/react/useCustomContext";
import { THEME } from "@/ui/base";
import { Radio, RadioItem } from "@/ui/parts/form/radio";
import { Grid } from "@/ui/parts/grid/grid";
import { Stack } from "@/ui/parts/stack/stack";
import { Text } from "@/ui/parts/text/text";

import { WorksCard } from "./works-card";
import { WorksContext } from "./worksContext";

export const WorksList = () => {
  const provider = useCustomContext(WorksContext);
  const { filteredArticles } = provider;

  const items: RadioItem<
    keyof Pick<ArticleSummary, "publishedAt" | "revisedAt">
  >[] = [
    {
      label: "作成日順",
      value: "publishedAt",
    },
    {
      label: "更新日順",
      value: "revisedAt",
    },
  ];
  const [order, setOrder] =
    useState<typeof items[number]["value"]>("publishedAt");

  const sortedArticles = filteredArticles.sort((a, b) => {
    if (order === "publishedAt") {
      const aDate = new Date(a.publishedAt);
      const bDate = new Date(b.publishedAt);
      return aDate > bDate ? -1 : 1;
    }
    if (order === "revisedAt") {
      const aDate = new Date(a.revisedAt);
      const bDate = new Date(b.revisedAt);
      return aDate > bDate ? -1 : 1;
    }
    return 0;
  });

  return (
    <Stack direction="column" gap="md">
      <Stack justify="end">
        <Radio name="order" items={items} value={order} onClick={setOrder} />
      </Stack>
      {sortedArticles.length === 0 && (
        <Text fontSize={THEME.size.lg} align="center">
          お探しのものは見つかりませんでした。
        </Text>
      )}
      {sortedArticles.length > 0 && (
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gridTemplateRows="1fr"
          gap={THEME.size.xl2}
          width="100%"
        >
          {sortedArticles.map((article) => (
            <WorksCard key={article.id} article={article} order={order} />
          ))}
        </Grid>
      )}
    </Stack>
  );
};
