import { styled } from "linaria/react";

import { THEME } from "@/ui/base";

interface Props {
  children?: React.ReactNode;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  mdGridTemplateColumns?: string;
  smGridTemplateColumns?: string;
  gap?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props: Props) =>
    props.gridTemplateColumns || "initial"};
  grid-template-rows: ${(props: Props) => props.gridTemplateRows || "initial"};
  gap: ${(props: Props) => props.gap || "initial"};
  width: ${(props: Props) => props.width || "initial"};
  height: ${(props: Props) => props.height || "initial"};
  max-width: ${(props: Props) => props.maxWidth || "initial"};
  max-height: ${(props: Props) => props.maxHeight || "initial"};
  min-width: ${(props: Props) => props.minWidth || "initial"};
  min-height: ${(props: Props) => props.minHeight || "initial"};
  @media only screen and (max-width: ${THEME.breakPoint.md}px) {
    grid-template-columns: ${(props: Props) =>
      props.mdGridTemplateColumns || props.gridTemplateColumns || "initial"};
  }
  @media only screen and (max-width: ${THEME.breakPoint.sm}px) {
    grid-template-columns: ${(props: Props) =>
      props.smGridTemplateColumns || props.gridTemplateColumns || "initial"};
  }
`;
