import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '호그와트 기숙사 배정식 | 해리 포터 기숙사 테스트',
  description: '공식 분류 테스트로 당신의 진정한 호그와트 기숙사를 발견하세요! 마법의 여정을 시작하고 그리핀도르, 후플푸프, 래번클로, 슬리데린 중 어디에 속하는지 알아보세요.',
  keywords: ['호그와트 기숙사 배정식', '해리 포터 기숙사 테스트', '분류 모자', '그리핀도르', '후플푸프', '래번클로', '슬리데린', '내 호그와트 기숙사는 어디', '해리 포터 퀴즈'],
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/ko/quiz'
  },
  openGraph: {
    title: '당신의 호그와트 기숙사는? | 공식 분류 테스트',
    description: '공식 분류 테스트로 당신의 진정한 호그와트 기숙사를 발견하세요! 분류 모자가 당신이 그리핀도르, 후플푸프, 래번클로, 슬리데린 중 어디에 속하는지 알려드립니다.'
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
} 