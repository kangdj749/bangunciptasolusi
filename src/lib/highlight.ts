export function highlight(text: string, keyword: string) {

  if (!keyword) return text;

  const regex = new RegExp(`(${keyword})`, "gi");

  return text.replace(
    regex,
    `<mark class="bg-[rgb(var(--color-primary))]/10 text-[rgb(var(--color-primary))]">$1</mark>`
  );
}