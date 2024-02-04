import { jsxRenderer } from "hono/jsx-renderer";
import styles from "portfolio-ui-hono/style.css?url";

export const renderer = jsxRenderer(
  ({ children, title }) => {
    console.log(styles);
    return (
      <html>
        <head>
          <link href={styles} rel="stylesheet" />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    );
  },
  {
    docType: true,
  },
);
