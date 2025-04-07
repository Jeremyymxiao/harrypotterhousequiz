import { patronusResultMetadata } from '@/app/metadata'

export const metadata = patronusResultMetadata.en

export default function PatronusResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 