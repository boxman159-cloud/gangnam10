'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Venue } from '@/types'
import { useLanguage } from '@/context/LanguageContext'
import { getVenueI18n } from '@/data/venueTranslations'
import { localizedPath } from '@/lib/i18n'

interface VenueHeroProps {
  venue: Venue
}

const text = {
  ko: { back: '목록으로', badge: '하이퍼블릭' },
  en: { back: 'Back to list', badge: 'High Public' },
  cn: { back: '返回列表', badge: 'High Public' },
  jp: { back: '一覧に戻る', badge: 'ハイパブリック' },
}

export default function VenueHero({ venue }: VenueHeroProps) {
  const { lang } = useLanguage()
  const i18n = getVenueI18n(venue.id, lang)
  const operatingHours = i18n?.operatingHours ?? venue.operatingHours
  const c = text[lang] ?? text.ko

  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src={venue.heroImage}
        alt={`${venue.name}(${venue.nameEn}) - ${venue.location} 하이퍼블릭 예약`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/30 to-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 to-transparent" />

      {/* Back button */}
      <div className="absolute top-24 left-4 sm:left-8">
        <Link
          href={localizedPath(lang, '/')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm bg-dark-800/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {c.back}
        </Link>
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink border border-neon-pink/40 bg-neon-pink/10 px-2.5 py-1 rounded-full">
            {c.badge}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none">
          {venue.name}
        </h1>
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">{venue.nameEn}</p>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-neon-pink" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-300 text-sm">{venue.location}</span>
          <span className="text-gray-600 mx-2">·</span>
          <span className="text-gray-400 text-sm">{operatingHours}</span>
        </div>
      </div>
    </div>
  )
}
