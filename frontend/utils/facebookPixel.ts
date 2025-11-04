/**
 * Facebook Pixel tracking utilities
 */

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
  }
}

/**
 * Track WhatsApp click event
 */
export function trackWhatsAppClick() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp Contact',
      content_category: 'Contact Method',
    });
  }
}

/**
 * Track Telegram click event
 */
export function trackTelegramClick() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Telegram Contact',
      content_category: 'Contact Method',
    });
  }
}

/**
 * Track contact form submit event
 */
export function trackContactFormSubmit(data?: { name?: string; email?: string; company?: string }) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Contact Form Submission',
      content_category: 'Contact Form',
      ...data,
    });
  }
}

