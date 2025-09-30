export {}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetIdOrDate: string | Date,
      config?: {
        event_category?: string
        event_label?: string
        event_value?: number
        transport_type?: string
        page_location?: string
        [key: string]: any
      }
    ) => void
    dataLayer: any[]
  }
}