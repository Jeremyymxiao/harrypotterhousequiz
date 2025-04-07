import { patronusResultMetadata } from '@/app/metadata'

export const metadata = patronusResultMetadata.zhHant

export default function PatronusResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 