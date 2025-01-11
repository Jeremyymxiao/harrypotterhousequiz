export const metadata = {
    title: "Aviso Legal | Teste da Casa de Hogwarts",
    description: "Aviso legal e informações de direitos autorais para o Teste da Casa de Hogwarts.",
  }
  
  export default function Disclaimer() {
    return (
      <div className="min-h-screen w-full pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
            <h1 className="text-4xl font-magic-pt text-amber-400 text-center mb-8">Aviso Legal</h1>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-magic-pt text-amber-400">Aviso de Direitos Autorais</h2>
              <p className="text-amber-200">
                Os personagens, nomes e elementos relacionados a HARRY POTTER são © & ™ Warner Bros. Entertainment Inc. 
                Direitos de Publicação de Harry Potter © JKR. Este site é um projeto feito por fãs e não é afiliado, 
                endossado, patrocinado ou especificamente aprovado pela Warner Bros. Entertainment Inc. ou J.K. Rowling.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-magic-pt text-amber-400">Conteúdo de Fãs</h2>
              <p className="text-amber-200">
                Este site é criado por fãs, para fãs, como um serviço de entretenimento gratuito. Todo o conteúdo 
                relacionado à série Harry Potter é usado sob uso justo para fins de diversão dos fãs e engajamento 
                da comunidade.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-magic-pt text-amber-400">Informações sobre Marcas Registradas</h2>
              <p className="text-amber-200">
                Todas as marcas registradas, personagens, nomes e elementos relacionados a Harry Potter são propriedade 
                da Warner Bros. Entertainment Inc. e J.K. Rowling. Não reivindicamos propriedade sobre nenhuma dessas 
                propriedades.
              </p>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-magic-pt text-amber-400">Uso Não Comercial</h2>
              <p className="text-amber-200">
                Este é um site de fãs não comercial e sem fins lucrativos. Não geramos nenhuma receita deste serviço 
                e ele é fornecido completamente gratuito apenas para fins de entretenimento.
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }