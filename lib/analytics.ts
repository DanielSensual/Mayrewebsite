/**
 * Lead tracking utility for GA4 event dispatch.
 * Maps all form submissions to `generate_lead` GA4 events.
 *
 * Usage:
 *   trackLeadEvent({ formName: "contact", source: "homepage" });
 */

interface LeadEventParams {
  /** Name of the form that captured the lead */
  formName: string;
  /** Page or section where the form was submitted */
  source?: string;
  /** Optional additional data */
  metadata?: Record<string, string | number | boolean>;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackLeadEvent({
  formName,
  source,
  metadata,
}: LeadEventParams): void {
  // GA4 gtag.js event
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "lead_capture",
      event_label: formName,
      form_name: formName,
      lead_source: source ?? "direct",
      ...metadata,
    });
  }

  // Fallback: push to dataLayer for GTM
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "generate_lead",
      form_name: formName,
      lead_source: source ?? "direct",
      ...metadata,
    });
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("[Lead Event]", { formName, source, metadata });
  }
}
