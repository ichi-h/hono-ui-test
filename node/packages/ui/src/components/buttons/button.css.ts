import { style, styleVariants } from "@vanilla-extract/css";

import * as s from "@/styles";

export const button = style([
  {
    background: "none",
    cursor: "pointer",
    ":hover": {
      ...s.bgStyleMap["mono.100"],
    },
    ":active": {
      ...s.bgStyleMap["mono.200"],
    },
  },
  s.fontColor["mono.900"],
  s.border["1"],
  s.borderStyle["solid"],
  s.borderColor["mono.900"],
  s.py["1"],
]);

export const buttonSize = styleVariants({
  xs: [s.fontSize[3], s.px[2]],
  sm: [s.fontSize[4], s.px[2]],
  md: [s.fontSize[5], s.px[3]],
  lg: [s.fontSize[6], s.px[4]],
  xl: [s.fontSize[7], s.px[5]],
});

export const buttonRound = styleVariants({
  default: [s.borderRadius[2]],
  rounded: [s.borderRadius["full"]],
});
