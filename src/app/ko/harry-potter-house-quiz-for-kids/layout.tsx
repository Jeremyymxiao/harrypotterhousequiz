import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "어린이를 위한 호그와트 기숙사 배정 퀴즈 | 재미있는 분류 모자 테스트",
  description: "어린이들을 위해 특별히 디자인된 마법 같은 호그와트 기숙사 배정 퀴즈! 간단하고 아이들이 이해하기 쉬운 질문으로 당신의 자녀가 속할 기숙사를 찾아보세요.",
  keywords: "어린이 호그와트 기숙사 퀴즈, 아이들을 위한 호그와트 테스트, 어린이 친화적 분류 모자 테스트, 어린이를 위한 해리포터",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 