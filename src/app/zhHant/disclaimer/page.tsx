import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '免責聲明 | 哈利波特分院帽測試',
  description: '哈利波特分院帽測試網站的免責聲明。本網站是由粉絲創建的非官方網站，與華納兄弟、J.K.羅琳或任何官方哈利波特品牌無關。',
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-zhHant text-amber-400 text-center mb-8">
            免責聲明
          </h1>

          {/* 版權聲明 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">版權聲明</h2>
            <p className="text-amber-200 text-lg">
              哈利波特、霍格華茲以及所有相關的名稱、角色、標誌和相關內容是華納兄弟娛樂公司（Warner Bros. Entertainment Inc.）的商標和版權。
              本網站不隸屬於華納兄弟娛樂公司、J.K.羅琳、布魯姆斯伯里出版社或任何哈利波特系列的官方機構。
            </p>
          </div>

          {/* 粉絲內容 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">粉絲內容</h2>
            <p className="text-amber-200 text-lg">
              本網站是由哈利波特系列的粉絲創建的非商業性質網站。我們的目標是為其他粉絲提供一個有趣的互動體驗。
              所有測試內容和結果僅供娛樂，不代表任何官方觀點或立場。
            </p>
          </div>

          {/* 商標資訊 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">商標資訊</h2>
            <p className="text-amber-200 text-lg">
              本網站使用的所有哈利波特相關商標和註冊商標均屬於其各自所有者。
              使用這些商標僅出於描述性目的，並不暗示任何官方認可或關聯。
            </p>
          </div>

          {/* 非商業用途 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">非商業用途</h2>
            <p className="text-amber-200 text-lg">
              本網站是一個非營利性的粉絲項目，不進行任何商業活動。
              我們不銷售商品或服務，也不從本網站獲取任何商業利益。
              本網站的所有功能均免費提供給用戶使用。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 