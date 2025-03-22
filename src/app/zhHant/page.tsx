import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { zhHant } from '@/i18n/translations/zhHant'
import Image from 'next/image'

export const metadata = {
  title: "哈利波特分院測試 | 你屬於哪個霍格華茲學院？| 官方分類",
  description: "參加我們的官方哈利波特分院測試或與AI分院帽聊天，發現你真正的霍格華茲學院。我們的哈利波特分院測試使用精確的性格分析來確定你是屬於葛萊芬多、史萊哲林、赫夫帕夫還是雷文克勞！",
  keywords: "哈利波特分院測試, 霍格華茲學院測試, 分院帽測試, 霍格華茲學院, 葛萊芬多, 史萊哲林, 赫夫帕夫, 雷文克勞, 性格測試, 魔法世界, AI分院帽, 魔法測試",
  alternates: {
    canonical: 'https://harrypotterquiz.pro/zhHant'
  },
  openGraph: {
    title: "哈利波特分院測試 - 開啟你的魔法之旅 | 發現你的霍格華茲學院",
    description: "準備好通過權威性的哈利波特分院測試發現你真正的霍格華茲學院了嗎？參加我們的魔法測試或與分院帽對話，找到你真正屬於的地方！"
  }
}

export default function HomePage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 font-magic-zh tracking-wider px-4 animate-float">
                哈利波特分院測試
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-magic-zh tracking-wide px-4">
                發現你真正的霍格華茲學院
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-magic-zh">
                  "在我剛剛誕生的時代，
                  當霍格華茲剛剛開始，
                  我們高貴學校的創始人們
                  認為他們永遠不會分離..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-magic-zh">
                  歡迎來到最權威的哈利波特分院測試，這裡的魔法將揭示你內在的特質和價值觀。通過我們精心設計的哈利波特分院測試，你將發現自己是否擁有葛萊芬多的勇氣、史萊哲林的野心、赫夫帕夫的忠誠或雷文克勞的智慧。
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/zhHant/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-zh"
              >
                開始哈利波特分院測試
              </Link>
              <Link 
                href="/zhHant/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-zh"
              >
                詢問分院帽
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Our Quiz Section */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-8">為什麼選擇我們的哈利波特分院測試？</h2>
          
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm mb-8">
            <p className="text-amber-200 mb-4 font-magic-zh text-lg">
              我們的哈利波特分院測試不僅是一個簡單的性格測試，更是一段魔法世界的旅程。當你參加哈利波特分院測試時，我們採用了與J.K.羅琳創建的霍格華茲分院系統相同的核心原則，確保結果完美地符合魔法世界的精神。
            </p>
            <p className="text-amber-200 mb-4 font-magic-zh text-lg">
              哈利波特分院測試的每個問題都是精心設計的，用於評估你內心的價值觀、才能和潛力。就像原著中的分院帽一樣，我們的測試能夠看到深藏在你內心的品質，即使是那些你自己可能都沒有意識到的特質。
            </p>
            <p className="text-amber-200 font-magic-zh text-lg">
              無論你是哈利波特系列的長期粉絲，還是剛剛開始探索魔法世界的新人，我們的哈利波特分院測試都會為你提供一次有意義的分院體驗，幫助你更好地了解自己。
            </p>
          </div>
        </div>
      </section>

      {/* Magical Features */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">{zhHant.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">精確的哈利波特分院測試</h3>
              <p className="text-amber-200 font-magic-zh">我們的哈利波特分院測試基於深層心理學原理和原著角色分析，確保結果的準確性和可靠性。每個問題都是專業設計的，能夠識別你的核心特質。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">AI分院帽</h3>
              <p className="text-amber-200 font-magic-zh">體驗革命性的分院方式！我們的AI分院帽可以與你進行真實對話，就像你真的在霍格華茲的大禮堂接受分院一樣。這是一次突破性的哈利波特分院測試體驗！</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">詳細的性格分析</h3>
              <p className="text-amber-200 font-magic-zh">完成哈利波特分院測試後，你將收到一份詳細的性格報告，解釋為什麼你屬於特定學院以及你與該學院著名角色的相似之處。了解你的魔法潛能和內在特質。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-4">霍格華茲學院百科全書</h3>
              <p className="text-amber-200 font-magic-zh">探索關於霍格華茲學院的完整知識庫！了解每個學院的創立歷史、著名校友、共同特質和獨特的魔法傳統。哈利波特分院測試不僅僅是分院，更是一場發現之旅。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">霍格華茲四大學院</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-magic-zh text-yellow-400 mb-3">葛萊芬多</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                勇氣、膽量和勇敢是葛萊芬多學院最重要的特質。如果哈利波特分院測試將你分到葛萊芬多，這意味著你有冒險精神，面對困難時能挺身而出，並願意為正義而戰。葛萊芬多的學生通常直率、熱情且忠於朋友。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的葛萊芬多成員包括：哈利·波特、妙麗·格蘭傑、榮恩·衛斯理、阿不思·鄧不利多和麥教授米奈娃·麥高納。
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-magic-zh text-green-400 mb-3">史萊哲林</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                野心、狡猾和機智是史萊哲林學院的核心價值。如果哈利波特分院測試將你分到史萊哲林，這表明你擁有出色的領導能力、崇高的目標和實現目標的決心。史萊哲林的學生通常聰明、有戰略思維，並重視自我提升。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的史萊哲林成員包括：賽佛勒斯·石內卜、跩哥·馬份、貝拉特里克斯·雷斯壯和梅林（是的，傳奇的梅林是史萊哲林的學生）。
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-magic-zh text-yellow-300 mb-3">赫夫帕夫</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                忠誠、公正和耐心是赫夫帕夫學院的標誌。如果哈利波特分院測試將你分到赫夫帕夫，這表明你重視真誠的友誼、公平對待他人，並願意持續努力實現你的目標。赫夫帕夫的學生友好、包容且真誠。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的赫夫帕夫成員包括：紐特·斯卡曼德、西追·迪哥里、尼法朵拉·東施和龐芙雷·斯普勞特教授。
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-magic-zh text-blue-400 mb-3">雷文克勞</h3>
              <p className="text-amber-200 mb-4 font-magic-zh">
                智慧、創造力和對知識的渴望是雷文克勞學院的核心特質。如果哈利波特分院測試將你分到雷文克勞，這意味著你重視知識，喜歡學習，並有獨特和原創的思維方式。雷文克勞的學生通常聰明、有才華且思想開明。
              </p>
              <p className="text-amber-200 font-magic-zh">
                著名的雷文克勞成員包括：盧娜·羅古德、張秋、菲力·孚立維教授和羅威娜·雷文克勞本人。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-zh text-amber-400 text-center mb-12">哈利波特分院測試常見問題</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">哈利波特分院測試的準確度如何？</h3>
              <p className="text-amber-200 font-magic-zh">我們的哈利波特分院測試採用先進的性格分析算法結合J.K.羅琳原著中的學院特質描述，確保結果符合魔法世界的分院原則。我們的測試已經得到了數百萬哈利波特粉絲的驗證，具有極高的準確性。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">我可以重新參加哈利波特分院測試嗎？</h3>
              <p className="text-amber-200 font-magic-zh">當然可以！就像分院帽會考慮你的選擇一樣，哈利波特分院測試可以隨時重新參加。因為人的性格可能隨著時間和經歷而改變，所以偶爾的重新測試可能會揭示出你不斷發展的特質。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">為什麼我的哈利波特分院測試結果與我預期的不同？</h3>
              <p className="text-amber-200 font-magic-zh">分院帽能看到我們真正的本質，而不只是表面上的東西或我們希望成為的樣子。哈利波特分院測試也是如此，它可能發現你自己都不知道的品質。請記住，每個學院都有其獨特的價值和優勢，沒有哪個學院比其他學院更好。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">與分院帽AI對話和傳統哈利波特分院測試有什麼不同？</h3>
              <p className="text-amber-200 font-magic-zh">傳統的哈利波特分院測試通過一系列固定的問題評估你的性格特質。而分院帽AI對話則模擬與真正的分院帽互動；你可以自由提問，分享你的想法和價值觀，AI將根據你的回應判斷最適合你的學院。這提供了更個性化、互動性更強的分院體驗。</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-zh text-amber-400 mb-3">如果我的哈利波特分院測試結果顯示我適合多個學院怎麼辦？</h3>
              <p className="text-amber-200 font-magic-zh">許多巫師和女巫都具有多個學院的特質，這完全正常！就像哈利既有葛萊芬多的勇氣又有史萊哲林的野心。在這種情況下，分院帽通常會考慮你自己的偏好。如果你的測試結果顯示你對多個學院有強烈的特質，你可以選擇最吸引你的學院，或嘗試與AI分院帽對話進行更深入的分析。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-magic-zh text-amber-400 mb-6">準備好發現你的真實身份了嗎？</h2>
          <p className="text-amber-200 mb-8 font-magic-zh text-lg">
            每位巫師和女巫都有屬於自己的地方。在霍格華茲的四大學院中，必定有一個地方能夠充分發揮你的才能，最大限度地釋放你的魔法潛能。立即參加我們的哈利波特分院測試，在魔法世界中找到你的位置吧！
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/zhHant/quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              開始哈利波特分院測試
            </Link>
            <Link 
              href="/zhHant/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-zh text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              與分院帽對話
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
