interface ImportMeta {
  env: {
    readonly DEV: string;
    readonly PROD: string;
  }
}

declare module 'postcss-custom-media' {
  const content: unknown;
  export = content
}
