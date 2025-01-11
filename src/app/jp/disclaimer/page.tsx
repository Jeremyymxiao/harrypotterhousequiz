export const metadata = {
  title: "免責事項 | ハリーポッター寮テスト",
  description: "ハリーポッター寮テストの法的免責事項と著作権情報。",
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-magic-jp text-amber-400 text-center mb-8">免責事項</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">著作権表示</h2>
            <p className="text-amber-200">
              HARRY POTTERのキャラクター、名前、関連する表示は© & ™ Warner Bros. Entertainment Inc.の商標です。
              Harry Potter Publishing Rights © JKR. このウェブサイトはファンメイドプロジェクトであり、
              Warner Bros. Entertainment Inc.やJ.K. Rowlingとは提携、承認、後援、または特別な承認を受けていません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">ファンコンテンツ</h2>
            <p className="text-amber-200">
              このウェブサイトはファンによって、ファンのために作られた無料のエンターテインメントサービスです。
              ハリーポッターシリーズに関連するすべてのコンテンツは、ファンの楽しみとコミュニティ活動のためのフェアユースとして使用されています。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">商標情報</h2>
            <p className="text-amber-200">
              すべてのハリーポッター関連の商標、キャラクター、名前、表示はWarner Bros. Entertainment Inc.と
              J.K. Rowlingの所有物です。私たちはこれらの所有権を主張しません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">非営利利用</h2>
            <p className="text-amber-200">
              これは非営利、非商業的なファンウェブサイトです。このサービスから収益を得ることはなく、
              エンターテインメント目的のみで完全に無料で提供されています。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 