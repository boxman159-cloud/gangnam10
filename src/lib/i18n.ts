import type { Lang } from '@/context/LanguageContext'

export const LOCALES: Lang[] = ['ko', 'en', 'zh', 'ja']

/** Builds a link that stays within the given locale. Korean has no URL prefix. */
export function localizedPath(lang: Lang, path: string = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (lang === 'ko') return clean
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`
}
