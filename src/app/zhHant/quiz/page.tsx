import QuizComponent from '@/components/QuizComponent'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: '哈利波特學院測試 | 開始你的分院之旅',
  description: '通過回答一系列精心設計的問題，讓分院帽幫你找到最適合的霍格華茲學院。你會被分到葛萊芬多、雷文克勞、赫夫帕夫還是史萊哲林？',
}

export default function QuizPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative backdrop-blur-sm">
      <MagicCursor />
      <QuizComponent />
    </main>
  )
}
