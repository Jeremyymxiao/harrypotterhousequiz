import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策 | 哈利波特分院帽测试',
  description: '哈利波特分院帽测试网站的隐私政策。了解我们如何收集、使用和保护您的个人信息。',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-zh text-amber-400 text-center mb-8">
            隐私政策
          </h1>

          {/* 引言 */}
          <div className="space-y-4">
            <p className="text-amber-200 text-lg">
              欢迎访问哈利波特分院帽测试网站。我们重视您的隐私，并致力于保护您的个人信息。
              本隐私政策说明了我们如何收集、使用和保护您在使用我们网站时提供的信息。
            </p>
          </div>

          {/* 信息收集 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">信息收集</h2>
            <p className="text-amber-200 text-lg">
              我们收集的信息仅限于：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>您的测试答案和结果</li>
              <li>基本的使用统计数据（如页面访问量）</li>
              <li>您的语言偏好设置</li>
            </ul>
          </div>

          {/* 信息使用 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">信息使用</h2>
            <p className="text-amber-200 text-lg">
              我们使用收集的信息来：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>提供分院帽测试服务</li>
              <li>改进网站体验</li>
              <li>生成匿名的使用统计数据</li>
            </ul>
          </div>

          {/* Cookie使用 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">Cookie使用</h2>
            <p className="text-amber-200 text-lg">
              我们使用必要的Cookie来：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>记住您的语言偏好</li>
              <li>提供基本的网站功能</li>
              <li>改善网站性能</li>
            </ul>
          </div>

          {/* 数据安全 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">数据安全</h2>
            <p className="text-amber-200 text-lg">
              我们采取适当的安全措施来保护您的信息免受未经授权的访问、更改、披露或销毁。
              所有数据都以加密形式存储和传输。
            </p>
          </div>

          {/* 第三方服务 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">第三方服务</h2>
            <p className="text-amber-200 text-lg">
              我们使用以下第三方服务：
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>Google Analytics（用于网站访问统计）</li>
              <li>Vercel（用于网站托管）</li>
            </ul>
          </div>

          {/* 儿童隐私 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">儿童隐私</h2>
            <p className="text-amber-200 text-lg">
              我们的网站面向所有年龄段的哈利波特粉丝。我们不会故意收集13岁以下儿童的个人信息。
              如果您是父母或监护人，发现您的孩子向我们提供了个人信息，请联系我们，我们将确保删除这些信息。
            </p>
          </div>

          {/* 政策更新 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">政策更新</h2>
            <p className="text-amber-200 text-lg">
              我们可能会不时更新本隐私政策。任何更改都将在本页面上发布，并在必要时通过网站通知您。
              继续使用我们的网站即表示您接受这些更改。
            </p>
          </div>

          {/* 联系我们 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">联系我们</h2>
            <p className="text-amber-200 text-lg">
              如果您对本隐私政策有任何问题或疑虑，请通过网站提供的联系方式与我们联系。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 