/**
 * Trek Me @ Goa — Configuration & Contact Settings
 * 
 * Centralized business configuration.
 * When the client provides their official WhatsApp business number,
 * update `phoneNumber` below with the international format without '+' or spaces.
 * Example: '919876543210' for an Indian number (+91 98765 43210).
 */

export interface WhatsAppConfig {
  phoneNumber: string; // International format without plus sign or spaces (e.g., '919876543210')
  isConfigured: boolean; // Set to true once the client provides their verified WhatsApp number
  defaultMessage: string;
}

export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumber: "918379040418", 
  isConfigured: true,
  defaultMessage: "Hi Trek Me @ Goa! I'd like to plan an adventure trip. Could you please share the available dates and details?",
};

export const BRAND_CONFIG = {
  name: "Trek Me @ Goa",
  tagline: "Wild Goa — Premium Adventure & Nature Expeditions",
  instagramUrl: "https://www.instagram.com/trek_me_goa_/",
  location: "Goa, India",
  description:
    "Specialized in offbeat trekking, secret waterfalls, cave expeditions, water sports, and authentic local Goan village experiences.",
};

/**
 * Builds a safe, encoded WhatsApp enquiry URL
 * @param activityName Optional activity or category title
 * @param customMessage Optional custom message override
 */
export function getWhatsAppUrl(activityName?: string, customMessage?: string): string {
  const baseMessage = activityName
    ? `Hi Trek Me @ Goa! I'm interested in learning more about ${activityName}. Could you please share the available options and details?`
    : customMessage || WHATSAPP_CONFIG.defaultMessage;

  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
}
