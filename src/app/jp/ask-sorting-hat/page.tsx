import ChatComponent from '@/components/ChatComponent'

export const metadata = {
  title: '組分け帽子に質問 | ホグワーツ寮組分けテスト',
  description: '組分け帽子と会話して、あなたに最適なホグワーツの寮を見つけましょう。',
}

export default function AskSortingHatPage() {
  return (
    <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <ChatComponent />
    </main>
  )
} 