import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "霍格華茲分院儀式 | 哈利波特學院測試",
  description: "開始你的魔法之旅，參加我們官方的霍格華茲分院儀式。回答魔法問題，發現哪個學院真正匹配你內在的魔法特質！",
  keywords: "霍格華茲分院儀式, 哈利波特學院測試, 分類帽測試, 霍格華茲學院測試, 性格測試, 魔法世界測試",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/zhHant/quiz'
  },
  openGraph: {
    title: "體驗霍格華茲分院儀式 | 官方學院測試",
    description: "走進霍格華茲大禮堂，讓我們的魔法分類帽探索你的心靈、內心和精神，揭示你真正的學院歸屬。分院儀式等待著你！"
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 