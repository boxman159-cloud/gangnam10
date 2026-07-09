import type { Metadata } from 'next'
import './globals.css'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'

const BASE = 'https://gangnam10.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '강남 하이퍼블릭 가라오케 예약 | 달토·퍼펙트·유앤미·도파민·엘리트·디저트',
    template: '%s | 강남 하이퍼블릭',
  },
  description: '강남 가라오케·하이퍼블릭 통합 예약 플랫폼. 달토·퍼펙트·유앤미·도파민·엘리트·디저트 6곳 상황별 추천. 24시간 당일 예약 가능 ☎ 010-9778-8571',
  keywords: [
    '강남 가라오케', '강남가라오케', '강남 하이퍼블릭', '강남하이퍼블릭', '강남 가라오케 예약',
    '강남 가라오케 추천', '강남 가라오케 가격', '강남 KTV', '강남 하이퍼블릭 추천', '강남 하이퍼블릭 예약',
    '강남 달토', '강남 퍼펙트', '강남 유앤미', '강남 도파민', '강남 엘리트', '강남 디저트',
    '강남 사라있네', '역삼 가라오케', '논현 가라오케', '선릉 가라오케', '대치 가라오케',
    'Gangnam KTV', 'Gangnam karaoke', 'Gangnam high public',
    '江南KTV', '江南夜店', '江南カラオケ', '江南ハイパブリック',
  ],
  authors: [{ name: '강남 하이퍼블릭' }],
  creator: '강남 하이퍼블릭',
  publisher: '강남 하이퍼블릭',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'zh_CN', 'ja_JP'],
    url: BASE,
    siteName: '강남 하이퍼블릭',
    title: '강남 하이퍼블릭 가라오케 예약 | 달토·퍼펙트·유앤미·도파민·엘리트·디저트',
    description: '강남 최고의 하이퍼블릭 가라오케를 한 곳에서. 24시간 당일 예약 전문.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: '강남 하이퍼블릭' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 하이퍼블릭 가라오케 예약 | 24시간 당일 예약',
    description: '강남 최고의 하이퍼블릭 가라오케를 한 곳에서.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: BASE,
    languages: {
      'ko-KR': BASE,
      'en-US': `${BASE}/en`,
      'zh-CN': `${BASE}/zh`,
      'ja-JP': `${BASE}/ja`,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  )
}
