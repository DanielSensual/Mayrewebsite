type SchemaType =
  | 'RealEstateAgent'
  | 'LocalBusiness'
  | 'VideoObject'
  | 'RealEstateListing'

interface SchemaMarkupProps {
  /** Schema.org @type value */
  type: SchemaType
  /** Arbitrary structured data merged into the JSON-LD payload */
  data: Record<string, unknown>
}

/**
 * Renders an invisible `<script type="application/ld+json">` block
 * for search-engine structured data. Server component — zero JS shipped.
 */
export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
