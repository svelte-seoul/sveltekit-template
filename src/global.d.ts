/// <reference types="svelte" />

declare module '*.svg' {
  const content: string | null | undefined;
  export default content;
}
