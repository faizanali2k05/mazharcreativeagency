/**
 * Single source of truth for the agency's contact details.
 * Update here and every button / link / form picks it up.
 */

// WhatsApp / phone — local 0303 3925364 → international for wa.me links.
export const WHATSAPP_INTL = '923033925364';
export const WHATSAPP_DISPLAY = '+92 303 3925364';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_INTL}`;

export const EMAIL = 'mazhars.designs@gmail.com';
export const EMAIL_LINK = `mailto:${EMAIL}`;

export const INSTAGRAM_LINK = 'https://www.instagram.com/mazhars_designs/';
export const INSTAGRAM_HANDLE = '@mazhars_designs';

/** Build a wa.me URL with a pre-filled, URL-encoded message. */
export const whatsappWithText = (text: string) =>
  `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`;
