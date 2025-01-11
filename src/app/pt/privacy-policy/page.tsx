export const metadata = {
  title: "Política de Privacidade | Teste da Casa de Hogwarts",
  description: "Política de Privacidade do Teste da Casa de Hogwarts - Saiba como protegemos sua privacidade e tratamos seus dados.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-magic-pt text-amber-400 text-center mb-8">Política de Privacidade</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Introdução</h2>
            <p className="text-amber-200">
              Bem-vindo ao Teste da Casa de Hogwarts. Respeitamos sua privacidade e estamos comprometidos em proteger 
              seus dados pessoais. Esta política de privacidade explica como tratamos qualquer informação quando você 
              visita nosso site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Informações que Coletamos</h2>
            <p className="text-amber-200">
              Coletamos informações mínimas para melhorar sua experiência:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>Preferências de idioma</li>
              <li>Respostas do teste (não armazenadas permanentemente)</li>
              <li>Dados básicos de uso através de cookies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Como Usamos suas Informações</h2>
            <p className="text-amber-200">
              Usamos as informações coletadas exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>Fornecer e manter a funcionalidade do teste</li>
              <li>Lembrar suas preferências de idioma</li>
              <li>Melhorar nosso site e experiência do usuário</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Cookies</h2>
            <p className="text-amber-200">
              Usamos cookies essenciais para garantir o funcionamento adequado do nosso site. Esses cookies são 
              necessários para recursos básicos como preferências de idioma e não rastreiam informações pessoais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Serviços de Terceiros</h2>
            <p className="text-amber-200">
              Nosso site pode usar serviços de terceiros para análises e funcionalidade. Esses serviços podem 
              coletar dados de uso anônimos sujeitos às suas próprias políticas de privacidade.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Alterações nesta Política</h2>
            <p className="text-amber-200">
              Podemos atualizar esta política de privacidade de tempos em tempos. Quaisquer alterações serão 
              publicadas nesta página.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-magic-pt text-amber-400">Contate-nos</h2>
            <p className="text-amber-200">
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através 
              do nosso site.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 