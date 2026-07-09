import type { MetadataRoute } from 'next'
import { venues } from '@/data/venues'
import { LOCALES, localizedPath } from '@/lib/i18n'

const BASE = 'https://gangnam10.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const lang of LOCALES) {
    entries.push({
      url: `${BASE}${localizedPath(lang, '/')}`,
      lastModified: new Date(),
      changeFrequency: lang === 'ko' ? 'daily' : 'weekly',
      priority: lang === 'ko' ? 1.0 : 0.9,
    })
    for (const v of venues) {
      entries.push({
        url: `${BASE}${localizedPath(lang, `/venues/${v.id}`)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
  }

  return entries
}
