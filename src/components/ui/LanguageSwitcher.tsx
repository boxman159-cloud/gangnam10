'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage, type Lang } from '@/context/LanguageContext'
import { localizedPath } from '@/lib/i18n'

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

/** Strips the current locale prefix from a pathname, leaving the bare path. */
function basePath(pathname: string, currentLang: Lang): string {
  if (currentLang === 'ko') return pathname
  const prefix = `/${currentLang}`
  if (pathname === prefix) return '/'
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length)
  return pathname
}

export default function LanguageSwitcher() {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const base = basePath(pathname, lang)

  return (
    <div className="flex items-center gap-1 bg-dark-700 border border-white/10 rounded-lg p-1">
      {langs.map((l) => (
        <Link
          key={l.code}
          href={localizedPath(l.code, base)}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold transition-all duration-200 ${
            lang === l.code
              ? 'bg-neon-pink/20 text-neon-pink'
              : 'text-gray-400 hover:text-white'
          }`}
          title={l.label}
        >
          <span>{l.flag}</span>
          <span className="hidden sm:inline">{l.label}</span>
        </Link>
      ))}
    </div>
  )
}
