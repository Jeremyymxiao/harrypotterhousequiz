import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "子供向けホグワーツ寮分け帽子テスト | 楽しい組分けクイズ",
  description: "子供向けに特別にデザインされた魔法のホグワーツ寮分けクイズ！簡単で子供に優しい質問で、お子様のホグワーツの寮を見つけましょう。",
  keywords: "子供向けホグワーツ寮分け, 子供向けハリーポッタークイズ, キッズフレンドリーな組分け帽子テスト, 子供向けハリーポッター",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 