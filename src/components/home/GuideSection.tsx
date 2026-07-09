'use client'

import { useLanguage } from '@/context/LanguageContext'
import ContactButtons from '@/components/ui/ContactButtons'

const content = {
  ko: {
    label: 'RECOMMENDATION GUIDE',
    title: '강남 하이퍼블릭 상황별 추천 가이드',
    guides: [
      { icon: '🐣', situation: 'First Visit', title: '처음 방문이라면', venues: ['달토 (러닝래빗)', '퍼펙트'], desc: '하이퍼블릭이 처음이신 분께 가장 먼저 추천하는 두 곳입니다. 달토는 친근하고 편안한 분위기로 첫 방문 부담이 없고, 퍼펙트는 강남 최대 규모로 다양한 선택이 가능해 첫 경험에도 만족도가 높습니다.' },
      { icon: '💼', situation: 'Business Meeting', title: '비즈니스 모임 자리라면', venues: ['퍼펙트', '디저트', '도파민'], desc: '격식 있는 비즈니스 자리에 어울리는 업장들입니다. 퍼펙트·디저트는 논현동 엘리에나호텔 내에 위치해 외부 노출이 적고 VVIP 룸 구성이 탄탄합니다. 도파민은 코엑스·테헤란로 상권 인접으로 비즈니스 미팅 후 바로 연계하기 좋습니다.' },
      { icon: '🎉', situation: 'Grand Party', title: '화려하고 큰 자리를 원한다면', venues: ['퍼펙트'], desc: '강남 하이퍼블릭 중 최대 규모를 자랑하는 퍼펙트입니다. 하루 평균 100~150명 이상 출근하며 VVIP 대형룸, 화려한 공연까지 갖춰 화려한 파티 자리로는 압도적입니다.' },
      { icon: '🔒', situation: 'Private & Cozy', title: '프라이빗하고 조용한 분위기라면', venues: ['유앤미', '달토'], desc: '외부 노출 없이 조용하고 프라이빗하게 즐기고 싶다면 이 두 곳을 추천합니다. 유앤미는 전 룸 완전 독립 방음 구조에 신사역 인근 위치로 접근성이 좋고, 달토는 삼정호텔 지하라는 독립적인 구조 덕분에 외부 동선 노출이 거의 없습니다.' },
      { icon: '🔥', situation: 'Fun & Exciting', title: '강남에서 재밌게 놀고 싶다면', venues: ['엘리트 (구.사라있네)'], desc: '전설적인 사라있네의 탄탄한 영업진과 베테랑 실장진을 그대로 계승한 엘리트입니다. 선릉역 1번출구 도보 5분의 접근성도 좋아, 확실하게 즐기고 싶은 분께 적극 추천합니다.' },
      { icon: '⚡', situation: 'Energetic Vibes', title: '활기차고 빠른 템포가 좋다면', venues: ['도파민'], desc: '트렌디한 SNS 감성 인테리어와 젊고 에너지 넘치는 스탭으로 활기찬 분위기가 특징입니다. 생일파티·단체 회식·젊은 감성의 자리에 제격입니다.' },
    ],
    ctaLabel: 'Personalized Match',
    ctaTitle: '실시간 상황에 맞게 예약 도와드립니다',
    ctaDesc: '이외에도 실시간 상황 및 선호도에 따라 가장 좋은 업장으로 예약 도와드립니다. 방문 시간, 인원, 선호 분위기를 알려주시면 그날의 상황에 맞는 최적의 업장으로 바로 연결해 드립니다.',
  },
  en: {
    label: 'RECOMMENDATION GUIDE',
    title: 'Gangnam High Public — Venue Recommendation Guide',
    guides: [
      { icon: '🐣', situation: 'First Visit', title: 'For Your First Visit', venues: ['Dalto (Running Rabbit)', 'Perfect'], desc: "The two venues we recommend most for first-time visitors. Dalto offers a friendly, relaxed atmosphere with no pressure for newcomers, while Perfect's massive scale and variety makes it highly satisfying even on your first visit." },
      { icon: '💼', situation: 'Business Meeting', title: 'For Business Entertainment', venues: ['Perfect', 'Dessert', 'Dopamine'], desc: "Venues suited for formal business settings. Perfect and Dessert are located inside Eliana Hotel in Nonhyeon-dong with minimal external exposure and solid VVIP room configurations. Dopamine is near COEX and Teheran-ro, great for post-meeting outings." },
      { icon: '🎉', situation: 'Grand Party', title: 'For a Lavish, Grand Night Out', venues: ['Perfect'], desc: "Perfect boasts the largest scale among Gangnam high public venues. With 100–150+ staff daily and VVIP grand rooms, it's unrivaled for lavish parties." },
      { icon: '🔒', situation: 'Private & Cozy', title: 'For a Private, Quiet Atmosphere', venues: ['U&ME', 'Dalto'], desc: "For those who want a quiet, private experience without external exposure. U&ME features fully independent soundproof rooms near Sinsa Station. Dalto's basement location in Samjeong Hotel ensures almost zero external exposure." },
      { icon: '🔥', situation: 'Fun & Exciting', title: 'For the Most Exciting Night in Gangnam', venues: ['Elite (ex-Sara Issne)'], desc: 'Elite inherits the solid lineup and veteran managers of the legendary Sara Issne brand. Just a 5-minute walk from Seonreung Station Exit 1 — highly recommended for a guaranteed great time.' },
      { icon: '⚡', situation: 'Energetic Vibes', title: 'For a Trendy, High-Energy Atmosphere', venues: ['Dopamine'], desc: 'Trendy SNS-worthy interiors and young, energetic staff define this venue — perfect for birthday parties and group dinners.' },
    ],
    ctaLabel: 'Personalized Match',
    ctaTitle: "We'll Find the Perfect Venue for You",
    ctaDesc: 'Beyond the above, we help you book the best venue in real time based on your preferences and situation. Just let us know your visit time, group size, and preferred atmosphere.',
  },
  zh: {
    label: 'RECOMMENDATION GUIDE',
    title: '江南 High Public 场所推荐指南',
    guides: [
      { icon: '🐣', situation: '首次访问', title: '初次访问推荐', venues: ['달토(奔跑的兔子)', '퍼펙트'], desc: '最推荐给初次访问者的两家场所。달토氛围友好轻松，初次来访毫无压力；퍼펙트规模最大、选择丰富，首次体验满意度也非常高。' },
      { icon: '💼', situation: '商务接待', title: '商务聚会 · 接待', venues: ['퍼펙트', '디저트', '도파민'], desc: '适合正式商务场合的场所。퍼펙트·디저트位于논현동엘리에나酒店内，外部暴露极少，VVIP包间配置扎实。도파민毗邻COEX和테헤란로商圈，商务会议后直接前往非常方便。' },
      { icon: '🎉', situation: '豪华派对', title: '想要华丽盛大的场面', venues: ['퍼펙트'], desc: '퍼펙트是江南High Public中规模最大的场所。每日100~150名以上员工在岗，VVIP大型包间一应俱全，豪华派对首选无可匹敌。' },
      { icon: '🔒', situation: '私密轻松', title: '偏爱私密安静的氛围', venues: ['유앤미', '달토'], desc: '希望在无外部暴露的情况下安静私密地享受，推荐这两家。유앤미全房间完全独立隔音，신사站附近交通便利；달토位于三井酒店地下，外部动线几乎无暴露。' },
      { icon: '🔥', situation: '尽情玩乐', title: '想在江南尽情玩耍', venues: ['엘리트(原사라있네)'], desc: '엘리트完整继承了传奇사라있네品牌的扎实营业团队和资深经理阵容，선릉站1号出口步行5分钟。想要确实好好玩的您，强烈推荐。' },
      { icon: '⚡', situation: '活力满满', title: '喜欢活力四射的快节奏', venues: ['도파민'], desc: '以时尚的社交媒体风装修和年轻有活力的员工著称，最适合生日派对和团体聚餐。' },
    ],
    ctaLabel: 'Personalized Match',
    ctaTitle: '为您匹配最合适的场所',
    ctaDesc: '除以上情况外，我们还会根据实时状况及您的个人偏好，为您预约最合适的场所。只需告知到访时间、人数和偏好氛围即可。',
  },
  ja: {
    label: 'RECOMMENDATION GUIDE',
    title: '江南 ハイパブリック 施設おすすめガイド',
    guides: [
      { icon: '🐣', situation: '初めての訪問', title: '初めての方へ', venues: ['달토（走るうさぎ）', '퍼펙트'], desc: '初めての方に最初にお勧めする2施設です。달토は親しみやすくリラックスした雰囲気で初回でも気軽に楽しめ、퍼펙트は江南最大規模で選択肢が豊富なため初体験でも満足度が高いです。' },
      { icon: '💼', situation: 'ビジネス接待', title: 'ビジネスの席に', venues: ['퍼펙트', '디저트', '도파민'], desc: '格式あるビジネスの場に適した施設です。퍼펙트・디저트は논현동エリアナホテル内にあり外部への露出が少なくVVIPルームも充実。도파민はCOEXとテヘラン路に近接しビジネスミーティング後の利用に最適です。' },
      { icon: '🎉', situation: '豪華なパーティー', title: '華やかな大きな席なら', venues: ['퍼펙트'], desc: '퍼펙트は江南ハイパブリック最大規模を誇ります。毎日100〜150名以上が出勤し、VVIPラージルームまで揃い豪華なパーティー席として圧倒的です。' },
      { icon: '🔒', situation: 'プライベート重視', title: 'プライベートで静かな雰囲気なら', venues: ['유앤미', '달토'], desc: '外部への露出なく静かにプライベートに楽しみたい方にお勧めの2施設。유앤미は全室完全独立防音で신사駅近くアクセス抜群。달토は三井ホテル地下という構造のため外部露出がほぼありません。' },
      { icon: '🔥', situation: 'とことん楽しむ', title: '江南で思いきり楽しむなら', venues: ['엘리트（旧사라있네）'], desc: '엘리트は伝説의사라있네ブランドの盤石な営業チームとベテランマネージャー陣を継承。선릉駅1番出口から徒歩5分。しっかり楽しみたい方に強くお勧めします。' },
      { icon: '⚡', situation: 'エネルギッシュな雰囲気', title: '活気あるテンポが好きなら', venues: ['도파민'], desc: 'トレンディなSNS映え内装と若くエネルギッシュなスタッフが特徴。誕生日パーティー・団体宴会にぴったりです。' },
    ],
    ctaLabel: 'Personalized Match',
    ctaTitle: 'あなたに最適な施設へご案内',
    ctaDesc: '上記以外にも、リアルタイムの状況やお客様のご希望に応じて最適な施設へのご予約をサポートします。訪問時間・人数・ご希望の雰囲気をお知らせください。',
  },
}

export default function GuideSection() {
  const { lang } = useLanguage()
  const c = content[lang] ?? content.ko

  return (
    <section id="guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-neon-cyan/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
          <span className="text-neon-cyan text-sm font-medium tracking-wide">{c.label}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-white">{c.title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {c.guides.map((g, i) => (
          <div key={i} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-neon-pink/30 transition-colors duration-300">
            <span className="text-3xl mb-3 block">{g.icon}</span>
            <p className="text-neon-pink text-xs font-bold uppercase tracking-widest mb-1">{g.situation}</p>
            <h3 className="text-white font-black text-lg mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {g.venues.map((v) => (
                <span key={v} className="bg-neon-purple/10 border border-neon-purple/30 text-neon-cyan text-xs px-2.5 py-1 rounded-full">
                  {v}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
          </div>
        ))}

        {/* CTA card */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-dark-700 to-neon-cyan/10" />
          <div className="relative glass-card border border-neon-pink/20 rounded-2xl p-6 h-full flex flex-col">
            <span className="text-3xl mb-3 block">📞</span>
            <p className="text-neon-pink text-xs font-bold uppercase tracking-widest mb-1">{c.ctaLabel}</p>
            <h3 className="text-white font-black text-lg mb-3">{c.ctaTitle}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{c.ctaDesc}</p>
            <ContactButtons size="sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
