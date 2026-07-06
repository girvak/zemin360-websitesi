const CONTACT_EMAIL = "info@girisimcilikvakfi.org";

export function openMailto(subject: string, body: string) {
  const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export { CONTACT_EMAIL };
