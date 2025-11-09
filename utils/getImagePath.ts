export function getImagePath(path: string): string {
    const isProd = process.env.NODE_ENV === "production";
    const base = isProd ? "/Portfolio" : "";
    return `${base}${path.startsWith("/") ? path : `/${path}`}`;
  }