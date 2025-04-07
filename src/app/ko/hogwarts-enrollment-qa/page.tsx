import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "호그와트 입학 Q&A | 호그와트 마법 학교 입학 방법",
  description: "호그와트 마법 학교의 입학 과정, 입학 기준 및 자주 묻는 질문에 대해 알아보세요. 호그와트 입학 허가서를 받는 방법, 학비, 그리고 마법 세계에 관한 기타 중요한 정보를 탐색하세요.",
  keywords: "호그와트 입학, 호그와트 합격, 호그와트 입학 Q&A, 호그와트 입학 허가서, 호그와트 학비, 호그와트 교복, 지팡이 구매, 다이애건 앨리",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/ko/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "호그와트 입학 Q&A | 마법 학교 입학 가이드",
    description: "호그와트 마법 학교의 입학 과정, 입학 기준 및 자주 묻는 질문을 탐색하세요. 호그와트 입학 허가서를 받는 방법을 알아보세요!"
  }
}

export default function HogwartsEnrollmentQA() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 pt-24 pb-12 flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-magic-ko text-center mb-8">
              호그와트 입학 Q&A
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-magic-ko leading-relaxed">
              호그와트 입학 Q&A 페이지에 오신 것을 환영합니다! 여기서는 호그와트 마법 학교 입학에 관한 일반적인 질문에 답하고, 마법 세계에서 가장 유명한 학교의 입학 과정과 관련 정보를 이해하는 데 도움을 드립니다. 부엉이가 배달한 편지를 막 받았든, 단순히 마법 세계에 호기심이 있든, 여기서 찾고 있는 답변을 찾을 수 있습니다.
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">호그와트의 입학 과정은 어떻게 되나요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                어린 마녀나 마법사가 태어나면, 호그와트의 비밀 방에 보관된 '입학 허가의 깃펜'이 '입학 허가의 책'에 아이의 이름을 기록합니다. 아이의 11번째 생일에, 호그와트는 부엉이와 함께 입학 허가서를 보내 공식적으로 학교 입학을 환영합니다!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">호그와트에 어떻게 지원하나요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                적극적으로 지원할 필요가 없습니다. 호그와트는 자격 있는 어린 마녀와 마법사를 선택하여 입학 허가서를 보냅니다. 마법 능력은 타고나는 것이며, 호그와트의 마법은 마법 재능을 가진 모든 아이들을 식별하고 적절한 시기에 초대할 수 있습니다.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">11살이 넘었고 입학 허가서를 받지 못했습니다. 아직 입학할 기회가 있나요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                안타깝게도, 호그와트의 전통에 따르면, 11살이 넘은 학생은 입학할 수 없습니다. 호그와트의 교육 시스템은 7년 과정으로 설계되어 있으며, 11살부터 시작하여 학생들이 모든 필요한 마법 과정을 완전히 배울 수 있도록 보장합니다.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">온라인에서 언급되는 '사전 등록'은 무엇인가요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                넷이즈는 공식 출시 전에 여러 베타 테스트와 이벤트를 진행한 '해리 포터: 마법 각성'이라는 게임을 개발했습니다. 이러한 이벤트 중 일부는 사전 등록이 필요했습니다. 이는 소설과 영화에 묘사된 호그와트 입학 과정과는 관련이 없으며, 단지 게임의 마케팅 활동일 뿐입니다.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">호그와트는 얼마의 비용이 드나요? 어떻게 지불하나요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                호그와트는 수업료를 청구하지 않습니다. 마법 세계에서 호그와트 교육은 입학한 모든 마녀와 마법사에게 무료로 제공됩니다. 학생들은 교과서, 지팡이, 로브 등의 개인 물품만 구매하면 됩니다. 현실에서는 호그와트 수업료를 지불하라고 요구하는 사람은 사기를 시도하고 있을 가능성이 높다는 점에 유의하세요.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">교복과 지팡이는 어떻게 구매하나요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                입학 허가서를 받은 후, 어린 마녀와 마법사들은 다이애건 앨리를 방문하여 로브, 지팡이, 기타 학용품을 구매합니다. 로브는 마담 말킨의 로브 가게에서 구매할 수 있으며, 지팡이는 올리밴더에서 선택할 수 있습니다. 기억하세요, 지팡이가 마법사를 선택하는 것이지, 그 반대가 아닙니다!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">호그와트는 정말로 존재하나요?</h2>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
                그것은 훌륭한 질문입니다. 호그와트는 그것이 존재한다고 믿는 모든 사람의 마음 속에 존재합니다. 기술적으로, 호그와트는 J.K. 롤링이 '해리 포터' 시리즈에서 창조한 가상의 마법 학교입니다. 소설을 읽고 영화를 보면서, 우리는 이 학교의 마법과 캠퍼스 생활의 아름다움을 배울 수 있습니다.
              </p>
              <p className="text-lg text-amber-200 font-magic-ko leading-relaxed mt-4">
                팬 사이트로서, 우리는 이러한 멋진 마법 이야기를 읽는 것이 누구에게나 유익하다고 생각합니다. 정말로 마법 세계에 몰입하고 싶다면, '해리 포터' 시리즈를 읽는 것으로 마법의 여정을 시작해 보는 것은 어떨까요?
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">마법 세계 상식</h2>
            <p className="text-lg text-amber-200 font-magic-ko leading-relaxed">
              호그와트 마법 학교는 네 명의 위대한 마법사에 의해 설립되었습니다: 고드릭 그리핀도르, 헬가 후플푸프, 로웨나 래번클로, 살라자르 슬리데린. 학교는 스코틀랜드의 인적이 드문 곳에 위치해 있으며, 머글(비마법인)에게는 보이지 않습니다. 호그와트 성은 강력한 마법으로 보호되어 있으며, 머글 방지 주문이 포함되어 있어 머글의 눈에는 버려진 위험한 폐허처럼 보입니다.
            </p>
            <p className="text-lg text-amber-200 font-magic-ko leading-relaxed mt-4">
              호그와트 익스프레스는 매년 9월 1일 런던의 킹스 크로스 역의 9와 3/4 플랫폼에서 출발하여 학생들을 호그와트로 데려갑니다. 학생들은 9번과 10번 플랫폼 사이에 숨겨진 마법 장벽을 통과하여 9와 3/4 플랫폼에 도달해야 합니다.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-magic-ko text-amber-400 mb-6">더 많은 마법 세계 탐험</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/ko/quiz"
                className="magic-button px-8 py-4 text-xl font-magic-ko text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                기숙사 배정 퀴즈
              </Link>
              <Link 
                href="/ko/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-magic-ko text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                분류 모자와 대화
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 