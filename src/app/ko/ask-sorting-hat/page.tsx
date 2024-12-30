import ChatComponent from '@/components/ChatComponent'

export const metadata = {
  title: '분류 모자에게 물어보기 | 해리포터 기숙사 테스트',
  description: '분류 모자와 대화하며 당신이 속할 수 있는 호그와트 기숙사에 대해 더 알아보세요.',
}

export default function AskSortingHatPage() {
  return (
    <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <ChatComponent />
    </main>
  )
} 