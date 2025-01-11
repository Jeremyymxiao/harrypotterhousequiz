import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隱私政策 | 哈利波特分院帽測試',
  description: '哈利波特分院帽測試網站的隱私政策。了解我們如何收集、使用和保護您的個人資訊。',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-zhHant text-amber-400 text-center mb-8">
            隱私政策
          </h1>

          {/* 引言 */}
          <div className="space-y-4">
            <p className="text-amber-200 text-lg">
              歡迎訪問哈利波特分院帽測試網站。我們重視您的隱私，並致力於保護您的個人資訊。
              本隱私政策說明了我們如何收集、使用和保護您在使用我們網站時提供的資訊。
            </p>
          </div>

          {/* 資訊收集 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">資訊收集</h2>
            <p className="text-amber-200 text-lg">
              我們收集的資訊僅限於：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>您的測試答案和結果</li>
              <li>基本的使用統計數據（如頁面訪問量）</li>
              <li>您的語言偏好設定</li>
            </ul>
          </div>

          {/* 資訊使用 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">資訊使用</h2>
            <p className="text-amber-200 text-lg">
              我們使用收集的資訊來：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>提供分院帽測試服務</li>
              <li>改進網站體驗</li>
              <li>生成匿名的使用統計數據</li>
            </ul>
          </div>

          {/* Cookie使用 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">Cookie使用</h2>
            <p className="text-amber-200 text-lg">
              我們使用必要的Cookie來：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>記住您的語言偏好</li>
              <li>提供基本的網站功能</li>
              <li>改善網站性能</li>
            </ul>
          </div>

          {/* 數據安全 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">數據安全</h2>
            <p className="text-amber-200 text-lg">
              我們採取適當的安全措施來保護您的資訊免受未經授權的訪問、更改、披露或銷毀。
              所有數據都以加密形式存儲和傳輸。
            </p>
          </div>

          {/* 第三方服務 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">第三方服務</h2>
            <p className="text-amber-200 text-lg">
              我們使用以下第三方服務：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>Google Analytics（用於網站訪問統計）</li>
              <li>Vercel（用於網站託管）</li>
            </ul>
          </div>

          {/* 兒童隱私 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">兒童隱私</h2>
            <p className="text-amber-200 text-lg">
              我們的網站面向所有年齡段的哈利波特粉絲。我們不會故意收集13歲以下兒童的個人資訊。
              如果您是父母或監護人，發現您的孩子向我們提供了個人資訊，請聯繫我們，我們將確保刪除這些資訊。
            </p>
          </div>

          {/* 政策更新 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">政策更新</h2>
            <p className="text-amber-200 text-lg">
              我們可能會不時更新本隱私政策。任何更改都將在本頁面上發布，並在必要時通過網站通知您。
              繼續使用我們的網站即表示您接受這些更改。
            </p>
          </div>

          {/* 聯繫我們 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zhHant text-amber-400">聯繫我們</h2>
            <p className="text-amber-200 text-lg">
              如果您對本隱私政策有任何問題或疑慮，請通過網站提供的聯繫方式與我們聯繫。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 