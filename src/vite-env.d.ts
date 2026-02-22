/* eslint-env browser */
declare module '*.module.css' {
  const content: Record<string, string>
  export default content
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export {}
