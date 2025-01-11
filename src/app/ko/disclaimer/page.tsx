export const metadata = {
  title: "면책 조항 | 해리포터 기숙사 테스트",
  description: "해리포터 기숙사 테스트의 법적 면책 조항 및 저작권 정보.",
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-magic-ko text-amber-400 text-center mb-8">면책 조항</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">저작권 고지</h2>
            <p className="text-amber-200">
              해리포터 캐릭터, 이름 및 관련 표시는 © & ™ Warner Bros. Entertainment Inc.의 상표입니다. 
              Harry Potter Publishing Rights © JKR. 이 웹사이트는 팬이 제작한 프로젝트이며, 
              Warner Bros. Entertainment Inc. 또는 J.K. Rowling과 제휴, 승인, 후원 또는 특별히 승인받지 않았습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">팬 콘텐츠</h2>
            <p className="text-amber-200">
              이 웹사이트는 팬들이 팬들을 위해 만든 무료 엔터테인먼트 서비스입니다. 
              해리포터 시리즈와 관련된 모든 콘텐츠는 팬들의 즐거움과 커뮤니티 참여를 위한 공정 사용 목적으로 사용됩니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">상표 정보</h2>
            <p className="text-amber-200">
              모든 해리포터 관련 상표, 캐릭터, 이름 및 표시는 Warner Bros. Entertainment Inc.와 
              J.K. Rowling의 재산입니다. 우리는 이러한 재산에 대한 소유권을 주장하지 않습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">비영리 사용</h2>
            <p className="text-amber-200">
              이것은 비영리, 비상업적 팬 웹사이트입니다. 우리는 이 서비스로부터 어떠한 수익도 창출하지 않으며, 
              오직 엔터테인먼트 목적으로만 무료로 제공됩니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 