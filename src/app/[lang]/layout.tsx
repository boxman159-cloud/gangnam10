import { LanguageProvider, type Lang } from '@/context/LanguageContext'
import { LOCALES } from '@/lib/i18n'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Lang }
}) {
  return (
    <LanguageProvider lang={params.lang}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
