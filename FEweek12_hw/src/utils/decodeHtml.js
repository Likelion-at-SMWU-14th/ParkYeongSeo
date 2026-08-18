export function decodeHtml(text) {
  if (!text) return text;
  const el = document.createElement('textarea');
  el.innerHTML = text;
  return el.value;
}