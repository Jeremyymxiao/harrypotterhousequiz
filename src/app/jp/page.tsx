import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { jp } from '@/i18n/translations/jp'
import Image from 'next/image'

export const metadata = {
  title: "ハリーポッター寮分けテスト | あなたはどのホグワーツ寮？ | 公式診断",
  description: "私たちの公式ハリーポッター寮分けテストを受けるか、AI組分け帽と会話して、あなたの本当のホグワーツ寮を見つけましょう。当ハリーポッター寮分けテストは精密な性格分析により、グリフィンドール、スリザリン、ハッフルパフ、レイブンクローのうち、あなたに最も合った寮を診断します！",
  keywords: "ハリーポッター寮分けテスト, ホグワーツ寮診断, 組分け帽テスト, ホグワーツの寮, グリフィンドール, スリザリン, ハッフルパフ, レイブンクロー, 性格診断, 魔法界, AI組分け帽, 魔法テスト",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/jp'
  },
  openGraph: {
    title: "ハリーポッター寮分けテスト - 魔法の旅を始めよう | あなたのホグワーツ寮を発見",
    description: "権威あるハリーポッター寮分けテストであなたの本当のホグワーツ寮を発見する準備はできましたか？魔法のテストを受けるか、組分け帽との対話で、本当の居場所を見つけましょう！"
  }
}

export default function Home() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 font-magic-jp tracking-wider px-4 animate-float">
                ハリーポッター寮分けテスト
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-magic-jp tracking-wide px-4">
                あなたの真のホグワーツ寮を発見しよう
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-magic-jp">
                  "私が新しく生まれた頃、
                  ホグワーツがやっと始まった時、
                  我らが高貴な学校の創設者たちは
                  決して離れないと思っていました..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-magic-jp">
                  最も権威あるハリーポッター寮分けテストへようこそ。ここでは魔法があなたの内なる特性と価値観を明らかにします。私たちの丁寧に設計されたハリーポッター寮分けテストを通じて、あなたがグリフィンドールの勇気、スリザリンの野心、ハッフルパフの忠誠心、それともレイブンクローの知恵を持っているかを発見できます。
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/jp/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-jp"
              >
                ハリーポッター寮分けテストを始める
              </Link>
              <Link 
                href="/jp/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-jp"
              >
                組分け帽に質問する
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Our Quiz Section */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-jp text-amber-400 text-center mb-8">なぜ私たちのハリーポッター寮分けテストを選ぶべきか？</h2>
          
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm mb-8">
            <p className="text-amber-200 mb-4 font-magic-jp text-lg">
              私たちのハリーポッター寮分けテストは単なる性格診断ではなく、魔法の世界への旅です。ハリーポッター寮分けテストを受ける際、J.K.ローリングが創造したホグワーツの組分けシステムと同じ核心的な原則を採用し、魔法世界の精神に完璧に沿った結果を保証します。
            </p>
            <p className="text-amber-200 mb-4 font-magic-jp text-lg">
              ハリーポッター寮分けテストの各質問は、あなたの内なる価値観、才能、そして可能性を評価するために慎重に設計されています。原作の組分け帽のように、私たちのテストはあなた自身も気づいていないかもしれない、あなたの深い内面の資質を見ることができます。
            </p>
            <p className="text-amber-200 font-magic-jp text-lg">
              ハリーポッターシリーズの長年のファンであっても、魔法の世界を探索し始めたばかりであっても、私たちのハリーポッター寮分けテストは、自分自身をより深く理解するための意味のある組分け体験を提供します。
            </p>
          </div>
        </div>
      </section>

      {/* Magical Features */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-jp text-amber-400 text-center mb-12">{jp.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">精密なハリーポッター寮分けテスト</h3>
              <p className="text-amber-200 font-magic-jp">私たちのハリーポッター寮分けテストは、深い心理学的原則と原作のキャラクター分析に基づいており、結果の正確性と信頼性を保証します。各質問は専門的に設計され、あなたの核心的な特性を特定できます。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">AI組分け帽</h3>
              <p className="text-amber-200 font-magic-jp">革新的な組分け方法を体験しましょう！私たちのAI組分け帽は、まるでホグワーツの大広間で実際に組分けされているかのように、あなたと本物の会話ができます。これはハリーポッター寮分けテストの革命的な体験です！</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">詳細な性格分析</h3>
              <p className="text-amber-200 font-magic-jp">ハリーポッター寮分けテスト完了後、なぜあなたが特定の寮に属するのか、またその寮の有名なキャラクターとの類似点について詳細な性格レポートを受け取ります。あなたの魔法の可能性と内面の特性を理解しましょう。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-4">ホグワーツ寮百科事典</h3>
              <p className="text-amber-200 font-magic-jp">ホグワーツ寮の完全な知識ベースを探索しましょう！各寮の創設の歴史、有名な卒業生、共通の特性、そして独自の魔法の伝統について学びましょう。ハリーポッター寮分けテストは単なる組分けではなく、発見の旅です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-jp text-amber-400 text-center mb-12">ホグワーツの四寮</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-magic-jp text-yellow-400 mb-3">グリフィンドール</h3>
              <p className="text-amber-200 mb-4 font-magic-jp">
                勇気、胆力、度胸はグリフィンドール寮の最も重要な特性です。ハリーポッター寮分けテストであなたがグリフィンドールに組分けされた場合、あなたには冒険心があり、困難に直面しても立ち上がり、正義のために戦う意志があることを意味します。グリフィンドール生は典型的に率直で情熱的、そして友人に忠実です。
              </p>
              <p className="text-amber-200 font-magic-jp">
                有名なグリフィンドールのメンバーには、ハリー・ポッター、ハーマイオニー・グレンジャー、ロン・ウィーズリー、アルバス・ダンブルドア、ミネルバ・マクゴナガル教授などがいます。
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-magic-jp text-green-400 mb-3">スリザリン</h3>
              <p className="text-amber-200 mb-4 font-magic-jp">
                野心、狡猾さ、機知はスリザリン寮の核心的な価値です。ハリーポッター寮分けテストであなたがスリザリンに組分けされた場合、あなたには優れたリーダーシップスキル、高い目標、そしてそれらを達成する決意があることを示しています。スリザリン生は典型的に賢く、戦略的思考を持ち、自己向上を重視します。
              </p>
              <p className="text-amber-200 font-magic-jp">
                有名なスリザリンのメンバーには、セブルス・スネイプ、ドラコ・マルフォイ、ベラトリックス・レストレンジ、そしてマーリン（はい、伝説のマーリンはスリザリンの学生でした）がいます。
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-magic-jp text-yellow-300 mb-3">ハッフルパフ</h3>
              <p className="text-amber-200 mb-4 font-magic-jp">
                忠誠、公正さ、忍耐はハッフルパフ寮の特徴です。ハリーポッター寮分けテストであなたがハッフルパフに組分けされた場合、あなたは誠実な友情、公平な扱い、そして目標に向けて持続的に努力する意志を重視していることを示しています。ハッフルパフ生は友好的、包容力があり、誠実です。
              </p>
              <p className="text-amber-200 font-magic-jp">
                有名なハッフルパフのメンバーには、ニュート・スキャマンダー、セドリック・ディゴリー、ニンファドーラ・トンクス、ポモーナ・スプラウト教授などがいます。
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-magic-jp text-blue-400 mb-3">レイブンクロー</h3>
              <p className="text-amber-200 mb-4 font-magic-jp">
                知恵、創造性、知識への渇望はレイブンクロー寮の核心的な特性です。ハリーポッター寮分けテストであなたがレイブンクローに組分けされた場合、あなたは知識を重視し、学ぶことを楽しみ、ユニークで独創的な思考方法を持っていることを意味します。レイブンクロー生は典型的に知的で才能があり、心が開かれています。
              </p>
              <p className="text-amber-200 font-magic-jp">
                有名なレイブンクローのメンバーには、ルーナ・ラブグッド、チョウ・チャン、フィリウス・フリットウィック教授、そしてロウェナ・レイブンクロー自身がいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-jp text-amber-400 text-center mb-12">ハリーポッター寮分けテストのよくある質問</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">ハリーポッター寮分けテストの正確性はどうですか？</h3>
              <p className="text-amber-200 font-magic-jp">私たちのハリーポッター寮分けテストは、J.K.ローリングの原作からの寮の特性記述と組み合わせた高度な性格分析アルゴリズムを採用し、結果が魔法世界の組分け原則に沿うことを保証します。私たちのテストは何百万人ものハリーポッターファンによって検証され、非常に高い精度を持っています。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">ハリーポッター寮分けテストを再受験できますか？</h3>
              <p className="text-amber-200 font-magic-jp">もちろんです！組分け帽があなたの選択を考慮するのと同様に、ハリーポッター寮分けテストはいつでも再受験できます。人の性格は時間と経験によって変化する可能性があるため、時折の再テストでは進化する特性が明らかになるかもしれません。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">ハリーポッター寮分けテストの結果が予想と異なる理由は？</h3>
              <p className="text-amber-200 font-magic-jp">組分け帽は表面に見えるものや私たちが望むものではなく、私たちの内面の本質を見ています。ハリーポッター寮分けテストも同様に機能し、あなたが気づいていなかった資質を発見するかもしれません。各寮には独自の価値と強みがあり、どの寮も他より優れているわけではないことを覚えておいてください。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">組分け帽AIとの会話と従来のハリーポッター寮分けテストはどう違いますか？</h3>
              <p className="text-amber-200 font-magic-jp">従来のハリーポッター寮分けテストは一連の固定された質問であなたの性格特性を評価します。一方、組分け帽AIとの会話は実際の組分け帽との対話をシミュレートします。自由に質問し、考えや価値観を共有でき、AIはあなたの回答に基づいて最適な寮を判断します。これにより、よりパーソナライズされた対話型の組分け体験が提供されます。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-jp text-amber-400 mb-3">ハリーポッター寮分けテストの結果が複数の寮に適していることを示した場合はどうすればいいですか？</h3>
              <p className="text-amber-200 font-magic-jp">多くの魔女と魔法使いが複数の寮の特性を持っていることは完全に正常です！ハリーがグリフィンドールの勇気とスリザリンの野心の両方を持っていたように。そのような場合、組分け帽は通常あなた自身の好みを考慮します。テスト結果が複数の寮に強い特性を示している場合、最も魅力的な寮を選択するか、より深い分析のためにAI組分け帽との会話を試すことができます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-magic-jp text-amber-400 mb-6">あなたの真のアイデンティティを発見する準備はできていますか？</h2>
          <p className="text-amber-200 mb-8 font-magic-jp text-lg">
            すべての魔女と魔法使いには、彼らが属する場所があります。ホグワーツの四つの寮の中で、必ずあなたの才能が十分に発揮され、あなたの魔法の可能性が最大限に解放される場所があります。今すぐハリーポッター寮分けテストを受けて、魔法の世界であなたの居場所を見つけましょう！
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/jp/quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-jp text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              ハリーポッター寮分けテストを始める
            </Link>
            <Link 
              href="/jp/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-jp text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              組分け帽と会話する
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
