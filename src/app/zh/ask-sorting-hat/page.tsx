import ChatComponent from '@/components/ChatComponent'

export const metadata = {
  title: '询问分院帽 | 哈利波特学院测试',
  description: '与分院帽对话，了解更多关于你可能属于的霍格沃茨学院。',
}

export default function AskSortingHatPage() {
  return (
    <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <ChatComponent />
    </main>
  )
} 