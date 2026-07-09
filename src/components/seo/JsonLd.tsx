// 구조화 데이터 (JSON-LD) — 구글 리치 스니펫용

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '강남 하이퍼블릭',
    alternateName: 'Gangnam High Public',
    url: 'https://gangnam10.com',
    description: '강남 하이퍼블릭 통합 예약 안내. 달토, 퍼펙트, 유앤미, 도파민, 엘리트, 디저트 예약 전문.',
    telephone: '010-9778-8571',
    areaServed: ['강남구', '서초구', '역삼동', '논현동', '삼성동', '대치동'],
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '010-9778-8571',
      contactType: 'reservations',
      availableLanguage: ['Korean', 'English', 'Chinese', 'Japanese'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '강남 하이퍼블릭',
    url: 'https://gangnam10.com',
    description: '강남 하이퍼블릭 예약 전문 플랫폼',
    inLanguage: ['ko', 'en', 'zh', 'ja'],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

interface VenueJsonLdProps {
  venue: {
    id: string
    name: string
    nameEn: string
    description: string
    location: string
    operatingHours: string
    minAge: number
    dressCode: string
  }
}

export function VenueJsonLd({ venue }: VenueJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'EntertainmentBusiness',
    name: venue.name,
    alternateName: venue.nameEn,
    description: venue.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.location,
      addressLocality: '강남구',
      addressRegion: '서울특별시',
      addressCountry: 'KR',
    },
    telephone: '010-9778-8571',
    url: `https://gangnam10.com/venues/${venue.id}`,
    reservationUrl: 'https://gangnam10.com/#quick-booking',
    priceRange: '₩₩₩',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'KRW',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '드레스코드', value: venue.dressCode },
      { '@type': 'LocationFeatureSpecification', name: '최소 연령', value: `만 ${venue.minAge}세` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
