import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import VenueListSection from '@/components/home/VenueListSection'
import GuideSection from '@/components/home/GuideSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import QuickBookingForm from '@/components/home/QuickBookingForm'
import FAQSection from '@/components/home/FAQSection'
import { FaqJsonLd } from '@/components/seo/JsonLd'
import type { Lang } from '@/context/LanguageContext'
import { localizedPath } from '@/lib/i18n'

const BASE = 'https://gangnam10.com'

const meta: Record<Lang, { title: string; description: string; ogDescription: string }> = {
  ko: {
    title: '강남 하이퍼블릭 | 달토·퍼펙트·유앤미·도파민·엘리트·디저트',
    description: '강남 하이퍼블릭. 달토·퍼펙트·유앤미·도파민·엘리트·디저트 6곳 상황별 추천. 24시간 당일 예약 가능 ☎ 010-9778-8571',
    ogDescription: '강남 하이퍼블릭 통합 정보 사이트. 달토, 퍼펙트, 유앤미, 도파민, 엘리트, 디저트 예약 안내.',
  },
  en: {
    title: 'Gangnam High Public KTV Booking | Dalto · Perfect · U&ME · Dopamine · Elite · Dessert',
    description: "Gangnam KTV & high public booking, all in one place. Dalto, Perfect, U&ME, Dopamine, Elite, Dessert — recommendations for every occasion. Same-day booking 24/7 ☎ 010-9778-8571",
    ogDescription: 'An integrated guide to Gangnam high public KTV venues — Dalto, Perfect, U&ME, Dopamine, Elite, Dessert.',
  },
  cn: {
    title: '江南高端包房KTV预约 | 달토·퍼펙트·유앤미·도파민·엘리트·디저트',
    description: '江南KTV·High Public一站式预约。달토·퍼펙트·유앤미·도파민·엘리트·디저트 6家场所按情况推荐。24小时全年无休当天可约 ☎ 010-9778-8571',
    ogDescription: '江南高端包房KTV综合指南——달토、퍼펙트、유앤미、도파민、엘리트、디저트预约。',
  },
  jp: {
    title: '江南ハイパブリックKTV予約 | 달토·퍼펙트·유앤미·도파민·엘리트·디저트',
    description: '江南KTV・ハイパブリック統合予約。달토·퍼펙트·유앤미·도파민·엘리트·디저트 6施設を状況別にご案内。24時間年中無休で当日予約可能 ☎ 010-9778-8571',
    ogDescription: '江南ハイパブリックKTVの総合案内サイト。달토、퍼펙트、유앤미、도파민、엘리트、디저트のご予約案内。',
  },
}

const homeFaqs: Record<Lang, { question: string; answer: string }[]> = {
  ko: [
    { question: '하이퍼블릭이 무엇인가요?', answer: '하이퍼블릭(High Public)은 퍼블릭에서 발전한 상위 형태의 엔터테인먼트입니다. 독립 공간 기반의 즉석 선택, 룸싸롱의 프라이빗함과 퍼블릭의 빠른 진행이 결합된 구조입니다.' },
    { question: '예약은 어떻게 하나요?', answer: '전화(010-9778-8571) 또는 카카오톡(alrep0410)으로 문의하시면 됩니다. 방문 시간, 인원, 선호 업장 스타일을 알려주시면 신속하게 안내해 드립니다.' },
    { question: '혼자 방문해도 되나요?', answer: '네, 혼자 방문도 가능합니다. 1:1 매칭 구조라 단독 고객도 부담 없이 이용하실 수 있습니다.' },
    { question: '외국인도 이용 가능한가요?', answer: '네, 영어·중국어·일본어 소통 가능한 전담 직원이 배치되어 있습니다.' },
  ],
  en: [
    { question: "What's high public?", answer: 'High Public is an evolved, upscale form of entertainment built on instant selection in independent rooms — combining the privacy of a room salon with the fast pace of a public venue.' },
    { question: 'How do I make a reservation?', answer: 'Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp. Tell us your visit time, party size, and preferred venue style and we will guide you right away.' },
    { question: 'Can I visit alone?', answer: 'Yes, solo visits are welcome. Every venue runs on a 1:1 matching system, so solo guests are never out of place.' },
    { question: 'Can foreigners use the service?', answer: 'Yes, we have dedicated staff fluent in English, Chinese, and Japanese.' },
  ],
  cn: [
    { question: 'High Public是什么？', answer: 'High Public是从公共场所发展而来的高级娱乐形式，采用独立空间即时挑选的结构，融合了包间会所的私密性和公共场所的快节奏。' },
    { question: '如何预约？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询。告知到访时间、人数和偏好的场所风格，我们会尽快为您安排。' },
    { question: '可以一个人去吗？', answer: '可以，欢迎单人光顾。所有场所均采用一对一匹配模式，独自前往完全不会尴尬。' },
    { question: '外国人也可以使用吗？', answer: '可以，我们配有能用英语、中文、日语沟通的专属工作人员。' },
  ],
  jp: [
    { question: 'ハイパブリックとは何ですか？', answer: 'ハイパブリック(High Public)は퍼블릭から発展した上位の形態のエンターテインメントです。独立した空間での即時選択、ルームサロンのプライベート感と퍼블릭のスピーディーな進行が組み合わさっています。' },
    { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせください。ご来店の時間、人数、ご希望の店舗スタイルをお知らせいただければ迅速にご案内します。' },
    { question: '一人で訪問しても大丈夫ですか？', answer: 'はい、お一人様の訪問も可能です。1対1マッチング制のため、お一人様のお客様も気兼ねなくご利用いただけます。' },
    { question: '外国人も利用できますか？', answer: 'はい、英語・中国語・日本語で対応できる専任スタッフを配置しています。' },
  ],
}

interface Props {
  params: { lang: Lang }
}

const ogLocale: Record<Lang, string> = { ko: 'ko_KR', en: 'en_US', cn: 'zh_CN', jp: 'ja_JP' }

export function generateMetadata({ params }: Props): Metadata {
  const m = meta[params.lang] ?? meta.ko
  const canonical = `${BASE}${localizedPath(params.lang, '/')}`
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical,
      languages: {
        'ko-KR': BASE,
        'en-US': `${BASE}/en`,
        'zh-CN': `${BASE}/cn`,
        'ja-JP': `${BASE}/jp`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: '강남 하이퍼블릭',
      locale: ogLocale[params.lang],
      alternateLocale: Object.values(ogLocale).filter((l) => l !== ogLocale[params.lang]),
      title: m.title,
      description: m.ogDescription,
      url: canonical,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: '강남 하이퍼블릭' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.ogDescription,
    },
  }
}

export default function HomePage({ params }: Props) {
  const faqs = homeFaqs[params.lang] ?? homeFaqs.ko
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <HeroSection />
      <VenueListSection />
      <GuideSection />
      <WhyUsSection />
      <QuickBookingForm />
      <FAQSection />
    </>
  )
}
