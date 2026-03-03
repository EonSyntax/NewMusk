export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")   // remove special chars
    .replace(/\s+/g, "-")       // spaces → dash
    .replace(/--+/g, "-");      // remove duplicate dashes
}