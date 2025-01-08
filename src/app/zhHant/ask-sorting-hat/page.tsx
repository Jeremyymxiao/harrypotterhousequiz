import ChatComponent from '@/components/ChatComponent'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: '與分院帽對話 | 探索你的霍格華茲學院',
  description: '與AI分院帽進行一場魔法對話，深入了解你的性格特質，發現你最適合的霍格華茲學院。讓這場對話幫助你找到歸屬！',
}

export default function AskSortingHatPage() {
  return (
    <main className="min-h-screen relative backdrop-blur-sm">
      <MagicCursor />
      <ChatComponent />
    </main>
  )
}
