import Head from "next/head";

import { COPY_WRITE } from "@/constants/copyright";
import { THEME } from "@/ui/base";
import { DefaultLayout } from "@/ui/components/layouts";
import { Box } from "@/ui/parts/box/box";
import { Stack } from "@/ui/parts/stack/stack";
import { Headline } from "@/ui/parts/text/headline";
import { Link } from "@/ui/parts/text/link";
import { Text } from "@/ui/parts/text/text";

import type { NextPageWithLayout } from "next";

const Custom404: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Page not found - ichi-h.com</title>
      </Head>
      <Stack
        direction="column"
        justify="center"
        align="center"
        height="100vh"
        gap="md"
      >
        <Headline level={1} color={THEME.color.mono["900"]}>
          Page Not Found
        </Headline>
        <Text color={THEME.color.mono["900"]}>
          お探しのページは見つかりませんでした。
        </Text>
        <Link to="/" color={THEME.color.mono["900"]} fontSize={THEME.size.md}>
          ホームに戻る
        </Link>
        <Box
          type="footer"
          position="absolute"
          bottom={THEME.size.md}
          width="100%"
          align="center"
        >
          <Text color={THEME.color.mono["900"]}>{COPY_WRITE}</Text>
        </Box>
      </Stack>
    </>
  );
};

Custom404.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Custom404;
