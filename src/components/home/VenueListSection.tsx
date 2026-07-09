'use client'

import VenueCard from '@/components/ui/VenueCard'
import { venues } from '@/data/venues'
import { useLanguage } from '@/context/LanguageContext'

export default function VenueListSection() {
  const { t } = useLanguage()

  return (
    <section id="venues" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          <span className="text-gradient">{t('venue.sectionTitle')}</span> {t('venue.sectionTitle2')}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">{t('venue.sectionDesc')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </div>
    </section>
  )
}
