import ChatComponent from '@/components/ChatComponent'

export const metadata = {
  title: 'Спросить Распределяющую шляпу | Тест на факультет Хогвартса',
  description: 'Поговорите с Распределяющей шляпой, чтобы узнать больше о факультете Хогвартса, который вам подходит.',
}

export default function AskSortingHatPage() {
  return (
    <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <ChatComponent />
    </main>
  )
} 