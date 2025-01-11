import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "兒童版霍格華茲分院測試 | 趣味分類帽測試",
  description: "專為兒童設計的魔法分院測試！透過簡單有趣的問題，幫助您的孩子發現他們屬於霍格華茲的哪個學院。",
  keywords: "兒童版霍格華茲分院測試, 兒童哈利波特學院測試, 兒童友善分類帽測試, 兒童版哈利波特",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 