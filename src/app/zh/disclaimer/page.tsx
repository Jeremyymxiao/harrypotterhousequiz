import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '免责声明 | 哈利波特分院帽测试',
  description: '哈利波特分院帽测试网站的免责声明。本网站是由粉丝创建的非官方网站，与华纳兄弟、J.K.罗琳或任何官方哈利波特品牌无关。',
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-zh text-amber-400 text-center mb-8">
            免责声明
          </h1>

          {/* 版权声明 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">版权声明</h2>
            <p className="text-amber-200 text-lg">
              哈利波特、霍格沃茨以及所有相关的名称、角色、标志和相关内容是华纳兄弟娱乐公司（Warner Bros. Entertainment Inc.）的商标和版权。
              本网站不隶属于华纳兄弟娱乐公司、J.K.罗琳、布卢姆斯伯里出版社或任何哈利波特系列的官方机构。
            </p>
          </div>

          {/* 粉丝内容 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">粉丝内容</h2>
            <p className="text-amber-200 text-lg">
              本网站是由哈利波特系列的粉丝创建的非商业性质网站。我们的目标是为其他粉丝提供一个有趣的互动体验。
              所有测试内容和结果仅供娱乐，不代表任何官方观点或立场。
            </p>
          </div>

          {/* 商标信息 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">商标信息</h2>
            <p className="text-amber-200 text-lg">
              本网站使用的所有哈利波特相关商标和注册商标均属于其各自所有者。
              使用这些商标仅出于描述性目的，并不暗示任何官方认可或关联。
            </p>
          </div>

          {/* 非商业用途 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-zh text-amber-400">非商业用途</h2>
            <p className="text-amber-200 text-lg">
              本网站是一个非营利性的粉丝项目，不进行任何商业活动。
              我们不销售商品或服务，也不从本网站获取任何商业利益。
              本网站的所有功能均免费提供给用户使用。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 