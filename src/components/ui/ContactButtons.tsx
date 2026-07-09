'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const PHONE = '010-9778-8571'
const KAKAO_ID = 'alrep0410'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

export default function ContactButtons({ size = 'md' }: Props) {
  const { lang } = useLanguage()
  const [popup, setPopup] = useState<null | 'kakao'>(null)
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

  const copyLabel = lang === 'zh' ? '复制ID' : lang === 'ja' ? 'IDをコピー' : lang === 'en' ? 'Copy ID' : 'ID 복사'

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

        {/* 카카오톡 — 전 언어 공통 */}
        <button
          onClick={() => setPopup('kakao')}
          className={`inline-flex items-center gap-2 font-bold text-black rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${px}`}
          style={{ background: '#FAE100', boxShadow: '0 0 14px rgba(250,225,0,0.3)' }}
        >
          💬 KakaoTalk
        </button>
      </div>

      {/* ID 팝업 */}
      {popup && (
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

            <div className="text-5xl mb-3">💬</div>
            <h3 className="text-white font-bold text-xl mb-2">KakaoTalk</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {lang === 'zh'
                ? '请添加以下KakaoTalk ID后发消息咨询。'
                : lang === 'ja'
                  ? '下記IDをKakaoTalkで検索し、友達追加後にお問い合わせください。'
                  : lang === 'en'
                    ? 'Add the ID below on KakaoTalk and send us a message.'
                    : '아래 ID를 검색해서 친구 추가 후 문의해 주세요.'}
            </p>

            <div className="bg-dark-800 border border-white/10 rounded-xl px-6 py-3 mb-5">
              <span className="text-white font-mono text-lg font-bold tracking-widest">{KAKAO_ID}</span>
            </div>

            <button
              onClick={() => copyId(KAKAO_ID)}
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
