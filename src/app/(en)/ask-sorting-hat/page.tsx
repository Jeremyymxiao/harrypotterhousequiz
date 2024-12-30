import ChatComponent from '@/components/ChatComponent'

export const metadata = {
  title: 'Ask the Sorting Hat | Harry Potter House Quiz',
  description: 'Have a conversation with the Sorting Hat and learn more about your potential Hogwarts house.',
}

export default function AskSortingHatPage() {
  return (
    <main className="quiz-bg min-h-screen flex items-center justify-center p-4">
      <div className="magic-particles" />
      <ChatComponent />
    </main>
  )
} 