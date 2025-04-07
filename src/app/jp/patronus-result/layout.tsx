import { patronusResultMetadata } from '@/app/metadata'

export const metadata = patronusResultMetadata.jp

export default function PatronusResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 