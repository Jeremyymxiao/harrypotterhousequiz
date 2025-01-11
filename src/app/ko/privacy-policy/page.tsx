export const metadata = {
  title: "개인정보 처리방침 | 해리포터 기숙사 테스트",
  description: "해리포터 기숙사 테스트의 개인정보 처리방침 - 귀하의 개인정보 보호 및 데이터 처리 방법에 대해 알아보세요.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-magic-ko text-amber-400 text-center mb-8">개인정보 처리방침</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">소개</h2>
            <p className="text-amber-200">
              해리포터 기숙사 테스트에 오신 것을 환영합니다. 우리는 귀하의 개인정보를 존중하고 보호하기 위해 최선을 다하고 있습니다.
              이 개인정보 처리방침은 귀하가 우리 웹사이트를 방문할 때 정보가 어떻게 처리되는지 설명합니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">수집하는 정보</h2>
            <p className="text-amber-200">
              우리는 귀하의 경험을 향상시키기 위해 최소한의 정보만을 수집합니다:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>언어 설정</li>
              <li>퀴즈 응답 (영구 저장되지 않음)</li>
              <li>쿠키를 통한 기본 사용 데이터</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">정보 사용 방법</h2>
            <p className="text-amber-200">
              수집된 정보는 다음 목적으로만 사용됩니다:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>퀴즈 기능 제공 및 유지</li>
              <li>언어 설정 기억</li>
              <li>웹사이트와 사용자 경험 개선</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">쿠키</h2>
            <p className="text-amber-200">
              우리 웹사이트는 기본 기능을 보장하기 위해 필수적인 쿠키를 사용합니다.
              이러한 쿠키는 언어 설정과 같은 기본 기능에 필요하며, 개인정보를 추적하지 않습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">제3자 서비스</h2>
            <p className="text-amber-200">
              우리 웹사이트는 분석 및 기능을 위해 제3자 서비스를 사용할 수 있습니다.
              이러한 서비스는 자체 개인정보 처리방침에 따라 익명의 사용 데이터를 수집할 수 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">정책 변경</h2>
            <p className="text-amber-200">
              이 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 변경사항이 있을 경우 이 페이지에 게시됩니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-ko text-amber-400">문의하기</h2>
            <p className="text-amber-200">
              이 개인정보 처리방침에 대해 질문이 있으시면 웹사이트를 통해 문의해 주시기 바랍니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 