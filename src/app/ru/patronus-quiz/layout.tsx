import { Metadata } from 'next'
import { patronusQuizMetadata } from '@/app/metadata'

export const metadata: Metadata = patronusQuizMetadata.ru

export default function PatronusQuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 