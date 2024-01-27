import { ComponentProps } from "react";

import { COLOR } from "@/constants";

import { w, h } from "./icon.css";

type Props = {
  color?: keyof typeof COLOR;
} & ComponentProps<"svg">;

export const PageIcon = ({ color = "mono.900", ...props }: Props) => {
  return (
    <svg
      width={w[4]}
      height={h[4]}
      fill={COLOR[color]}
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
    </svg>
  );
};
