import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { ko } from '@/i18n/translations/ko'
import Image from 'next/image'

export const metadata = {
  title: "해리포터 기숙사 테스트 | 당신의 호그와트 기숙사는? | 공식 분류",
  description: "저희의 공식 해리포터 기숙사 테스트를 통해 또는 AI 분류 모자와 대화하여 당신의 진정한 호그와트 기숙사를 찾아보세요. 이 해리포터 기숙사 테스트는 정밀한 성격 분석을 통해 그리핀도르, 슬리데린, 후플푸프, 레이븐클로 중 당신에게 가장 잘 맞는 기숙사를 알려드립니다!",
  keywords: "해리포터 기숙사 테스트, 호그와트 기숙사 분류, 분류 모자 테스트, 호그와트 기숙사, 그리핀도르, 슬리데린, 후플푸프, 레이븐클로, 성격 테스트, 마법 세계, AI 분류 모자, 마법 테스트",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/ko'
  },
  openGraph: {
    title: "해리포터 기숙사 테스트 - 마법의 여정을 시작하세요 | 당신의 호그와트 기숙사 발견",
    description: "권위 있는 해리포터 기숙사 테스트로 당신의 진정한 호그와트 기숙사를 발견할 준비가 되셨나요? 마법 테스트를 받거나 분류 모자와 대화를 통해 당신이 진정으로 속한 곳을 찾아보세요!"
  }
}

export default function Home() {
  return (
    <div className="magic-bg min-h-screen w-full">
      <MagicCursor />
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 font-magic-ko tracking-wider px-4 animate-float">
                해리포터 기숙사 테스트
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-magic-ko tracking-wide px-4">
                당신의 진정한 호그와트 기숙사를 발견하세요
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-magic-ko">
                  "호그와트가 처음 시작되었을 때,
                  우리 학교의 설립자들은
                  결코 헤어지지 않을 것이라 생각했습니다.
                  그들은 마법을 배우는 가장 좋은 방법이 무엇인지 알고 있었지요..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-magic-ko">
                  가장 권위 있는 해리포터 기숙사 테스트에 오신 것을 환영합니다. 여기서 마법은 당신의 내면의 특성과 가치관을 드러냅니다. 저희의 신중하게 설계된 해리포터 기숙사 테스트를 통해 당신이 그리핀도르의 용기, 슬리데린의 야망, 후플푸프의 충성심, 또는 레이븐클로의 지혜를 가지고 있는지 발견할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/ko/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ko"
              >
                해리포터 기숙사 테스트 시작하기
              </Link>
              <Link 
                href="/ko/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ko"
              >
                분류 모자에게 질문하기
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Our Quiz Section */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ko text-amber-400 text-center mb-8">왜 저희의 해리포터 기숙사 테스트를 선택해야 할까요?</h2>
          
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm mb-8">
            <p className="text-amber-200 mb-4 font-magic-ko text-lg">
              저희의 해리포터 기숙사 테스트는 단순한 성격 테스트가 아닌, 마법 세계로의 여행입니다. 해리포터 기숙사 테스트를 받을 때, J.K. 롤링이 창조한 호그와트의 분류 시스템과 동일한 핵심 원칙을 채택하여, 마법의 세계의 정신에 완벽하게 맞는 결과를 보장합니다.
            </p>
            <p className="text-amber-200 mb-4 font-magic-ko text-lg">
              해리포터 기숙사 테스트의 각 질문은 당신의 내면의 가치관, 재능, 그리고 가능성을 평가하기 위해 신중하게 설계되었습니다. 원작의 분류 모자처럼, 저희의 테스트는 당신 자신도 알지 못했을 수 있는 당신의 깊은 내면의 자질을 볼 수 있습니다.
            </p>
            <p className="text-amber-200 font-magic-ko text-lg">
              해리포터 시리즈의 오랜 팬이든, 마법 세계를 탐험하기 시작한 분이든, 저희의 해리포터 기숙사 테스트는 자신을 더 깊이 이해하는 의미 있는 분류 경험을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Magical Features */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-ko text-amber-400 text-center mb-12">{ko.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">정밀한 해리포터 기숙사 테스트</h3>
              <p className="text-amber-200 font-magic-ko">저희의 해리포터 기숙사 테스트는 깊은 심리학적 원칙과 원작 캐릭터 분석을 기반으로 하여, 결과의 정확성과 신뢰성을 보장합니다. 각 질문은 전문적으로 설계되어 당신의 핵심 특성을 식별할 수 있습니다.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">AI 분류 모자</h3>
              <p className="text-amber-200 font-magic-ko">혁신적인 분류 방법을 경험하세요! 저희의 AI 분류 모자는 마치 호그와트의 대연회장에서 실제로 분류되는 것처럼 당신과 진정한 대화를 할 수 있습니다. 이것은 해리포터 기숙사 테스트의 혁명적인 경험입니다!</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">상세한 성격 분석</h3>
              <p className="text-amber-200 font-magic-ko">해리포터 기숙사 테스트 완료 후, 왜 당신이 특정 기숙사에 속하는지, 또한 그 기숙사의 유명한 캐릭터와의 유사점에 대한 상세한 성격 보고서를 받게 됩니다. 당신의 마법적 잠재력과 내면의 특성을 이해하세요.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-4">호그와트 기숙사 백과사전</h3>
              <p className="text-amber-200 font-magic-ko">호그와트 기숙사에 대한 완전한 지식 베이스를 탐험하세요! 각 기숙사의 설립 역사, 유명한 졸업생, 공통적인 특성, 그리고 독특한 마법 전통에 대해 배우세요. 해리포터 기숙사 테스트는 단순한 분류가 아닌, 발견의 여정입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ko text-amber-400 text-center mb-12">호그와트의 네 기숙사</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-magic-ko text-yellow-400 mb-3">그리핀도르</h3>
              <p className="text-amber-200 mb-4 font-magic-ko">
                용기, 담력, 대담함은 그리핀도르 기숙사의 가장 중요한 특성입니다. 해리포터 기숙사 테스트에서 당신이 그리핀도르에 분류된다면, 당신은 모험심이 있고, 어려움에 직면해도 일어서며, 정의를 위해 싸울 의지가 있다는 것을 의미합니다. 그리핀도르 학생들은 전형적으로 솔직하고 열정적이며, 친구들에게 충실합니다.
              </p>
              <p className="text-amber-200 font-magic-ko">
                유명한 그리핀도르 구성원으로는 해리 포터, 헤르미온느 그레인저, 론 위즐리, 알버스 덤블도어, 미네르바 맥고나걸 교수 등이 있습니다.
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-magic-ko text-green-400 mb-3">슬리데린</h3>
              <p className="text-amber-200 mb-4 font-magic-ko">
                야망, 교활함, 재치는 슬리데린 기숙사의 핵심 가치입니다. 해리포터 기숙사 테스트에서 당신이 슬리데린에 분류된다면, 당신은 뛰어난 리더십 기술, 높은 목표, 그리고 그것을 달성하기 위한 결단력이 있음을 보여줍니다. 슬리데린 학생들은 전형적으로 똑똑하고, 전략적 사고를 가지며, 자기 개선을 중요시합니다.
              </p>
              <p className="text-amber-200 font-magic-ko">
                유명한 슬리데린 구성원으로는 세베루스 스네이프, 드레이코 말포이, 벨라트릭스 레스트레인지, 그리고 멀린(네, 전설의 멀린은 슬리데린 학생이었습니다)이 있습니다.
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-magic-ko text-yellow-300 mb-3">후플푸프</h3>
              <p className="text-amber-200 mb-4 font-magic-ko">
                충성, 공정함, 인내심은 후플푸프 기숙사의 특징입니다. 해리포터 기숙사 테스트에서 당신이 후플푸프에 분류된다면, 당신은 진실된 우정, 공평한 대우, 그리고 목표를 향해 지속적으로 노력하는 의지를 중요시함을 보여줍니다. 후플푸프 학생들은 친근하고, 포용력이 있으며, 정직합니다.
              </p>
              <p className="text-amber-200 font-magic-ko">
                유명한 후플푸프 구성원으로는 뉴트 스캐맨더, 세드릭 디고리, 님파도라 통크스, 포모나 스프라우트 교수 등이 있습니다.
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-magic-ko text-blue-400 mb-3">레이븐클로</h3>
              <p className="text-amber-200 mb-4 font-magic-ko">
                지혜, 창의성, 지식에 대한 갈망은 레이븐클로 기숙사의 핵심 특성입니다. 해리포터 기숙사 테스트에서 당신이 레이븐클로에 분류된다면, 당신은 지식을 중요시하고, 배움을 즐기며, 독특하고 창의적인 사고 방식을 가지고 있음을 의미합니다. 레이븐클로 학생들은 전형적으로 지적이고 재능이 있으며, 마음이 열려 있습니다.
              </p>
              <p className="text-amber-200 font-magic-ko">
                유명한 레이븐클로 구성원으로는 루나 러브굿, 초 챙, 필리우스 플리트윅 교수, 그리고 로웨나 레이븐클로 자신이 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ko text-amber-400 text-center mb-12">해리포터 기숙사 테스트 자주 묻는 질문</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">해리포터 기숙사 테스트의 정확도는 어떤가요?</h3>
              <p className="text-amber-200 font-magic-ko">저희의 해리포터 기숙사 테스트는 J.K. 롤링의 원작에서의 기숙사 특성 묘사와 결합한 고급 성격 분석 알고리즘을 채택하여, 결과가 마법의 세계의 분류 원칙에 부합함을 보장합니다. 저희의 테스트는 수백만 명의 해리포터 팬들에 의해 검증되어 매우 높은 정확도를 가지고 있습니다.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">해리포터 기숙사 테스트를 다시 볼 수 있나요?</h3>
              <p className="text-amber-200 font-magic-ko">물론입니다! 분류 모자가 당신의 선택을 고려하는 것처럼, 해리포터 기숙사 테스트는 언제든지 다시 받을 수 있습니다. 사람의 성격은 시간과 경험에 따라 변할 수 있으므로, 가끔의 재테스트는 진화하는 특성을 드러낼 수 있습니다.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">해리포터 기숙사 테스트 결과가 예상과 다른 이유는 무엇인가요?</h3>
              <p className="text-amber-200 font-magic-ko">분류 모자는 표면에 보이는 것이나 우리가 원하는 것이 아닌, 우리의 내면의 본질을 봅니다. 해리포터 기숙사 테스트도 마찬가지로 작동하며, 당신이 알지 못했던 자질을 발견할 수 있습니다. 각 기숙사에는 고유한 가치와 강점이 있으며, 어떤 기숙사도 다른 기숙사보다 우월하지 않다는 것을 기억하세요.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">분류 모자 AI와의 대화와 전통적인 해리포터 기숙사 테스트는 어떻게 다른가요?</h3>
              <p className="text-amber-200 font-magic-ko">전통적인 해리포터 기숙사 테스트는 일련의 고정된 질문으로 당신의 성격 특성을 평가합니다. 반면, 분류 모자 AI와의 대화는 실제 분류 모자와의 상호작용을 시뮬레이션합니다. 자유롭게 질문하고, 생각과 가치관을 공유할 수 있으며, AI는 당신의 답변을 기반으로 최적의 기숙사를 판단합니다. 이를 통해 더 개인화되고 대화형의 분류 경험이 제공됩니다.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ko text-amber-400 mb-3">해리포터 기숙사 테스트 결과가 여러 기숙사에 적합하다고 나타난 경우 어떻게 해야 하나요?</h3>
              <p className="text-amber-200 font-magic-ko">많은 마법사와 마녀들이 여러 기숙사의 특성을 가지고 있는 것은 완전히 정상입니다! 해리가 그리핀도르의 용기와 슬리데린의 야망을 모두 가지고 있던 것처럼요. 그런 경우, 분류 모자는 보통 당신 자신의 선호도를 고려합니다. 테스트 결과가 여러 기숙사에 강한 특성을 보이는 경우, 가장 매력적인 기숙사를 선택하거나, 더 깊은 분석을 위해 AI 분류 모자와의 대화를 시도해 볼 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-magic-ko text-amber-400 mb-6">당신의 진정한 정체성을 발견할 준비가 되셨나요?</h2>
          <p className="text-amber-200 mb-8 font-magic-ko text-lg">
            모든 마녀와 마법사에게는 그들이 속한 곳이 있습니다. 호그와트의 네 개의 기숙사 중에서, 반드시 당신의 재능이 충분히 발휘되고, 당신의 마법적 잠재력이 최대한으로 발현되는 곳이 있습니다. 지금 바로 해리포터 기숙사 테스트를 받아 마법의 세계에서 당신의 자리를 찾아보세요!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/ko/quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-ko text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              해리포터 기숙사 테스트 시작하기
            </Link>
            <Link 
              href="/ko/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-ko text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              분류 모자와 대화하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}