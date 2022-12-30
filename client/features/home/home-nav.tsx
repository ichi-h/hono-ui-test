import { useState } from "react";

import { useMounted } from "@/hooks/useMounted";
import Me from "@/public/assets/images/me.jpg";
import { THEME } from "@/ui/base";
import { Fade } from "@/ui/parts/animation/fade";
import { Box } from "@/ui/parts/box/box";
import { Avatar } from "@/ui/parts/image/avatar";
import { Stack } from "@/ui/parts/stack/stack";
import { Anchor } from "@/ui/parts/text/anchor";
import { Headline } from "@/ui/parts/text/headline";

import { DISPLAY_AT } from "./display-at";

export const HomeNav = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  useMounted(() => {
    setTimeout(() => setIsDisplay(true), DISPLAY_AT.NAV);
  });

  return (
    <Fade isDisplay={isDisplay} transition="1s">
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transformTranslate="translate(-50%, -50%)"
      >
        <Stack
          direction="column"
          justify="center"
          align="center"
          gap={THEME.size.md}
        >
          <Avatar
            src={Me.src}
            width="180px"
            height="180px"
            shadow={`10px 10px 30px ${THEME.color.mono["000"]}44`}
          />
          <Headline level={1} color={THEME.color.mono["900"]}>
            ichi-h
          </Headline>
          <Stack gap={THEME.size.md}>
            <Anchor
              type="link"
              to="/blog"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Blog
            </Anchor>
            <Anchor
              type="link"
              to="#"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Development
            </Anchor>
            <Anchor
              type="link"
              to="#"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Music
            </Anchor>
            <Anchor
              type="link"
              to="#"
              color={THEME.color.mono["900"]}
              fontSize={THEME.size.xl3}
            >
              Photograph
            </Anchor>
          </Stack>
        </Stack>
      </Box>
    </Fade>
  );
};