import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ホグワーツ組分け儀式 | ハリーポッター寮テスト",
  description: "公式のホグワーツ組分け儀式で魔法の旅を始めましょう。魔法の質問に答えて、あなたの内なる魔法的資質に真に合う寮を発見しましょう！",
  keywords: "ホグワーツ組分け儀式, ハリーポッター寮テスト, 組分け帽子テスト, ホグワーツ寮テスト, 性格診断, 魔法世界テスト",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/jp/quiz'
  },
  openGraph: {
    title: "ホグワーツ組分け儀式を体験 | 公式寮テスト",
    description: "ホグワーツの大広間に足を踏み入れ、魔法の組分け帽子にあなたの心、魂、精神を調べてもらい、真の寮の所属を明らかにしましょう。組分け儀式があなたを待っています！"
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 