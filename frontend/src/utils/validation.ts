export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string) {
  return /^[0-9]{9,11}$/.test(phone);
}

export function isEmpty(value: string) {
  return value.trim().length === 0;
}