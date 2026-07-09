'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { localizedPath } from '@/lib/i18n'

const text = {
  ko: { title: '페이지를 찾을 수 없습니다', desc: '요청하신 업장 정보가 없거나 이동된 페이지입니다.', home: '홈으로 돌아가기' },
  en: { title: 'Page Not Found', desc: "The venue info you're looking for doesn't exist or has moved.", home: 'Back to Home' },
  zh: { title: '找不到页面', desc: '您要查找的场所信息不存在或已被移动。', home: '返回首页' },
  ja: { title: 'ページが見つかりません', desc: 'お探しの店舗情報が存在しないか、移動しました。', home: 'ホームに戻る' },
}

export default function NotFound() {
  const { lang } = useLanguage()
  const t = text[lang] ?? text.ko

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-black text-gradient mb-4">404</div>
        <h2 className="text-2xl font-bold text-white mb-3">{t.title}</h2>
        <p className="text-gray-400 mb-8">{t.desc}</p>
        <Link href={localizedPath(lang, '/')} className="btn-primary px-8 py-3 rounded-xl">
          {t.home}
        </Link>
      </div>
    </div>
  )
}
