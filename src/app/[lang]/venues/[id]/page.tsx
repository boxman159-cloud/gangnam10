import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getVenueById, venues } from '@/data/venues'
import { getVenueI18n } from '@/data/venueTranslations'
import VenueHero from '@/components/venue/VenueHero'
import VenueDetailTabs from '@/components/venue/VenueDetailTabs'
import { VenueJsonLd, BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'
import type { Lang } from '@/context/LanguageContext'
import { localizedPath } from '@/lib/i18n'

const BASE = 'https://gangnam10.com'

const labels: Record<Lang, { titleSuffix: string; home: string; venues: string }> = {
  ko: { titleSuffix: '예약', home: '홈', venues: '업장' },
  en: { titleSuffix: 'Reservation', home: 'Home', venues: 'Venues' },
  cn: { titleSuffix: '预约', home: '首页', venues: '场所' },
  jp: { titleSuffix: '予約', home: 'ホーム', venues: '店舗' },
}

const ogLocale: Record<Lang, string> = { ko: 'ko_KR', en: 'en_US', cn: 'zh_CN', jp: 'ja_JP' }

interface Props { params: { lang: Lang; id: string } }

export async function generateStaticParams() {
  return venues.map((v) => ({ id: v.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const venue = getVenueById(params.id)
  if (!venue) return {}
  const i18n = getVenueI18n(params.id, params.lang)
  const name = venue.name
  const desc = i18n?.description ?? venue.description
  const l = labels[params.lang] ?? labels.ko
  const canonical = `${BASE}${localizedPath(params.lang, `/venues/${venue.id}`)}`

  return {
    title: { absolute: `${name} ${l.titleSuffix} | 강남 하이퍼블릭` },
    description: `${name}(${venue.nameEn}). ${venue.location}. ${desc.slice(0, 100)}`,
    keywords: [
      venue.name, venue.nameEn, `${venue.name} 예약`, `${venue.location} 하이퍼블릭`,
      '강남 하이퍼블릭 예약', '강남 KTV 예약',
    ],
    openGraph: {
      type: 'website',
      siteName: '강남 하이퍼블릭',
      locale: ogLocale[params.lang],
      alternateLocale: Object.values(ogLocale).filter((l) => l !== ogLocale[params.lang]),
      title: `${name} ${l.titleSuffix} | 강남 하이퍼블릭`,
      description: desc.slice(0, 120),
      url: canonical,
      images: [{ url: venue.heroImage, width: 1200, height: 630, alt: venue.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} ${l.titleSuffix} | 강남 하이퍼블릭`,
      description: desc.slice(0, 120),
    },
    alternates: {
      canonical,
      languages: {
        'ko-KR': `${BASE}/venues/${venue.id}`,
        'en-US': `${BASE}/en/venues/${venue.id}`,
        'zh-CN': `${BASE}/cn/venues/${venue.id}`,
        'ja-JP': `${BASE}/jp/venues/${venue.id}`,
      },
    },
  }
}

export default function VenueDetailPage({ params }: Props) {
  const venue = getVenueById(params.id)
  if (!venue) notFound()

  const i18n = getVenueI18n(params.id, params.lang)
  const l = labels[params.lang] ?? labels.ko
  const faqs = i18n?.faqs ?? venue.faqs

  return (
    <>
      <VenueJsonLd venue={venue} />
      <BreadcrumbJsonLd items={[
        { name: l.home, url: `${BASE}${localizedPath(params.lang, '/')}` },
        { name: l.venues, url: `${BASE}${localizedPath(params.lang, '/#venues')}` },
        { name: venue.name, url: `${BASE}${localizedPath(params.lang, `/venues/${venue.id}`)}` },
      ]} />
      <FaqJsonLd faqs={faqs} />
      <VenueHero venue={venue} />
      <VenueDetailTabs venue={venue} />
    </>
  )
}
