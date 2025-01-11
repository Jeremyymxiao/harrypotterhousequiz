export const metadata = {
  title: "プライバシーポリシー | ハリーポッター寮テスト",
  description: "ハリーポッター寮テストのプライバシーポリシー - あなたのプライバシーとデータの取り扱いについて。",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-magic-jp text-amber-400 text-center mb-8">プライバシーポリシー</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">はじめに</h2>
            <p className="text-amber-200">
              ハリーポッター寮テストへようこそ。私たちはあなたのプライバシーを尊重し、個人データの保護に努めています。
              このプライバシーポリシーでは、当ウェブサイトを訪問した際の情報の取り扱いについて説明します。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">収集する情報</h2>
            <p className="text-amber-200">
              私たちは、あなたの体験を向上させるために最小限の情報を収集します：
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>言語設定</li>
              <li>クイズの回答（永続的には保存されません）</li>
              <li>クッキーを通じた基本的な利用データ</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">情報の使用方法</h2>
            <p className="text-amber-200">
              収集した情報は以下の目的でのみ使用されます：
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>クイズ機能の提供と維持</li>
              <li>言語設定の記憶</li>
              <li>ウェブサイトとユーザー体験の改善</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">クッキー</h2>
            <p className="text-amber-200">
              当ウェブサイトでは、基本的な機能を確保するために必要不可欠なクッキーを使用しています。
              これらのクッキーは言語設定などの基本機能に必要で、個人情報は追跡しません。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">第三者サービス</h2>
            <p className="text-amber-200">
              当ウェブサイトでは、分析や機能のために第三者サービスを使用する場合があります。
              これらのサービスは、独自のプライバシーポリシーに従って匿名の利用データを収集する場合があります。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">ポリシーの変更</h2>
            <p className="text-amber-200">
              このプライバシーポリシーは随時更新される場合があります。変更があった場合は、このページに掲載いたします。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-jp text-amber-400">お問い合わせ</h2>
            <p className="text-amber-200">
              このプライバシーポリシーについてご質問がある場合は、当ウェブサイトを通じてお問い合わせください。
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 