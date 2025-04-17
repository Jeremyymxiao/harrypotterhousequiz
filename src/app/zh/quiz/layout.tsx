import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "霍格沃茨分院仪式 | 哈利波特学院测试",
  description: "开始你的魔法之旅，参加我们官方的霍格沃茨分院仪式。回答魔法问题，发现哪个学院真正匹配你内在的魔法特质！",
  keywords: "霍格沃茨分院仪式, 哈利波特学院测试, 分院帽测试, 霍格沃茨学院测试, 性格测试, 魔法世界测试",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/zh/quiz'
  },
  openGraph: {
    title: "体验霍格沃茨分院仪式 | 官方学院测试",
    description: "走进霍格沃茨大礼堂，让我们的魔法分院帽探索你的心灵、内心和精神，揭示你真正的学院归属。分院仪式等待着你！"
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 