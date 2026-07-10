'use client'

import Accordion from '@/components/ui/Accordion'
import { useLanguage } from '@/context/LanguageContext'
import type { FAQ } from '@/types'

const faqsMap: Record<string, FAQ[]> = {
  ko: [
    { question: '업장마다 요금이 다른가요?', answer: '네, 업장 규모와 컨셉에 따라 요금이 다릅니다. 방문 목적과 인원을 알려주시면 예산에 맞는 업장을 추천해 드리고, 정확한 요금은 문의 시 바로 안내해 드립니다.' },
    { question: '당일 예약도 가능한가요?', answer: '네, 미리 예약 시 원하는 시간대 확보가 유리하지만 당일까지 방문 및 예약이 가능합니다. 전화 또는 카카오톡으로 문의 주시면 바로 안내해 드립니다.' },
    { question: '미성년자도 입장 가능한가요?', answer: '만 20세 이상만 입장 가능합니다. 신분증(주민등록증, 운전면허증, 여권) 지참이 필수입니다.' },
  ],
  en: [
    { question: 'Do prices differ between venues?', answer: "Yes, pricing varies by each venue's scale and concept. Tell us your purpose and party size and we'll recommend a venue that fits your budget, with exact pricing confirmed at the time of enquiry." },
    { question: 'Can I book on the same day?', answer: 'Yes, advance booking helps secure your preferred time slot, but same-day bookings and walk-ins are also welcome. Contact us by phone or messenger and we will assist you right away.' },
    { question: 'Is there an age restriction?', answer: "Entry is restricted to those aged 20 and above. A valid ID (national ID, driver's license, or passport) is required." },
  ],
  cn: [
    { question: '不同场所的价格一样吗？', answer: '不一样，价格根据各场所的规模和定位有所不同。请告知到访目的和人数，我们会为您推荐符合预算的场所，具体价格在咨询时立即为您说明。' },
    { question: '当天可以预约吗？', answer: '可以，提前预约有助于确保理想的时间段，但当天预约和到场同样欢迎。请通过电话或即时通讯联系我们，我们将立即为您安排。' },
    { question: '有年龄限制吗？', answer: '仅限20岁及以上人士入场。必须携带有效身份证件（身份证、驾照或护照）。' },
  ],
  jp: [
    { question: '店舗によって料金は違いますか？', answer: 'はい、店舗の規模やコンセプトによって料金が異なります。ご来店の目的と人数をお知らせいただければご予算に合った店舗をご案内し、正確な料金はお問い合わせ時にすぐにご案内します。' },
    { question: '当日予約はできますか？', answer: 'はい、事前予約でご希望の時間帯を確保しやすくなりますが、当日のご予約・ご来店も歓迎しております。お電話またはメッセンジャーでご連絡いただければすぐにご案内します。' },
    { question: '年齢制限はありますか？', answer: '満20歳以上のみ入場可能です。身分証明書（住民票、運転免許証、パスポート）の持参が必須です。' },
  ],
}

const contactHref: Record<string, string> = {
  ko: 'https://open.kakao.com',
  en: 'https://wa.me/821097788571',
  cn: 'https://wa.me/821097788571',
  jp: 'https://wa.me/821097788571',
}

export default function FAQSection() {
  const { lang, t } = useLanguage()
  const faqs = faqsMap[lang] ?? faqsMap.ko
  const href = contactHref[lang] ?? contactHref.ko

  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {t('faq.title')} <span className="text-gradient">{t('faq.title2')}</span>
        </h2>
        <p className="text-gray-400">{t('faq.desc')}</p>
      </div>

      <Accordion items={faqs} />

      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm mb-4">{t('faq.moreQuestion')}</p>
        <a href={href} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm">
          {t('faq.kakao')}
        </a>
      </div>
    </section>
  )
}
