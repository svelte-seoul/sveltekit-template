declare module '*.svg' {
  const content: string | null | undefined;
  export default content;
}

declare module "*.svelte" {
  const value: unknown;
  export default value;
}
