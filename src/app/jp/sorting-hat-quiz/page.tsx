import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'
import { jp } from '@/i18n/translations/jp'

export const metadata = {
  title: 'AI組分け帽子テスト | 魔法の組分け帽子との会話 | ホグワーツ寮組分けテスト',
  description: '私たちのAI組分け帽子と魔法の会話をしましょう！ホグワーツの寮について質問したり、対話を通じて組分けされたり、魔法の世界での本当の場所を発見したりしましょう。',
  keywords: '組分け帽子テスト, AI組分け帽子, 組分け帽子との会話, ハリーポッター寮テスト, ホグワーツの寮, 魔法の組分け帽子, インタラクティブな組分け, 魔法のチャット',
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/jp/sorting-hat-quiz'
  },
  openGraph: {
    title: '魔法の組分け帽子との会話 - インタラクティブなホグワーツ寮の組分け',
    description: '組分け帽子AIと個人的な会話をしましょう！質問をしたり、寮について学んだり、魔法の対話を通じてあなたがホグワーツで本当に属する場所を発見したりしましょう。'
  }
}

export default function SortingHatQuizPage() {
  return (
    <div className="quiz-bg min-h-screen">
      <div className="magic-particles" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <Image
              src="/images/sorting-hat.png"
              alt="魔法の組分け帽子"
              width={150}
              height={150}
              className="mx-auto mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic mb-6">
            魔法の組分け帽子
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic mb-8 max-w-3xl mx-auto">
            「私の見た目を判断しないでください。私より賢い帽子を見つけられたら、私は自分自身を食べてしまいましょう。」
          </p>
        </div>
      </section>
      
      {/* About the Sorting Hat */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic text-amber-400 mb-4">組分け帽子の歴史</h2>
              <p className="text-amber-200 mb-4">
                組分け帽子は10世紀頃、ホグワーツの4人の創設者によって作られました：ゴドリック・グリフィンドール、サラザール・スリザリン、ロウェナ・レイブンクロー、ヘルガ・ハッフルパフです。
              </p>
              <p className="text-amber-200">
                創設者たちが自分たちの死後、学生をそれぞれの寮にどのように選ぶかについて心配したとき、ゴドリックは自分の帽子を脱ぎ、各創設者がそれに知識と知恵を加えました。
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic text-amber-400 mb-4">組分けの仕組み</h2>
              <p className="text-amber-200 mb-4">
                組分け帽子はあなたの心、個性、価値観を分析して、あなたが本当に属するホグワーツの寮を決定します。通常は最終決定を下しますが、あなたの好みも考慮することがあります。
              </p>
              <p className="text-amber-200">
                かつてハリー・ポッターに言ったように「すべてはあなたの頭の中にある。スリザリンはあなたを偉大さへと導くだろう、それは間違いない…もしあなたが確信しているなら—グリフィンドール！」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-magic text-amber-400 mb-4">組分け帽子と話す</h2>
          <p className="text-amber-200 max-w-2xl mx-auto font-magic">
            私たちのAI組分け帽子と魔法の会話をしましょう！寮について質問したり、
            自分自身について詳細を共有したり、単に魔法の世界についておしゃべりしたりしましょう。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>
      
      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-8">ホグワーツの4つの寮</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-magic text-yellow-400 mb-3">グリフィンドール</h3>
              <p className="text-amber-200 mb-2 font-magic">価値観：勇敢さ、勇気、大胆さ、騎士道精神</p>
              <p className="text-amber-200 font-magic">有名なメンバー：ハリー・ポッター、ハーマイオニー・グレンジャー、ロン・ウィーズリー、アルバス・ダンブルドア</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-magic text-green-400 mb-3">スリザリン</h3>
              <p className="text-amber-200 mb-2 font-magic">価値観：野心、狡猾さ、リーダーシップ、機知に富んでいること</p>
              <p className="text-amber-200 font-magic">有名なメンバー：セブルス・スネイプ、ドラコ・マルフォイ、マーリン、ホラス・スラグホーン</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-magic text-yellow-300 mb-3">ハッフルパフ</h3>
              <p className="text-amber-200 mb-2 font-magic">価値観：勤勉さ、忍耐力、忠誠心、フェアプレー</p>
              <p className="text-amber-200 font-magic">有名なメンバー：ニュート・スキャマンダー、セドリック・ディゴリー、ニンファドーラ・トンクス、ポモーナ・スプラウト</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-magic text-blue-400 mb-3">レイブンクロー</h3>
              <p className="text-amber-200 mb-2 font-magic">価値観：知性、知恵、創造性、独創性</p>
              <p className="text-amber-200 font-magic">有名なメンバー：ルーナ・ラブグッド、フィリウス・フリットウィック、ロウェナ・レイブンクロー、ガリック・オリバンダー</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic text-amber-400 mb-6">会話の準備ができていませんか？テストを受けましょう！</h2>
          <p className="text-amber-200 mb-8 font-magic">
            構造化された体験を好む場合は、私たちの詳細なハリーポッター寮テストが、あなたの本当のホグワーツの寮を発見する別の方法を提供します。
          </p>
          <Link 
            href="/jp/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-magic text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            テストを受ける
          </Link>
        </div>
      </section>
    </div>
  )
} 