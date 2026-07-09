'use client'

import { createContext, useContext } from 'react'

export type Lang = 'ko' | 'en' | 'zh' | 'ja'

interface LanguageContextType {
  lang: Lang
  t: (key: string) => string
}

const translations: Record<Lang, Record<string, string>> = {
  ko: {
    // Navbar
    'nav.venues': '업장',
    'nav.guide': '추천 가이드',
    'nav.faq': 'FAQ',
    'nav.quickBook': '빠른 예약',

    // Hero
    'hero.badge': '강남 No.1 하이퍼블릭 가라오케 예약 플랫폼',
    'hero.title1': '강남 하이퍼블릭',
    'hero.title2': '가라오케',
    'hero.desc': '강남 최고의 하이퍼블릭을 한 번에 예약하세요.',
    'hero.subDesc': '달토·퍼펙트·유앤미·도파민·엘리트·디저트 통합 안내',
    'hero.tableBook': '📞 지금 예약하기',
    'hero.guestApply': '💬 실시간 상담',
    'hero.stat1': '제휴 업장',
    'hero.stat2': '누적 예약',
    'hero.stat3': '당일 예약',
    'hero.scroll': '스크롤',
    'hero.contactLabel': '지금 바로 문의 · 예약하세요',

    // Venue List
    'venue.sectionTitle': '강남 하이퍼블릭',
    'venue.sectionTitle2': '업장 둘러보기',
    'venue.sectionDesc': '강남 최고의 하이퍼블릭 업장을 직접 선택하고 바로 예약하세요',
    'venue.badge': '하이퍼블릭',
    'venue.price': '요금',
    'venue.detail': '상세보기',

    // Booking Form
    'form.title': '예약 &',
    'form.title2': '문의 안내',
    'form.desc': '전화 또는 카카오톡으로 빠르게 예약하세요. 당일 예약도 가능합니다.',
    'form.notice': '24시간 연중무휴 · 당일 예약 가능 · 빠른 응답 보장',

    // FAQ
    'faq.title': '자주 묻는',
    'faq.title2': '질문',
    'faq.desc': '궁금한 점을 빠르게 해결하세요',
    'faq.kakao': '💬 카카오톡으로 문의하기',
    'faq.moreQuestion': '더 궁금한 점이 있으신가요?',

    // Detail Tabs
    'tab.intro': '소개',
    'tab.pricing': '이용방법 & 가격',
    'tab.faq': 'FAQ',
    'tab.booking': '예약',
  },

  en: {
    'nav.venues': 'Venues',
    'nav.guide': 'Guide',
    'nav.faq': 'FAQ',
    'nav.quickBook': 'Book Now',

    'hero.badge': 'Gangnam No.1 High Public Karaoke Booking Platform',
    'hero.title1': 'Gangnam High Public',
    'hero.title2': 'Karaoke',
    'hero.desc': "Book Gangnam's top high public venues in one place.",
    'hero.subDesc': 'Dalto · Perfect · U&ME · Dopamine · Elite · Dessert — all in one guide',
    'hero.tableBook': '📞 Reserve Now',
    'hero.guestApply': '💬 Live Consultation',
    'hero.stat1': 'Venues',
    'hero.stat2': 'Bookings',
    'hero.stat3': 'Same-Day',
    'hero.scroll': 'Scroll',
    'hero.contactLabel': 'Enquire & Reserve Right Now',

    'venue.sectionTitle': 'Gangnam High Public',
    'venue.sectionTitle2': 'Venues',
    'venue.sectionDesc': 'Choose and book the best high public venues in Gangnam',
    'venue.badge': 'High Public',
    'venue.price': 'Price',
    'venue.detail': 'View Details',

    'form.title': 'Reservation &',
    'form.title2': 'Enquiry',
    'form.desc': 'Contact us by phone or KakaoTalk. Same-day bookings welcome.',
    'form.notice': '24/7 available · Same-day booking · Fast response guaranteed',

    'faq.title': 'Frequently',
    'faq.title2': 'Asked Questions',
    'faq.desc': 'Get quick answers to common questions',
    'faq.kakao': '💬 Contact via KakaoTalk',
    'faq.moreQuestion': 'Have more questions?',

    'tab.intro': 'Overview',
    'tab.pricing': 'Pricing & How to Use',
    'tab.faq': 'FAQ',
    'tab.booking': 'Book',
  },

  zh: {
    'nav.venues': '场所',
    'nav.guide': '推荐指南',
    'nav.faq': '常见问题',
    'nav.quickBook': '立即预约',

    'hero.badge': '江南No.1 高端包房KTV预约平台',
    'hero.title1': '江南 High Public',
    'hero.title2': 'KTV',
    'hero.desc': '一站式预约江南顶级高端包房KTV。',
    'hero.subDesc': '달토·퍼펙트·유앤미·도파민·엘리트·디저트 一站式指南',
    'hero.tableBook': '📞 立即预约',
    'hero.guestApply': '💬 实时咨询',
    'hero.stat1': '合作场所',
    'hero.stat2': '累计预约',
    'hero.stat3': '当日可约',
    'hero.scroll': '滚动',
    'hero.contactLabel': '立即咨询 · 预约',

    'venue.sectionTitle': '江南 High Public',
    'venue.sectionTitle2': '场所一览',
    'venue.sectionDesc': '选择并预约江南最好的高端包房KTV',
    'venue.badge': 'High Public',
    'venue.price': '价格',
    'venue.detail': '查看详情',

    'form.title': '预约 &',
    'form.title2': '咨询',
    'form.desc': '通过电话或KakaoTalk联系我们，当天预约也可以。',
    'form.notice': '24小时全年无休 · 当天可预约 · 快速响应',

    'faq.title': '常见',
    'faq.title2': '问题',
    'faq.desc': '快速解答您的疑问',
    'faq.kakao': '💬 通过KakaoTalk咨询',
    'faq.moreQuestion': '还有其他问题吗？',

    'tab.intro': '介绍',
    'tab.pricing': '使用方式 & 价格',
    'tab.faq': '常见问题',
    'tab.booking': '预约',
  },

  ja: {
    'nav.venues': '店舗',
    'nav.guide': 'おすすめガイド',
    'nav.faq': 'よくある質問',
    'nav.quickBook': '予約する',

    'hero.badge': '江南No.1 ハイパブリックカラオケ予約プラットフォーム',
    'hero.title1': '江南ハイパブリック',
    'hero.title2': 'カラオケ',
    'hero.desc': '江南最高のハイパブリックを一括予約。',
    'hero.subDesc': '달토·퍼펙트·유앤미·도파민·엘리트·디저트 総合案内',
    'hero.tableBook': '📞 今すぐ予約',
    'hero.guestApply': '💬 リアルタイム相談',
    'hero.stat1': '提携店舗',
    'hero.stat2': '累計予約',
    'hero.stat3': '当日予約',
    'hero.scroll': 'スクロール',
    'hero.contactLabel': '今すぐお問い合わせ・ご予約',

    'venue.sectionTitle': '江南ハイパブリック',
    'venue.sectionTitle2': '店舗一覧',
    'venue.sectionDesc': '江南最高のハイパブリックを選んですぐ予約',
    'venue.badge': 'ハイパブリック',
    'venue.price': '料金',
    'venue.detail': '詳細を見る',

    'form.title': '予約 &',
    'form.title2': 'お問い合わせ',
    'form.desc': 'お電話またはKakaoTalkでご連絡ください。当日予約も受付中。',
    'form.notice': '24時間年中無休 · 当日予約OK · 迅速対応',

    'faq.title': 'よくある',
    'faq.title2': '質問',
    'faq.desc': 'よくある疑問をすばやく解決',
    'faq.kakao': '💬 KakaoTalkでお問い合わせ',
    'faq.moreQuestion': 'その他ご質問はありますか？',

    'tab.intro': '紹介',
    'tab.pricing': '料金・利用方法',
    'tab.faq': 'よくある質問',
    'tab.booking': '予約',
  },
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ko',
  t: (key) => key,
})

export function LanguageProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = (key: string): string =>
    translations[lang][key] ?? translations['ko'][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
