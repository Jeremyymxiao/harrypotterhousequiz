import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "儿童版霍格沃茨分院测试 | 趣味分院帽测试",
  description: "专为儿童设计的魔法分院测试！通过简单有趣的问题，帮助您的孩子发现他们属于霍格沃茨的哪个学院。",
  keywords: "儿童版霍格沃茨分院测试, 儿童哈利波特学院测试, 儿童友好分院帽测试, 儿童版哈利波特",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 