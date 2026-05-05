/**
 * Generated avatar URLs (no real photos) — same style as team placeholders.
 */
export function uiAvatar(
  name: string,
  options?: { size?: number; background?: string }
): string {
  const size = options?.size ?? 256;
  const background = (options?.background ?? "1d4ed8").replace("#", "");
  const params = new URLSearchParams({
    name,
    background,
    color: "ffffff",
    size: String(size),
    bold: "true",
    "font-size": "0.35",
  });
  return `https://ui-avatars.com/api/?${params.toString()}`;
}

const TESTIMONIAL_BG = ["1d4ed8", "6366f1", "0d9488", "b45309", "7c3aed"];

function backgroundForName(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = name.charCodeAt(i) + ((h << 5) - h);
  }
  return TESTIMONIAL_BG[Math.abs(h) % TESTIMONIAL_BG.length];
}

export function testimonialAvatar(name: string, size = 128): string {
  return uiAvatar(name, { size, background: backgroundForName(name) });
}
