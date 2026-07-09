'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { localizedPath } from '@/lib/i18n'

const text = {
  ko: {
    tagline: '강남 하이퍼블릭 통합 예약 안내. 달토·퍼펙트·유앤미·도파민·엘리트·디저트 등 강남권 주요 업장을 빠르고 정확하게 연결해 드립니다.',
    serviceTitle: '서비스',
    links: [
      { path: '/#venues', label: '업장 목록' },
      { path: '/#guide', label: '추천 가이드' },
      { path: '/#quick-booking', label: '예약 문의' },
      { path: '/#faq', label: '자주 묻는 질문' },
    ],
    contactTitle: '연락처',
    phone: '📞 전화: 010-9778-8571',
    messenger: '💬 카카오톡: alrep0410',
    notice: '24시간 연중무휴 예약 문의',
    copyright: '© 2026 강남 하이퍼블릭. All rights reserved.',
    legal: ['이용약관', '개인정보처리방침', '사업자정보'],
    socialLinks: ['Instagram', 'KakaoTalk'],
  },
  en: {
    tagline: 'An integrated booking guide for Gangnam high public KTV — connecting you quickly and accurately to Dalto, Perfect, U&ME, Dopamine, Elite, Dessert, and more.',
    serviceTitle: 'Services',
    links: [
      { path: '/#venues', label: 'Venues' },
      { path: '/#guide', label: 'Recommendation Guide' },
      { path: '/#quick-booking', label: 'Reservation' },
      { path: '/#faq', label: 'FAQ' },
    ],
    contactTitle: 'Contact',
    phone: '📞 Phone: 010-9778-8571',
    messenger: '💬 WeChat · LINE · WhatsApp available',
    notice: '24/7 booking enquiries',
    copyright: '© 2026 Gangnam High Public. All rights reserved.',
    legal: ['Terms', 'Privacy Policy', 'Business Info'],
    socialLinks: ['Instagram', 'WhatsApp'],
  },
  cn: {
    tagline: '江南高端包房KTV综合预约指南，为您快速准确地连接달토·퍼펙트·유앤미·도파민·엘리트·디저트等江南主要场所。',
    serviceTitle: '服务',
    links: [
      { path: '/#venues', label: '场所一览' },
      { path: '/#guide', label: '推荐指南' },
      { path: '/#quick-booking', label: '预约咨询' },
      { path: '/#faq', label: '常见问题' },
    ],
    contactTitle: '联系方式',
    phone: '📞 电话: 010-9778-8571',
    messenger: '💬 微信 · LINE · WhatsApp 均可联系',
    notice: '24小时全年无休预约咨询',
    copyright: '© 2026 江南 High Public. All rights reserved.',
    legal: ['使用条款', '隐私政策', '商家信息'],
    socialLinks: ['Instagram', 'WhatsApp'],
  },
  jp: {
    tagline: '江南ハイパブリックKTV統合予約案内。달토·퍼펙트·유앤미·도파민·엘리트·디저트など江南主要店舗へ迅速かつ正確にご案内します。',
    serviceTitle: 'サービス',
    links: [
      { path: '/#venues', label: '店舗一覧' },
      { path: '/#guide', label: 'おすすめガイド' },
      { path: '/#quick-booking', label: '予約お問い合わせ' },
      { path: '/#faq', label: 'よくある質問' },
    ],
    contactTitle: 'お問い合わせ',
    phone: '📞 電話: 010-9778-8571',
    messenger: '💬 WeChat · LINE · WhatsApp 対応可能',
    notice: '24時間年中無休で予約受付',
    copyright: '© 2026 江南ハイパブリック. All rights reserved.',
    legal: ['利用規約', 'プライバシーポリシー', '事業者情報'],
    socialLinks: ['Instagram', 'WhatsApp'],
  },
}

export default function Footer() {
  const { lang } = useLanguage()
  const c = text[lang] ?? text.ko

  return (
    <footer className="bg-dark-800 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center">
                <span className="text-white font-black text-sm">G10</span>
              </div>
              <span className="text-white font-black text-xl">
                강남<span className="text-gradient">하이퍼블릭</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {c.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              {c.socialLinks.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-gray-500 hover:text-neon-pink transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">{c.serviceTitle}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={localizedPath(lang, l.path)} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">{c.contactTitle}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{c.phone}</li>
              <li>{c.messenger}</li>
              <li>{c.notice}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            {c.copyright}
          </p>
          <div className="flex gap-6">
            {c.legal.map((t) => (
              <a key={t} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
