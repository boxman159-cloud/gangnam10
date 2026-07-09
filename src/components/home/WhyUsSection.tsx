'use client'

import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'

const content = {
  ko: {
    sectionBadge: '신뢰할 수 있는 이유',
    sectionTitle: '왜 ',
    sectionTitleGradient: '저희를 통해',
    sectionTitle2: ' 예약해야 할까요?',
    sectionDesc: '수많은 채널 중 저희를 선택해야 하는 명확한 이유가 있습니다',
    reasons: [
      {
        icon: '🛡️', subtitle: '안전성과 신뢰도', title: '실패 없는 검증된 케어',
        quote: '"누군지도 모르는 인스타 실장에게 내 돈과 시간을 맡기시겠습니까?"',
        body: '개인 채널로 예약했다가 당일 연락 두절, 돈만 받고 케어 없이 자리를 망치는 사례가 정말 많습니다. 저희는 각 업장과 다이렉트로 예약이 가능한 검증된 채널만 운영하며, 업장 직속 연결이기 때문에 가격 또한 합리적으로 보장됩니다.',
        highlight: '당일 잠수·케어 부족 없는 200% 안심 예약 시스템',
      },
      {
        icon: '💡', subtitle: '비교 가능성', title: '압도적인 정보력과 투명한 가격',
        quote: '"여기저기 문의하며 가격 물어보는 번거로움은 끝"',
        body: '강남 하이퍼블릭은 업장마다 규모·분위기·요금이 달라 일일이 물어봐야 하는 불편함이 있습니다. 달토·퍼펙트·유앤미·도파민·엘리트·디저트의 실시간 상황과 특징을 한눈에 투명하게 비교하세요.',
        highlight: '내 목적과 상황에 딱 맞는 업장을 단 1분 만에',
      },
    ],
    intlTitle: '외국인도 이용·예약 가능한가요?',
    intlAnswer: '네, 당연히 가능합니다!',
    intlDesc: '저희 플랫폼은 글로벌 고객님들을 위해 영어·중국어·일어 소통이 가능한 전담 직원을 배치하고 있습니다. 언어의 장벽이나 복잡한 예약 절차 걱정 없이, 문의부터 당일 안내까지 친절하고 완벽하게 케어해 드립니다.',
    intlBadge: 'For International Guests',
    careTitle: '외국인 전용 케어 서비스',
    careItems: ['다국어 전담 직원 배치', '현장 안내 및 동행 지원', '이용 방법·요금 사전 안내', '실시간 카카오톡 소통', '당일 예약 및 즉시 확인', '1인 방문객 전용 케어'],
  },
  en: {
    sectionBadge: 'Why Choose Us',
    sectionTitle: 'Why Book ',
    sectionTitleGradient: 'Through Us?',
    sectionTitle2: '',
    sectionDesc: 'There are clear reasons to choose us over countless other channels',
    reasons: [
      {
        icon: '🛡️', subtitle: 'Safety & Reliability', title: 'Verified Care — Every Time',
        quote: '"Would you trust a random manager you found on Instagram with your money and your night?"',
        body: 'There are far too many cases of private channels going silent on the day of the visit, or taking payment without providing proper care. We only operate verified channels that book directly with each venue, which also means fair, transparent pricing.',
        highlight: '200% Worry-Free Booking — No Ghosting, No Poor Service',
      },
      {
        icon: '💡', subtitle: 'Transparency & Comparison', title: 'Unmatched Info & Clear Pricing',
        quote: '"Stop messaging everywhere just to ask about prices"',
        body: "Gangnam's high public venues vary in scale, atmosphere, and pricing — making it a hassle to check each one individually. Compare Dalto, Perfect, U&ME, Dopamine, Elite, and Dessert side by side, transparently, in one place.",
        highlight: 'Find the perfect venue for your occasion in just 1 minute',
      },
    ],
    intlTitle: 'Can foreigners book too?',
    intlAnswer: 'Yes, absolutely!',
    intlDesc: 'Our platform has dedicated staff fluent in English, Chinese, and Japanese for our global guests. No language barriers, no complicated booking process — we provide full care from your first enquiry to same-day guidance.',
    intlBadge: 'For International Guests',
    careTitle: 'International Guest Care Services',
    careItems: ['Multilingual dedicated staff', 'On-site guidance & escort support', 'Advance pricing & usage briefing', 'Real-time KakaoTalk communication', 'Same-day booking & instant confirmation', 'Dedicated care for solo visitors'],
  },
  zh: {
    sectionBadge: '选择我们的理由',
    sectionTitle: '为什么要通过',
    sectionTitleGradient: '我们',
    sectionTitle2: '来预约？',
    sectionDesc: '在众多渠道中，选择我们有明确的理由',
    reasons: [
      {
        icon: '🛡️', subtitle: '安全性与可信度', title: '万无一失的专业服务',
        quote: '"您愿意把钱和时间交给一个来历不明的Instagram经理吗？"',
        body: '通过私人渠道预约后当天失联，或只收钱不负责服务的案例实在太多。我们只运营可与各场所直接对接的可信渠道，因此价格也合理透明。',
        highlight: '零失联·零服务缺失的200%放心预约系统',
      },
      {
        icon: '💡', subtitle: '比较与透明度', title: '压倒性信息力与透明定价',
        quote: '"不用再到处询价了"',
        body: '江南高端包房KTV场所各有不同的规模、氛围和价格，一家家询问非常麻烦。一站式透明比较달토、퍼펙트、유앤미、도파민、엘리트、디저트的实时情况与特点。',
        highlight: '1分钟内找到最符合您需求的场所',
      },
    ],
    intlTitle: '外国人也可以预约吗？',
    intlAnswer: '是的，当然可以！',
    intlDesc: '我们的平台为全球客户配备了能够用英语、中文、日语沟通的专属工作人员。无需担心语言障碍或复杂的预约流程，从咨询到当天引导，我们将亲切而完善地为您全程服务。',
    intlBadge: 'For International Guests',
    careTitle: '外国人专属服务',
    careItems: ['多语言专属工作人员', '现场引导及陪同支持', '提前告知使用方法和价格', '实时KakaoTalk沟通', '当天预约及即时确认', '单人客人专属关怀'],
  },
  ja: {
    sectionBadge: '選ぶ理由',
    sectionTitle: 'なぜ',
    sectionTitleGradient: '私たちを通じて',
    sectionTitle2: '予約すべきか？',
    sectionDesc: '数多くのチャンネルの中から私たちを選ぶ明確な理由があります',
    reasons: [
      {
        icon: '🛡️', subtitle: '安全性と信頼性', title: '失敗しない検証済みのケア',
        quote: '"正体不明のインスタのマネージャーにお金と時間を預けますか？"',
        body: '個人ルートで予約したところ当日連絡が取れなくなったり、お金だけ受け取ってケアなしにされるケースが非常に多いです。私たちは各店舗と直接予約できる信頼済みのルートだけを運営しており、価格も適正・透明です。',
        highlight: '当日失踪·ケア不足なしの200%安心予約システム',
      },
      {
        icon: '💡', subtitle: '比較可能性', title: '圧倒的な情報力と透明な価格',
        quote: '"あちこちに問い合わせて価格を聞く手間はもう終わり"',
        body: '江南のハイパブリックは店舗ごとに規模・雰囲気・料金が異なり、一つひとつ確認するのが大変です。달토·퍼펙트·유앤미·도파민·엘리트·디저트のリアルタイム状況と特徴を一目で比較できます。',
        highlight: '目的にぴったりの店舗を1分で見つける',
      },
    ],
    intlTitle: '外国人も利用・予約できますか？',
    intlAnswer: 'はい、もちろんできます！',
    intlDesc: '私たちのプラットフォームにはグローバルなお客様のために英語·中国語·日本語でコミュニケーションできる専任スタッフを配置しています。言語の壁や複雑な予約手続きの心配なく、お問い合わせから当日案内まで親切かつ完璧にケアいたします。',
    intlBadge: 'For International Guests',
    careTitle: '外国人専用ケアサービス',
    careItems: ['多言語対応専任スタッフ配置', '現場案内および同行サポート', '利用方法・料金の事前案内', 'リアルタイムKakaoTalkサポート', '当日予約および即時確認', 'お一人様専用ケア'],
  },
}

export default function WhyUsSection() {
  const { lang } = useLanguage()
  const c = content[lang] ?? content.ko
  const colors = [
    { border: 'border-neon-pink/30', glow: 'rgba(255,45,120,0.15)', accent: 'text-neon-pink', badge: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30' },
    { border: 'border-neon-cyan/30', glow: 'rgba(0,245,255,0.12)', accent: 'text-neon-cyan', badge: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30' },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-pink/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
          <span className="text-neon-pink text-sm font-medium tracking-wide">{c.sectionBadge}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          {c.sectionTitle}<span className="text-gradient">{c.sectionTitleGradient}</span>{c.sectionTitle2}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">{c.sectionDesc}</p>
      </div>

      {/* Reason cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {c.reasons.map((r, i) => (
          <div key={i} className={`relative glass-card rounded-2xl p-8 border ${colors[i].border} overflow-hidden`}
            style={{ boxShadow: `0 0 40px ${colors[i].glow}` }}>
            <div className="absolute top-4 right-6 text-8xl font-black opacity-5 select-none leading-none"
              style={{ color: i === 0 ? '#FF2D78' : '#00F5FF' }}>
              0{i + 1}
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${colors[i].accent}`}>{r.subtitle}</p>
                  <h3 className="text-white font-black text-xl leading-tight">{r.title}</h3>
                </div>
              </div>
              <blockquote className={`text-sm font-semibold mb-4 pl-3 border-l-2 leading-relaxed ${colors[i].accent} border-current`}>
                {r.quote}
              </blockquote>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{r.body}</p>
              <div className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold border ${colors[i].badge}`}>
                ✓ {r.highlight}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* International */}
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-dark-700 to-neon-pink/10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
        <div className="relative glass-card border border-neon-purple/20 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">🌏</span>
                <div>
                  <p className="text-neon-purple text-xs font-bold uppercase tracking-widest mb-0.5">{c.intlBadge}</p>
                  <h3 className="text-white font-black text-2xl">{c.intlTitle}</h3>
                </div>
              </div>
              <p className="text-white font-bold text-lg mb-3">{c.intlAnswer}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{c.intlDesc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[{ flag: '🇰🇷', l: '한국어' }, { flag: '🇺🇸', l: 'English' }, { flag: '🇨🇳', l: '中文' }, { flag: '🇯🇵', l: '日本語' }].map((item) => (
                  <span key={item.l} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-sm text-gray-300">
                    {item.flag} {item.l}
                  </span>
                ))}
              </div>
              <ContactButtons size="md" />
            </div>
            <div className="md:w-72 w-full glass-card rounded-2xl p-6 border border-neon-purple/20 flex-shrink-0">
              <p className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{c.careTitle}</p>
              <ul className="space-y-3">
                {c.careItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-neon-purple mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
