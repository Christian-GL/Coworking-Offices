/// <reference types="vite/client" />

// src/global.d.ts
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
