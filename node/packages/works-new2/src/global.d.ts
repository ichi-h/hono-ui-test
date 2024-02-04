import {} from "hono";

declare module "*.css";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response;
  }
}
