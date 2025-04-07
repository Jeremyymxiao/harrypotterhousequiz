import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'
import { ko } from '@/i18n/translations/ko'

export const metadata = {
  title: 'AI 분류 모자 테스트 | 마법의 분류 모자와 대화하기 | 해리포터 기숙사 테스트',
  description: '우리의 AI 분류 모자와 마법 같은 대화를 나누세요! 호그와트 기숙사에 대해 질문하고, 대화를 통해 분류되며, 마법 세계에서 당신의 진정한 위치를 발견하세요.',
  keywords: '분류 모자 테스트, AI 분류 모자, 분류 모자와 대화하기, 해리포터 기숙사 테스트',
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/ko/sorting-hat-quiz'
  },
  openGraph: {
    title: '마법의 분류 모자와 대화하기 - 인터랙티브 호그와트 기숙사 분류',
    description: '분류 모자 AI와 개인적인 대화를 나누세요! 질문하고, 기숙사에 대해 배우고, 마법 같은 대화를 통해 호그와트에서 당신이 진정으로 속한 곳을 발견하세요.'
  }
}

export default function SortingHatQuizPage() {
  return (
    <div className="quiz-bg min-h-screen">
      <div className="magic-particles" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <Image
              src="/images/sorting-hat.png"
              alt="마법의 분류 모자"
              width={150}
              height={150}
              className="mx-auto mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic mb-6">
            마법의 분류 모자
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic mb-8 max-w-3xl mx-auto">
            "당신은 내가 예쁘지 않다고 생각할지 모르지만, 보이는 대로 판단하지 마세요."
          </p>
        </div>
      </section>
      
      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-magic text-amber-400 mb-4">분류 모자와 대화하기</h2>
          <p className="text-amber-200 max-w-2xl mx-auto font-magic">
            우리의 AI 분류 모자와 마법 같은 대화를 나누세요! 기숙사에 대해 질문하고, 
            자신에 대한 세부 정보를 공유하세요.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>
      
      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-8">호그와트의 네 기숙사</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-magic text-yellow-400 mb-3">그리핀도르</h3>
              <p className="text-amber-200 mb-2 font-magic">가치관: 용기, 대담함, 기사도</p>
              <p className="text-amber-200 font-magic">유명한 구성원: 해리 포터, 헤르미온느 그레인저, 론 위즐리</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-magic text-green-400 mb-3">슬리데린</h3>
              <p className="text-amber-200 mb-2 font-magic">가치관: 야망, 교활함, 리더십, 자원</p>
              <p className="text-amber-200 font-magic">유명한 구성원: 세베루스 스네이프, 드라코 말포이, 멀린</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-magic text-yellow-300 mb-3">후플푸프</h3>
              <p className="text-amber-200 mb-2 font-magic">가치관: 근면, 인내, 충성, 공정한 플레이</p>
              <p className="text-amber-200 font-magic">유명한 구성원: 뉴트 스캐맨더, 세드릭 디고리, 님파도라 통스</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-magic text-blue-400 mb-3">래번클로</h3>
              <p className="text-amber-200 mb-2 font-magic">가치관: 지성, 지혜, 창의성, 독창성</p>
              <p className="text-amber-200 font-magic">유명한 구성원: 루나 러브굿, 필리우스 플리트윅, 로웨나 래번클로</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic text-amber-400 mb-6">테스트를 해보세요!</h2>
          <p className="text-amber-200 mb-8 font-magic">
            구조화된 경험을 선호한다면, 우리의 상세한 해리 포터 기숙사 테스트가 당신의 진정한 호그와트 기숙사를 발견하는 또 다른 방법을 제공합니다.
          </p>
          <Link 
            href="/ko/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-magic text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            테스트 시작하기
          </Link>
        </div>
      </section>
    </div>
  )
} 