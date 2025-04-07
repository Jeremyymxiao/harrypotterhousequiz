import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "ホグワーツ入学Q&A | 魔法魔術学校への入学方法",
  description: "ホグワーツ魔法魔術学校の入学プロセス、入学基準、よくある質問についてご紹介します。ホグワーツの入学許可書の受け取り方法、学費、その他魔法界に関する重要な情報をご覧ください。",
  keywords: "ホグワーツ入学, ホグワーツ入学許可, ホグワーツ入学Q&A, ホグワーツ通知書, ホグワーツ学費, ホグワーツ制服, 杖の購入, ダイアゴン横丁",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/jp/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "ホグワーツ入学Q&A | 魔法学校入学ガイド",
    description: "ホグワーツ魔法魔術学校の入学プロセス、入学基準、よくある質問について探ります。ホグワーツの入学許可書を受け取る方法を学びましょう！"
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
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-magic-jp text-center mb-8">
              ホグワーツ入学Q&A
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-magic-jp leading-relaxed">
              ホグワーツ入学Q&Aページへようこそ！ここでは、ホグワーツ魔法魔術学校への入学に関するよくある質問に答え、魔法界で最も有名な学校の入学プロセスと関連情報を理解するお手伝いをします。フクロウが届けた手紙を受け取ったばかりの方も、魔法界に単純に興味がある方も、ここで探している答えを見つけることができます。
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">ホグワーツの入学プロセスは？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                若い魔女や魔法使いが生まれると、ホグワーツの秘密の部屋に保管されている「入学許可の羽ペン」が「入学許可の書」にその子の名前を書き込みます。11歳の誕生日に、ホグワーツはフクロウと共に入学許可書を送り、正式に学校への入学を歓迎します！
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">ホグワーツにはどうやって応募するの？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                積極的に応募する必要はありません。ホグワーツは資格のある若い魔女や魔法使いを選び、入学許可書を送ります。魔法の能力は生まれつきのものであり、ホグワーツの魔法はすべての魔法の才能を持つ子どもたちを識別し、適切なタイミングで招待することができます。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">11歳を過ぎていて入学許可書を受け取っていません。まだ入学するチャンスはありますか？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                残念ながら、ホグワーツの伝統によると、11歳を過ぎた学生は入学できません。ホグワーツの教育システムは7年間のカリキュラムとして設計されており、11歳から始まり、学生がすべての必要な魔法のコースを完全に学ぶことを保証しています。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">オンラインで言及されている「事前登録」とは何ですか？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                ネットイースは公式リリース前に複数のベータテストとイベントを実施した「ハリーポッター：魔法の覚醒」というゲームを開発しました。これらのイベントの一部には事前登録が必要でした。これは小説や映画で描かれているホグワーツの入学プロセスとは無関係であり、単にゲームのマーケティング活動です。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">ホグワーツはいくらかかりますか？どうやって支払いますか？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                ホグワーツは授業料を請求しません。魔法界では、ホグワーツの教育はすべての入学した魔女や魔法使いに無料で提供されます。学生は教科書、杖、ローブなどの個人的なアイテムを購入するだけです。現実では、ホグワーツの授業料を支払うように求める人は詐欺を試みている可能性が高いことに注意してください。
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">制服と杖はどうやって購入するのですか？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                入学許可書を受け取った後、若い魔女や魔法使いはダイアゴン横丁を訪れ、ローブ、杖、その他の学用品を購入します。ローブはマダム・マルキンのローブ店で購入でき、杖はオリバンダーで選択できます。覚えておいてください、杖が魔法使いを選ぶのであって、その逆ではありません！
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">ホグワーツは本当に存在しますか？</h2>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
                それは素晴らしい質問です。ホグワーツはそれが存在すると信じるすべての人の心の中に存在します。技術的には、ホグワーツはJ.K.ローリングによって「ハリー・ポッター」シリーズで創造された架空の魔法学校です。小説を読み、映画を見ることで、この学校の魔法とキャンパスライフの美しさを学ぶことができます。
              </p>
              <p className="text-lg text-amber-200 font-magic-jp leading-relaxed mt-4">
                ファンサイトとして、私たちはこれらの素晴らしい魔法の物語を読むことが誰にとっても有益だと考えています。本当に魔法の世界に身を置きたいなら、「ハリー・ポッター」シリーズを読むことから魔法の旅を始めてみませんか？
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">魔法界の豆知識</h2>
            <p className="text-lg text-amber-200 font-magic-jp leading-relaxed">
              ホグワーツ魔法魔術学校は4人の偉大な魔法使いによって設立されました：ゴドリック・グリフィンドール、ヘルガ・ハッフルパフ、ロウェナ・レイブンクロー、サラザール・スリザリン。学校はスコットランドの人里離れた場所にあり、マグル（非魔法の人々）には見えません。ホグワーツ城は強力な魔法で保護されており、マグル避けの魔法が含まれ、マグルの目には放棄された危険な廃墟のように見えます。
            </p>
            <p className="text-lg text-amber-200 font-magic-jp leading-relaxed mt-4">
              ホグワーツ・エクスプレスは毎年9月1日にロンドンのキングス・クロス駅の9と3/4番線から出発し、学生たちをホグワーツに連れて行きます。学生たちは9番と10番のプラットフォームの間に隠された魔法の障壁を通過して9と3/4番線に到達する必要があります。
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-magic-jp text-amber-400 mb-6">さらに魔法界を探索</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/jp/quiz"
                className="magic-button px-8 py-4 text-xl font-magic-jp text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                組分けクイズを受ける
              </Link>
              <Link 
                href="/jp/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-magic-jp text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                組分け帽子と話す
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 