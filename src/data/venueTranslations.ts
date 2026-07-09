import type { Lang } from '@/context/LanguageContext'

interface VenueI18n {
  description: string
  features: string[]
  tablePrice: string
  guestFee: string
  dressCode: string
  operatingHours: string
  faqs: { question: string; answer: string }[]
}

type VenueTranslationMap = Record<string, Record<Exclude<Lang, 'ko'>, VenueI18n>>

export const venueTranslations: VenueTranslationMap = {
  dalto: {
    en: {
      description: "Dalto (Running Rabbit) sits in the basement of Samjeong Hotel in Yeoksam-dong, one of Gangnam's largest high-public KTV venues with roughly 60 spacious rooms. Low, reasonable rates and a warm, easygoing atmosphere make it the venue we recommend most to first-time visitors, and fast entry keeps waiting to a minimum. The rabbit mascot at the entrance is its signature, and the basement-hotel layout keeps the venue discreet, with almost no exposure to outside foot traffic — a real plus for business gatherings too. It's about a 5-minute walk from Eonju Station (Line 9).",
      features: ['Beginner-friendly · Relaxed atmosphere', '~60 large private rooms', 'Basement of Samjeong Hotel · Strong privacy', 'Free valet parking'],
      tablePrice: 'Inquire for pricing (reasonable rates)',
      guestFee: 'Solo visitors welcome · 1:1 matching',
      dressCode: 'Casual attire is fine',
      operatingHours: 'Open 24/7',
      faqs: [
        { question: 'Where is Dalto (Running Rabbit) located?', answer: "It's in the basement of Samjeong Hotel, 150 Teheran-ro, Gangnam-gu (Yeoksam-dong 604-11) — about 300m, a 5-minute walk from Eonju Station (Line 9)." },
        { question: 'Is it okay to visit for the first time?', answer: "Yes — it's the venue we recommend most to first-timers. The relaxed, friendly atmosphere and attentive staff put newcomers at ease right away, and the reasonable rates keep it low-pressure." },
        { question: 'How many rooms does Dalto have?', answer: 'About 60 large rooms, one of the biggest layouts in Gangnam. Staff are on shift around the clock, so there is always a wide selection.' },
        { question: 'Can I visit alone?', answer: 'Yes. Dalto runs on a 1:1 matching system, so solo visitors never feel out of place.' },
        { question: 'How do I make a reservation?', answer: "Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp and we'll connect you with Dalto right away." },
        { question: 'Is parking available?', answer: 'Yes. A valet is on site, and parking is complimentary when you book through us.' },
      ],
    },
    cn: {
      description: '달토(奔跑的兔子)位于驿三洞三井酒店地下，是江南规模最大的高端包房KTV之一，拥有约60间大包间。台费实惠、氛围亲切轻松，是我们最推荐给初次光临客人的场所，入场速度也很快。门口的兔子玩偶吉祥物是其标志性符号，酒店地下的结构确保外部动线几乎不外露，非常适合商务聚会。地铁9号线彦州站步行约5分钟可达。',
      features: ['初次访问友好 · 轻松氛围', '约60间大型包间', '三井酒店地下 · 隐私保障', '免费代客泊车'],
      tablePrice: '询价（价格实惠）',
      guestFee: '欢迎单人光顾 · 1对1匹配',
      dressCode: '着装不限，休闲即可',
      operatingHours: '24小时全年无休',
      faqs: [
        { question: '달토在哪里？', answer: '位于首尔江南区德黑兰路150号三井酒店地下1层(驿三洞604-11)，距离地铁9号线彦州站约300米，步行5分钟以内。' },
        { question: '第一次去也可以吗？', answer: '可以，这里是我们最推荐给初次光临客人的场所。轻松亲切的氛围加上员工的自然引导，即使是第一次也不会感到拘束，台费也很实惠。' },
        { question: '달토有多少个包间？', answer: '拥有约60间大型包间，是江南地区数一数二的超大规模场所。全天都有大量人员在岗，选择范围很广。' },
        { question: '可以一个人去吗？', answer: '可以，달토采用一对一匹配模式运营，独自前往完全不会尴尬。' },
        { question: '如何预约？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询，我们会立即为您安排달토。' },
        { question: '可以停车吗？', answer: '可以。现场有代客泊车经理常驻，通过我们预约可享受免费代客泊车服务。' },
      ],
    },
    jp: {
      description: '달토（走るうさぎ）は驛三洞にある三井ホテルの地下に位置し、約60室を誇る江南最大級のハイパブリックKTVです。リーズナブルな料金と親しみやすい雰囲気で、初めての方に最もおすすめする施設であり、入場もスピーディーです。入口のうさぎのぬいぐるみがトレードマークで、ホテル地下という構造のため外部への露出がほとんどなく、ビジネスの集まりにも最適です。地下鉄9号線彦州駅から徒歩約5分です。',
      features: ['初めての方に最適 · リラックスした雰囲気', '約60室の大型ルーム', '三井ホテル地下 · プライバシー確保', '無料バレーパーキング'],
      tablePrice: 'お問い合わせください（リーズナブル）',
      guestFee: 'おひとり様歓迎 · 1対1マッチング',
      dressCode: 'カジュアルな服装でOK',
      operatingHours: '24時間年中無休',
      faqs: [
        { question: '달토（走るうさぎ）はどこにありますか？', answer: 'ソウル特別市江南区テヘラン路150、三井ホテル地下1階（驛三洞604-11）にあります。地下鉄9号線彦州駅から約300m、徒歩5分以内です。' },
        { question: '初めての訪問でも大丈夫ですか？', answer: 'はい、初めての方に最もおすすめしている施設です。親しみやすくリラックスした雰囲気で、スタッフが自然にご案内しますので初回でも安心です。料金も手頃です。' },
        { question: '달토の部屋数はどれくらいですか？', answer: '約60室の大型ルームを保有しており、江南でも屈指の大規模施設です。常に多くのスタッフが出勤しているため、選択肢が豊富です。' },
        { question: '一人で訪問しても大丈夫ですか？', answer: 'はい、可能です。달토は1対1マッチング制で運営されているため、お一人様でも違和感なくお楽しみいただけます。' },
        { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせいただければ、すぐに달토へご案内いたします。' },
        { question: '駐車は可能ですか？', answer: 'はい、可能です。バレーパーキング担当者が常駐しており、当店経由でご予約いただくと無料でご利用いただけます。' },
      ],
    },
  },
  perfect: {
    en: {
      description: "Perfect occupies the site of the legendary Octagon Club, making it Gangnam's largest high-public KTV venue. With 100–150+ staff on shift every day, weekday or weekend, and expansive VVIP rooms, the scale and choice are unmatched. A fixed-rate pricing system keeps costs transparent, and a high ratio of solo guests means it's just as comfortable to visit alone. Transgender performances during select time slots are a unique, popular draw. It's inside Eliana Hotel B1/B2 in Nonhyeon-dong, 7 minutes on foot from Eonju Station (Line 9).",
      features: ["Gangnam's largest scale · 100–150+ staff daily", 'Expansive VVIP rooms · lavish facilities', 'Performances at select times', 'Solo-visitor system fully set up'],
      tablePrice: 'Inquire for pricing (fixed-rate system)',
      guestFee: 'Solo visitors welcome · 1:1 matching',
      dressCode: 'Casual attire is fine',
      operatingHours: 'Open 24/7',
      faqs: [
        { question: 'Where is Perfect located?', answer: 'At Eliana Hotel B1/B2, 152 Nonhyeon-dong (645 Nonhyeon-ro), Gangnam-gu — a 7-minute walk from Eonju Station (Line 9) toward Hakdong Station (Line 7).' },
        { question: 'Is it really the biggest high-public venue in Gangnam?', answer: 'Yes. Built on the former site of Octagon Club, it has the largest room count and floor space among Gangnam high-public venues, with 100–150+ staff on shift daily.' },
        { question: 'Is it okay to visit alone?', answer: 'Yes. Despite being a large venue, Perfect has a high ratio of solo guests, and the system is built so single visitors never feel out of place.' },
        { question: "What's the difference between Perfect and Dessert (formerly Perfect)?", answer: 'Dessert is a rebrand of the original Perfect under a new name. Perfect and Dessert now operate separately within the same Eliana Hotel building.' },
        { question: 'How do I make a reservation?', answer: 'Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp and we will guide you right away.' },
        { question: 'Is parking available?', answer: 'Yes. A valet is on site, and parking is complimentary when you book through us.' },
      ],
    },
    cn: {
      description: '퍼펙트坐落在传奇옥타곤俱乐部的旧址上，是江南规模最大的高端包房KTV。无论平日还是周末，每天都有100~150名以上员工在岗，加上宽敞的VVIP大包间，规模和选择范围首屈一指。明码标价的固定价格体系让消费透明，单人客人的比例也很高，一个人前往同样自在。特定时段的变装表演是其独特的人气亮点。位于논현동엘리에나酒店B1/B2层，距地铁9号线彦州站步行7分钟。',
      features: ['江南规模最大 · 每日100~150名以上员工在岗', '宽敞VVIP包间 · 豪华设施', '特定时段表演', '完善的单人访问体系'],
      tablePrice: '询价（固定价格体系）',
      guestFee: '欢迎单人光顾 · 1对1匹配',
      dressCode: '着装不限，休闲即可',
      operatingHours: '24小时全年无休',
      faqs: [
        { question: '퍼펙트在哪里？', answer: '位于江南区논현동152엘리에나酒店B1/B2层(논현路645号)，从地铁9号线彦州站步行至7号线学洞站方向约7分钟。' },
        { question: '真的是江南规模最大吗？', answer: '是的。这里由原옥타곤俱乐部旧址改建而成，房间数量与规模在江南高端包房KTV中位居第一，每日约有100~150名以上员工在岗。' },
        { question: '可以一个人去吗？', answer: '可以。퍼펙트虽是大型场所，但单人客人比例很高，系统完善，独自前往完全不会尴尬。' },
        { question: '퍼펙트和디저트(原퍼펙트)有什么区别？', answer: '디저트是原퍼펙트更名后的品牌升级版本。目前퍼펙트和디저트在同一栋엘리에나酒店内分别独立运营。' },
        { question: '如何预约？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询，我们会立即为您安排。' },
        { question: '可以停车吗？', answer: '可以。现场有代客泊车经理常驻，通过我们预约可享受免费代客泊车服务。' },
      ],
    },
    jp: {
      description: '퍼펙트は伝説의옥타곤クラブの跡地に位置し、江南最大規模のハイパブリックKTVです。平日・週末問わず毎日100~150名以上のスタッフが出勤し、広々としたVVIPルームも完備しているため、規模と選択肢は他の追随を許しません。定価制で料金体系が透明なうえ、おひとり様の比率も高く、一人での訪問も快適です。特定の時間帯に行われるトランスジェンダーパフォーマンスも人気の理由の一つです。논현동엘리에나ホテルB1/B2に位置し、地下鉄9号線彦州駅から徒歩7分です。',
      features: ['江南最大規模 · 毎日100~150名以上出勤', '広々としたVVIPルーム · 豪華な施設', '特定時間帯のパフォーマンス', 'おひとり様システム完備'],
      tablePrice: 'お問い合わせください（定価制）',
      guestFee: 'おひとり様歓迎 · 1対1マッチング',
      dressCode: 'カジュアルな服装でOK',
      operatingHours: '24時間年中無休',
      faqs: [
        { question: '퍼펙트はどこにありますか？', answer: '江南区논현동152엘리에나ホテルB1/B2（논현路645）にあります。地下鉄9号線彦州駅から7号線鶴洞駅方面へ徒歩7分です。' },
        { question: '本当に江南最大規模なのですか？', answer: 'はい。旧옥타곤クラブの跡地にできた施設で、部屋数・規模ともに江南のハイパブリックの中で最大級です。毎日100~150名以上が出勤しています。' },
        { question: '一人で訪問しても大丈夫ですか？', answer: 'はい。대형施設ですが、おひとり様の比率が高く、一人での訪問でも全く違和感のないシステムが整っています。' },
        { question: '퍼펙트と디저트(旧퍼펙트)の違いは何ですか？', answer: '디저트は既存의퍼펙트が名称を変更してリブランディングした施設です。現在は同じ엘리에나ホテル内でそれぞれ別に運営されています。' },
        { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせいただければ、すぐにご案内いたします。' },
        { question: '駐車は可能ですか？', answer: 'はい、可能です。バレーパーキング担当者が常駐しており、当店経由でご予約いただくと無料でご利用いただけます。' },
      ],
    },
  },
  uanme: {
    en: {
      description: "U&ME has held the same spot in Jamwon-dong, near Sinsa Station, for close to 8 years — a long-running, trusted name among Gangnam's high-public venues. Every room is fully soundproofed and sight-blocked for maximum privacy, and the venue offers a free pick-up service (by advance booking) across Gangnam along with a dedicated valet system. Its location right next to Sinsa Station, Apgujeong, and Garosu-gil makes it easy to move on to a second spot afterward. With a loyal regular clientele, it's known as one of the venues with the fewest on-site mix-ups — no last-minute cancellations or room-assignment delays.",
      features: ['8 years running · Stable operation', 'Every room fully soundproofed', 'Free pick-up across Gangnam (advance booking)', 'Near Sinsa, Apgujeong & Garosu-gil'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Solo visitors welcome · 1:1 matching',
      dressCode: 'Casual attire is fine',
      operatingHours: 'Open 24/7',
      faqs: [
        { question: 'Where is U&ME located?', answer: "It's in Jamwon-dong, Seocho-gu, near Sinsa Station — also very close to Apgujeong and Garosu-gil." },
        { question: "What's U&ME's biggest strength?", answer: 'Every room is fully soundproofed and sight-blocked for outstanding privacy, and a free Gangnam-wide pick-up service is available with advance booking.' },
        { question: 'How do I book U&ME?', answer: 'Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp and we will guide you right away.' },
        { question: 'Is parking available?', answer: 'Paid parking is available nearby. Exact directions are provided once your booking is confirmed.' },
      ],
    },
    cn: {
      description: '유앤미在서초구잠원동（신사站附近）同一地点稳定经营近8年，是江南高端包房KTV中历史悠久、值得信赖的老牌场所。所有包间均采用完全独立的隔音与视线遮挡结构，最大限度保障隐私，并提供江南地区免费接送服务（需提前预约）及专属代客泊车系统。地理位置紧邻신사站、압구정、가로수길，方便续场移动。拥有大批稳定的常客，也是现场失误最少、几乎不出现预约爽约或包间延误情况的场所之一。',
      features: ['经营8年 · 运营稳定', '全包间完全独立隔音结构', '江南地区免费接送（需预约）', '紧邻신사·압구정·가로수길'],
      tablePrice: '询价',
      guestFee: '欢迎单人光顾 · 1对1匹配',
      dressCode: '着装不限，休闲即可',
      operatingHours: '24小时全年无休',
      faqs: [
        { question: '유앤미在哪里？', answer: '位于首尔서초구잠원동，신사站附近，距압구정、가로수길也非常近。' },
        { question: '유앤미最大的优势是什么？', answer: '所有包间均为完全独立的隔音、遮挡视线结构，隐私性极佳，并提供江南地区免费接送服务（需提前预约）。' },
        { question: '如何预约유앤미？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询，我们会立即为您安排。' },
        { question: '可以停车吗？', answer: '附近设有收费停车场，具体停车指引将在预约确认后提供。' },
      ],
    },
    jp: {
      description: '유앤미は서초구잠원동（신사駅近く）で約8年間同じ場所を守り続けてきた、江南のハイパブリックの中でも歴史と信頼のある老舗です。全室完全独立の防音・視線遮断構造でプライバシーを最大限確保し、江南エリア無料送迎サービス（事前予約制）と専属バレーサービスも充実しています。신사駅・압구정・가로수길に非常に近く、2軒目への移動もスムーズです。常連客が多く、予約のドタキャンや部屋割りの遅延といった現場の混乱が最も少ない施設の一つとして知られています。',
      features: ['8年の実績 · 安定した運営', '全室完全独立防音構造', '江南エリア無料送迎（要予約）', '신사·압구정·가로수길に近接'],
      tablePrice: 'お問い合わせください',
      guestFee: 'おひとり様歓迎 · 1対1マッチング',
      dressCode: 'カジュアルな服装でOK',
      operatingHours: '24時間年中無休',
      faqs: [
        { question: '유앤미はどこにありますか？', answer: 'ソウル서초구잠원동、신사駅近くにあります。압구정・가로수길にも非常に近いです。' },
        { question: '유앤미最大の強みは何ですか？', answer: '全室完全独立の防音・視線遮断構造でプライバシー性が高く、江南エリア無料送迎サービス（事前予約制）もご利用いただけます。' },
        { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせいただければ、すぐにご案内いたします。' },
        { question: '駐車は可能ですか？', answer: '近隣の有料駐車場をご利用いただけます。正確な駐車案内は予約確定後にご案内します。' },
      ],
    },
  },
  dopamine: {
    en: {
      description: "Dopamine lives up to its name — a young, trendy, high-energy venue built around a striking SNS-worthy interior and mood lighting with a trendy soundtrack. That vibe makes it especially popular for birthday parties and group get-togethers. The managers on shift skew young and lively, so it's the best fit for anyone chasing a party atmosphere or a fun, upbeat night. Its location near COEX and the Teheran-ro business district also makes it convenient for business gatherings. It's a 5-minute walk from Exit 10 of Seonreung Station (Line 2).",
      features: ['SNS-worthy interior · Trendy soundtrack', 'Popular for birthdays & group parties', 'Young, energetic manager matching', 'Near COEX & Teheran-ro'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Solo visitors welcome · 1:1 matching',
      dressCode: 'Casual attire is fine',
      operatingHours: 'Open 24/7',
      faqs: [
        { question: 'Where is Dopamine located?', answer: '38 Seonreung-ro 92-gil, Samseong-dong, Gangnam-gu — a 5-minute walk from Exit 10 of Seonreung Station (Line 2), toward the POSCO intersection.' },
        { question: "What's the vibe at Dopamine like?", answer: 'A striking, SNS-worthy interior with trendy music and lighting. Young and energetic, it suits party moods, birthdays, and lively group dinners best.' },
        { question: 'Can I book birthday parties or group events?', answer: "Yes — Dopamine's bold, photogenic interior makes it popular for birthdays and social gatherings. Let us know your group size and purpose and we'll match the right room." },
        { question: 'How do I make a reservation?', answer: 'Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp and we will guide you right away.' },
        { question: 'Is parking available?', answer: 'Yes. A valet is on site, and parking is complimentary when you book through us.' },
      ],
    },
    cn: {
      description: '도파민正如其名——年轻、时尚、充满活力，以极具社交媒体感的装修和氛围灯光、潮流音乐打造整体气质。这种氛围让它尤其受生日派对和团体聚会的欢迎。在岗经理年轻有活力，最适合追求派对气氛或想要开心热闹一晚的客人。地理位置紧邻COEX和테헤란로商圈，商务聚会同样方便。距地铁2号线선릉站10号出口步行5分钟。',
      features: ['社交媒体感装修 · 潮流音乐', '生日派对·团体聚会热门', '年轻活力经理匹配', '紧邻COEX·테헤란로商圈'],
      tablePrice: '询价',
      guestFee: '欢迎单人光顾 · 1对1匹配',
      dressCode: '着装不限，休闲即可',
      operatingHours: '24小时全年无休',
      faqs: [
        { question: '도파민在哪里？', answer: '位于江南区삼성동선릉路92街38号，距地铁2号线선릉站10号出口步行5分钟，朝포스코十字路口方向即到。' },
        { question: '도파민是什么风格？', answer: '极具社交媒体感的华丽装修，搭配潮流音乐与灯光。年轻活力，最适合派对气氛、生日聚会、团体聚餐等热闹场合。' },
        { question: '可以预约生日派对或团体活动吗？', answer: '可以，도파민以视觉冲击力极强的装修著称，深受生日派对和聚会欢迎。请提前告知人数和目的，我们会为您安排合适的包间。' },
        { question: '如何预约？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询，我们会立即为您安排。' },
        { question: '可以停车吗？', answer: '可以。现场有代客泊车经理常驻，通过我们预约可享受免费代客泊车服务。' },
      ],
    },
    jp: {
      description: '도파민はその名の通り、若くトレンディでエネルギッシュな施設です。SNS映えする華やかな内装とムード照明、トレンディなBGMが特徴で、誕生日パーティーや団体の集まりに特に人気があります。出勤するマネージャーも若く活気があるため、パーティー気分や楽しい夜を求める方に最適です。COEXやテヘラン路のビジネス街にも近く、ビジネスの集まりにも便利です。地下鉄2号線선릉駅10番出口から徒歩5分です。',
      features: ['SNS映えする内装 · トレンディなBGM', '誕生日パーティー·団体宴会に人気', '若く活気あるマネージャーマッチング', 'COEX·테헤란路に近接'],
      tablePrice: 'お問い合わせください',
      guestFee: 'おひとり様歓迎 · 1対1マッチング',
      dressCode: 'カジュアルな服装でOK',
      operatingHours: '24時間年中無休',
      faqs: [
        { question: '도파민はどこにありますか？', answer: '江南区삼성동선릉路92街38にあります。地下鉄2号線선릉駅10番出口から徒歩5分、포스코交差点方面です。' },
        { question: '도파민はどんな雰囲気ですか？', answer: 'SNS映えする華やかな内装とトレンディなBGM・照明が特徴です。若く活気があり、パーティー気分や誕生日会、団体宴会に最適です。' },
        { question: '誕生日パーティーや団体イベントも可能ですか？', answer: 'はい、도파민は視覚的な華やかさを極めた内装で誕生日パーティーや親睦会に人気です。事前に人数と目的をお知らせください。' },
        { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせいただければ、すぐにご案内いたします。' },
        { question: '駐車は可能ですか？', answer: 'はい、可能です。バレーパーキング担当者が常駐しており、当店経由でご予約いただくと無料でご利用いただけます。' },
      ],
    },
  },
  elite: {
    en: {
      description: "Elite (formerly Sara Issne) sits at the heart of the Teheran-ro business district and carries on the solid sales team and veteran managers of the legendary Sara Issne brand. It sees plenty of purposeful visits — company dinners, business meetings — and is well regarded for reading guest needs quickly and accurately. Its private atmosphere and smooth, seamless service stand out. It's a 5-minute walk from Exit 1 of Seonreung Station (Line 2).",
      features: ["Inherits Sara Issne's legacy & veteran managers", 'Ideal for business meetings & dinners', 'Fast, same-day entry', '5 min walk from Seonreung Stn. Exit 1'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Solo visitors welcome · 1:1 matching',
      dressCode: 'Casual attire is fine',
      operatingHours: 'Open 24/7',
      faqs: [
        { question: 'Where is Elite (formerly Sara Issne) located?', answer: 'Basement floors 1–3, 890-38 Daechi-dong, Gangnam-gu — a 5-minute walk from Exit 1 of Seonreung Station (Line 2).' },
        { question: "What's the relationship between Sara Issne and Elite?", answer: 'Elite carries on the legacy of the well-known Sara Issne brand, with the same solid sales team and veteran managers from the Sara Issne days still in place — a proven level of customer care.' },
        { question: 'Is Elite suitable for business gatherings?', answer: "Yes, very much so. Located at the heart of the Teheran-ro business district, it sees frequent company dinners and business meetings." },
        { question: 'How do I make a reservation?', answer: 'Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp and we will guide you right away.' },
        { question: 'Is parking available?', answer: 'Yes. A valet is on site, and parking is complimentary when you book through us.' },
      ],
    },
    cn: {
      description: '엘리트(原사라있네)位于테헤란로商务圈核心地带，完整传承了传奇品牌사라있네扎实的营业团队与资深经理阵容。这里常有明确目的性的聚会，如公司会餐、商务洽谈，以对客人需求判断迅速准确而广受好评。私密的氛围与流畅的服务能力尤为出色。距地铁2号线선릉站1号出口步行5分钟。',
      features: ['传承사라있네·资深经理阵容', '商务聚会·会餐最佳选择', '当日快速入场', '距선릉站1号出口步行5分钟'],
      tablePrice: '询价',
      guestFee: '欢迎单人光顾 · 1对1匹配',
      dressCode: '着装不限，休闲即可',
      operatingHours: '24小时全年无休',
      faqs: [
        { question: '엘리트(原사라있네)在哪里？', answer: '位于江南区대치동890-38地下1~3层，距地铁2号线선릉站1号出口步行5分钟以内。' },
        { question: '사라있네和엘리트是什么关系？', answer: '엘리트继承了知名大型品牌사라있네的传统，사라있네时期积累的扎实营业团队与资深经理原班人马仍在，服务水准经过验证。' },
        { question: '엘리트适合商务聚会吗？', answer: '非常适合。位于테헤란로商务圈核心地带，公司会餐、商务聚会需求很多。' },
        { question: '如何预约？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询，我们会立即为您安排。' },
        { question: '可以停车吗？', answer: '可以。现场有代客泊车经理常驻，通过我们预约可享受免费代客泊车服务。' },
      ],
    },
    jp: {
      description: '엘리트（旧사라있네）はテヘラン路のビジネス街の中心に位置し、伝説的ブランド사라있네の盤石な営業チームとベテランマネージャー陣をそのまま継承しています。会社の宴会やビジネスの集まりなど目的の明確な利用が多く、顧客対応やニーズの把握が非常に早いと定評があります。プライベートな雰囲気と滑らかな進行力に優れています。地下鉄2号線선릉駅1番出口から徒歩5分です。',
      features: ['사라있네の伝統継承 · ベテランマネージャー陣', 'ビジネスの集まり·宴会に最適', '当日スピード入場', '선릉駅1番出口徒歩5分'],
      tablePrice: 'お問い合わせください',
      guestFee: 'おひとり様歓迎 · 1対1マッチング',
      dressCode: 'カジュアルな服装でOK',
      operatingHours: '24時間年中無休',
      faqs: [
        { question: '엘리트（旧사라있네）はどこにありますか？', answer: '江南区대치동890-38地下1~3階にあります。地下鉄2号線선릉駅1番出口から徒歩5分以内です。' },
        { question: '사라있네와엘리트はどんな関係ですか？', answer: '엘리트は伝統的な大型ブランド사라있네の名跡を継承して運営されています。사라있네時代からの盤石な営業チームとベテランマネージャーがそのまま在籍しています。' },
        { question: 'ビジネスの集まりに엘리트は適していますか？', answer: 'はい、非常に適しています。テヘラン路のビジネス街の中心に位置し、会社の宴会やビジネスの集まりが多いです。' },
        { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせいただければ、すぐにご案内いたします。' },
        { question: '駐車は可能ですか？', answer: 'はい、可能です。バレーパーキング担当者が常駐しており、当店経由でご予約いただくと無料でご利用いただけます。' },
      ],
    },
  },
  dessert: {
    en: {
      description: 'Dessert is a rebrand of the beloved Perfect venue under a new name, located in the same Eliana Hotel B1/B2 in Nonhyeon-dong. Rather than an intense, over-the-top vibe, it favors calm, easy conversation — the rooms are quiet, with little noise bleed, making it a favorite for guests who want genuine conversation or an unhurried drink. Attentive, one-on-one care from its managers, tailored to each guest, is what sets it apart. It is a 7-minute walk from Eonju Station (Line 9) toward Hakdong Station (Line 7).',
      features: ["Perfect's DNA · Rebranded & refined", 'Calm, quiet room atmosphere', 'Attentive 1:1 personalized care', 'Inside Eliana Hotel B1/B2'],
      tablePrice: 'Inquire for pricing',
      guestFee: 'Solo visitors welcome · 1:1 matching',
      dressCode: 'Casual attire is fine',
      operatingHours: 'Open 24/7',
      faqs: [
        { question: 'Where is Dessert (formerly Perfect) located?', answer: 'At Eliana Hotel B1/B2, 152 Nonhyeon-dong (645 Nonhyeon-ro), Gangnam-gu — a 7-minute walk from Eonju Station (Line 9) toward Hakdong Station (Line 7).' },
        { question: "What's the difference between Dessert and Perfect?", answer: 'Dessert is the original Perfect under a new, rebranded name. It leans toward a quieter, conversation-focused mood than Perfect, with attentive, personalized care as its strength.' },
        { question: "What's the atmosphere at Dessert like?", answer: 'Calm and clean communication is the priority. Rooms are quiet with little noise interference — ideal for guests who want genuine conversation or an unhurried drink.' },
        { question: 'How do I make a reservation?', answer: 'Call 010-9778-8571 or message us on WeChat, LINE, or WhatsApp and we will guide you right away.' },
        { question: 'Is parking available?', answer: 'Yes. A valet is on site, and parking is complimentary when you book through us.' },
      ],
    },
    cn: {
      description: '디저트是深受喜爱的퍼펙트更名后的品牌升级版本，同样位于논현동엘리에나酒店B1/B2层。相比刺激张扬的氛围，디저트更注重舒适安静的交流，包间隔音好、噪音干扰少，深受希望真诚对话或悠闲小酌的客人喜爱。为每位客人提供量身定制服务的经理们的贴心照顾，是其最大的差异化优势。距地铁9号线彦州站步行至7号线学洞站方向约7分钟。',
      features: ['퍼펙트基因 · 品牌升级', '安静沉稳的包间氛围', '1对1贴心定制服务', '엘리에나酒店B1/B2层'],
      tablePrice: '询价',
      guestFee: '欢迎单人光顾 · 1对1匹配',
      dressCode: '着装不限，休闲即可',
      operatingHours: '24小时全年无休',
      faqs: [
        { question: '디저트(原퍼펙트)在哪里？', answer: '位于江南区논현동152엘리에나酒店B1/B2层(논현路645号)，从地铁9号线彦州站步行至7号线学洞站方向约7分钟。' },
        { question: '디저트和퍼펙트有什么区别？', answer: '디저트是既有퍼펙트更名后的品牌升级版本，相比퍼펙트更注重安静舒适的交流氛围，贴心照顾与定制服务是其优势。' },
        { question: '디저트是什么氛围？', answer: '注重舒适整洁的交流。包间隔音好、干扰少，适合想要真诚对话或悠闲小酌的客人，满意度很高。' },
        { question: '如何预约？', answer: '请拨打电话(010-9778-8571)或通过微信/LINE/WhatsApp咨询，我们会立即为您安排。' },
        { question: '可以停车吗？', answer: '可以。现场有代客泊车经理常驻，通过我们预约可享受免费代客泊车服务。' },
      ],
    },
    jp: {
      description: '디저트は人気施設だった퍼펙트が名称を変更してリブランディングした施設で、同じく논현동엘리에나ホテルB1/B2に位置しています。刺激的で過剰な雰囲気よりも、落ち着いた快適な会話を重視しているのが特徴です。騒音の干渉が少なく静かな会話が可能なルーム環境が整っており、本音の会話や余裕のある一杯を求める方に満足度が高いです。お客様一人ひとりに合わせたマネージャーの密着ケアが差別化ポイントです。地下鉄9号線彦州駅から7号線鶴洞駅方面へ徒歩7分です。',
      features: ['퍼펙트DNA · リブランディング', '落ち着いた静かなルームの雰囲気', '1対1のきめ細やかなケア', '엘리에나ホテルB1/B2に位置'],
      tablePrice: 'お問い合わせください',
      guestFee: 'おひとり様歓迎 · 1対1マッチング',
      dressCode: 'カジュアルな服装でOK',
      operatingHours: '24時間年中無休',
      faqs: [
        { question: '디저트（旧퍼펙트）はどこにありますか？', answer: '江南区논현동152엘리에나ホテルB1/B2（논현路645）にあります。地下鉄9号線彦州駅から7号線鶴洞駅方面へ徒歩7分です。' },
        { question: '디저트と퍼펙트の違いは何ですか？', answer: '디저트は既存의퍼펙트が名称を変更してリブランディングした施設です。퍼펙트より落ち着いた会話中心の雰囲気を追求し、密着ケアと個別対応が強みです。' },
        { question: '디저트はどんな雰囲気ですか？', answer: '落ち着いた清潔なコミュニケーションを重視しています。騒音が少なく静かな会話が可能なルーム環境が整っており、本音の会話や余裕のある一杯を求める方に満足度が高いです。' },
        { question: '予約方法は？', answer: 'お電話(010-9778-8571)またはWeChat・LINE・WhatsAppでお問い合わせいただければ、すぐにご案内いたします。' },
        { question: '駐車は可能ですか？', answer: 'はい、可能です。バレーパーキング担当者が常駐しており、当店経由でご予約いただくと無料でご利用いただけます。' },
      ],
    },
  },
}

export function getVenueI18n(venueId: string, lang: Lang): VenueI18n | null {
  if (lang === 'ko') return null
  return venueTranslations[venueId]?.[lang] ?? null
}
