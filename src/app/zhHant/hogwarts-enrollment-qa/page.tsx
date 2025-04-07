import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "霍格華茲入學問答 | 如何進入霍格華茲魔法與巫術學院",
  description: "了解霍格華茲魔法與巫術學院的入學流程、錄取標準和常見問題。探索如何獲得入學通知書、學費信息以及其他關於魔法世界的重要細節。",
  keywords: "霍格華茲入學, 霍格華茲錄取, 霍格華茲信件, 霍格華茲問題, 霍格華茲學費, 霍格華茲校服, 購買魔杖, 斜角巷",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/zhHant/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "霍格華茲入學問答 | 魔法學校入學指南",
    description: "探索霍格華茲魔法與巫術學院的入學流程、錄取標準和常見問題。了解如何獲得霍格華茲入學通知書！"
  }
}

export default function HogwartsEnrollmentQA() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 pt-24 pb-12 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-magic-hans text-center mb-8">
              霍格華茲入學問答
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-magic-hans leading-relaxed">
              歡迎來到霍格華茲入學問答頁面！在這裡，我們回答關於霍格華茲魔法與巫術學院入學的常見問題，幫助您理解入學流程和有關魔法世界最著名學校的相關信息。無論您是剛剛收到貓頭鷹送來的信件，還是純粹對魔法世界感到好奇，您都能在此找到所需的答案。
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">霍格華茲的入學流程是怎樣的？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                當一位年輕的女巫或巫師出生時，《錄取之羽》會將他們的名字記錄在《入學名冊》中，該名冊存放在霍格華茲的一個秘密房間裡。在他們的11歲生日時，霍格華茲會派貓頭鷹送去錄取信，正式歡迎他們加入學校！
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">如何申請霍格華茲？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                您不需要主動申請。霍格華茲會自行挑選合格的年輕女巫和巫師，並向他們發送錄取信。魔法能力是天生的，霍格華茲的魔法能夠識別所有擁有魔法天賦的孩子，並在適當的時機邀請他們。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">我已經超過11歲但沒有收到錄取信。我還有機會入學嗎？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                遺憾的是，根據霍格華茲的傳統，超過11歲的學生不能入學。霍格華茲的教育系統設計為從11歲開始的七年課程，確保學生能夠完整學習所有必要的魔法課程。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">網上提到的「預註冊」是什麼意思？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                網易開發了一款名為《哈利波特：魔法覺醒》的遊戲，在正式發布前進行了多次測試和活動，其中一些需要預註冊。這與小說和電影中描述的霍格華茲入學流程無關，純粹是遊戲的營銷活動。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">霍格華茲需要多少費用？如何支付？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                霍格華茲不收取學費。在魔法世界中，霍格華茲的教育對所有被錄取的女巫和巫師是免費的。學生只需購買教科書、魔杖、長袍和其他個人物品。請注意，在現實中，任何要求您支付霍格華茲學費的人很可能是在嘗試詐騙。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">如何購買校服和魔杖？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                收到錄取信後，年輕的女巫和巫師會前往斜角巷購買長袍、魔杖和其他學校用品。長袍可以在摩金夫人長袍專賣店購買，而魔杖則在奧利凡德魔杖店選購。記住，是魔杖選擇巫師，而不是相反！
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">霍格華茲真的存在嗎？</h2>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
                這是一個很好的問題。霍格華茲存在於每個相信它的人的心中。從技術上講，霍格華茲是J.K.羅琳在《哈利波特》系列中創造的虛構魔法學校。通過閱讀小說和觀看電影，我們可以了解這所學校的魔法和校園生活的美妙。
              </p>
              <p className="text-lg text-amber-200 font-magic-hans leading-relaxed mt-4">
                作為一個粉絲網站，我們認為每個人都能從閱讀這些精彩的魔法故事中受益。如果您真的想沉浸在魔法世界中，為何不從閱讀《哈利波特》系列開始您的魔法之旅呢？
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">魔法世界小知識</h2>
            <p className="text-lg text-amber-200 font-magic-hans leading-relaxed">
              霍格華茲魔法與巫術學院由四位偉大的巫師創立：戈德里克·格蘭芬多、赫爾加·赫奇帕奇、羅伊納·拉文克勞和薩拉查·斯萊特林。學校位於蘇格蘭的偏遠地區，對麻瓜（非魔法人士）不可見。霍格華茲城堡受到強大魔法的保護，包括反麻瓜咒語，使其在麻瓜眼中看起來像是一座廢棄的危險廢墟。
            </p>
            <p className="text-lg text-amber-200 font-magic-hans leading-relaxed mt-4">
              霍格華茲特快列車每年9月1日從倫敦國王十字車站的9¾站台出發，將學生帶到霍格華茲。學生必須穿過9號和10號站台之間隱藏的魔法屏障才能到達9¾站台。
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-magic-hans text-amber-400 mb-6">探索更多魔法世界</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/zhHant/quiz"
                className="magic-button px-8 py-4 text-xl font-magic-hans text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                參加分院測試
              </Link>
              <Link 
                href="/zhHant/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-magic-hans text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                與分院帽對話
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 