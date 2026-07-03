export function formatPrice(
  value: number,
  currency = "USD",
  locale = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatRating(value: number) {
  return value.toFixed(1);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}

export function truncate(text: string, length = 100) {
  if (text.length <= length) return text;

  return `${text.slice(0, length)}...`;
}