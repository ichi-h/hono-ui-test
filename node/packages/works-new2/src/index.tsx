import { Hono } from "hono";
import { Button } from "portfolio-ui-hono";

import { renderer } from "./renderer";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<Button>Hello!</Button>);
});

export default app;
