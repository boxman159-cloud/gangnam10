'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const PHONE = '010-9778-8571'
const KAKAO_ID = 'alrep0410'
const WECHAT_ID = 'club_jack_livin'
const LINE_ID = 'clubjacklivin'
const WHATSAPP_NUMBER = '821097788571'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

type PopupKey = 'kakao' | 'wechat' | 'line'

const popupMeta: Record<PopupKey, { id: string; label: string; icon: string; bg: string; shadow: string; textColor: string }> = {
  kakao: { id: KAKAO_ID, label: 'KakaoTalk', icon: '💬', bg: '#FAE100', shadow: 'rgba(250,225,0,0.3)', textColor: '#050505' },
  wechat: { id: WECHAT_ID, label: 'WeChat', icon: '💚', bg: 'linear-gradient(135deg,#07C160,#05a050)', shadow: 'rgba(7,193,96,0.3)', textColor: '#ffffff' },
  line: { id: LINE_ID, label: 'LINE', icon: '💚', bg: 'linear-gradient(135deg,#06C755,#04a344)', shadow: 'rgba(6,199,85,0.3)', textColor: '#ffffff' },
}

const popupDesc: Record<string, (label: string) => string> = {
  ko: (label) => `아래 ID를 검색해서 친구 추가 후 문의해 주세요.`,
  en: (label) => `Add the ID below on ${label} and send us a message.`,
  cn: (label) => `请添加以下${label} ID后发消息咨询。`,
  jp: (label) => `下記IDを${label}で検索し、友達追加後にお問い合わせください。`,
}

export default function ContactButtons({ size = 'md' }: Props) {
  const { lang } = useLanguage()
  const [popup, setPopup] = useState<null | PopupKey>(null)
  const [copied, setCopied] = useState(false)

  const px =
    size === 'lg' ? 'px-8 py-4 text-base' :
    size === 'sm' ? 'px-4 py-2 text-xs' :
    'px-5 py-3 text-sm'

  const copyId = (id: string) => {
    navigator.clipboard.writeText(id)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyLabel = lang === 'cn' ? '复制ID' : lang === 'jp' ? 'IDをコピー' : lang === 'en' ? 'Copy ID' : 'ID 복사'
  const active = popup ? popupMeta[popup] : null
  const desc = active ? (popupDesc[lang] ?? popupDesc.ko)(active.label) : ''

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        {/* 전화 — 모든 언어 공통 */}
        <a
          href={`tel:${PHONE}`}
          className={`inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
          style={{ background: 'linear-gradient(135deg,#FF2D78,#BF00FF)', boxShadow: '0 0 18px rgba(255,45,120,0.35)' }}
        >
          📞 {PHONE}
        </a>

        {lang === 'ko' ? (
          // 카카오톡 — 한국어
          <button
            onClick={() => setPopup('kakao')}
            className={`inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
            style={{ background: popupMeta.kakao.bg, color: popupMeta.kakao.textColor, boxShadow: `0 0 14px ${popupMeta.kakao.shadow}` }}
          >
            💬 KakaoTalk
          </button>
        ) : (
          // WeChat · LINE · WhatsApp — 외국어
          <>
            <button
              onClick={() => setPopup('wechat')}
              className={`inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
              style={{ background: popupMeta.wechat.bg, color: popupMeta.wechat.textColor, boxShadow: `0 0 14px ${popupMeta.wechat.shadow}` }}
            >
              💚 WeChat
            </button>
            <button
              onClick={() => setPopup('line')}
              className={`inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
              style={{ background: popupMeta.line.bg, color: popupMeta.line.textColor, boxShadow: `0 0 14px ${popupMeta.line.shadow}` }}
            >
              💚 LINE
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
              style={{ background: 'linear-gradient(135deg,#25D366,#1DA851)', boxShadow: '0 0 14px rgba(37,211,102,0.3)' }}
            >
              💚 WhatsApp
            </a>
          </>
        )}
      </div>

      {/* ID 팝업 (카카오톡 · WeChat · LINE) */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => { setPopup(null); setCopied(false) }}
        >
          <div
            className="relative bg-dark-700 border border-white/10 rounded-2xl p-8 text-center w-80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setPopup(null); setCopied(false) }}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl leading-none"
            >✕</button>

            <div className="text-5xl mb-3">{active.icon}</div>
            <h3 className="text-white font-bold text-xl mb-2">{active.label}</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">{desc}</p>

            <div className="bg-dark-800 border border-white/10 rounded-xl px-6 py-3 mb-5">
              <span className="text-white font-mono text-lg font-bold tracking-widest">{active.id}</span>
            </div>

            <button
              onClick={() => copyId(active.id)}
              className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'btn-primary'
              }`}
            >
              {copied ? '✓ 복사 완료!' : copyLabel}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
