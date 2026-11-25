// Type declarations for image imports used by the demo bundle (demo/entry.ts).
// Bundlers resolve these files at build time; TypeScript needs to be told they are modules.
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
