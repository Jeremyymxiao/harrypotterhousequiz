import { patronusResultMetadata } from '@/app/metadata'

export const metadata = patronusResultMetadata.ko

export default function PatronusResultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 