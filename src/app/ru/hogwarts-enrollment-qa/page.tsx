import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "Вопросы и ответы о поступлении в Хогвартс | Как поступить в Школу Чародейства и Волшебства Хогвартс",
  description: "Узнайте о процессе поступления, критериях отбора и ответы на часто задаваемые вопросы о Школе Чародейства и Волшебства Хогвартс. Откройте для себя, как получить письмо о зачислении, информацию о плате за обучение и другие важные сведения о волшебном мире.",
  keywords: "поступление в Хогвартс, зачисление в Хогвартс, письмо из Хогвартса, вопросы о Хогвартсе, плата за обучение в Хогвартсе, форма Хогвартса, покупка волшебной палочки, Косой переулок",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/ru/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "Вопросы и ответы о поступлении в Хогвартс | Руководство по поступлению в Школу Магии",
    description: "Узнайте о процессе поступления, критериях отбора и ответы на часто задаваемые вопросы о Школе Чародейства и Волшебства Хогвартс. Узнайте, как получить письмо о зачислении в Хогвартс!"
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
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-magic-ru text-center mb-8">
              Вопросы и ответы о поступлении в Хогвартс
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-magic-ru leading-relaxed">
              Добро пожаловать на страницу вопросов и ответов о поступлении в Хогвартс! Здесь мы отвечаем на общие вопросы о поступлении в Школу Чародейства и Волшебства Хогвартс, помогая вам понять процесс зачисления и связанную информацию о самой известной школе волшебного мира. Независимо от того, только ли вы получили письмо, доставленное совой, или просто интересуетесь волшебным миром, здесь вы найдете ответы, которые ищете.
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Как происходит процесс поступления в Хогвартс?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                Когда рождается молодая ведьма или волшебник, Перо Приёма записывает их имя в Книгу Поступления, которая хранится в тайной комнате в Хогвартсе. В свой 11-й день рождения, Хогвартс отправляет сову с письмом о зачислении, официально приглашая их в школу!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Как подать заявление в Хогвартс?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                Вам не нужно активно подавать заявление. Хогвартс сам отбирает квалифицированных молодых ведьм и волшебников и отправляет им письма о зачислении. Магические способности врожденные, и магия Хогвартса может определить всех детей с магическими талантами и пригласить их в подходящее время.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Мне больше 11 лет, и я не получил письмо о зачислении. Есть ли у меня еще шанс поступить?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                К сожалению, согласно традиции Хогвартса, студенты старше 11 лет не могут быть зачислены. Образовательная система Хогвартса разработана как семилетняя программа, начинающаяся в 11 лет, что гарантирует полное изучение всех необходимых магических курсов.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Что означает «предварительная регистрация», упоминаемая в интернете?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                NetEase разработала игру под названием «Гарри Поттер: Магия пробуждается», которая проводила несколько бета-тестов и мероприятий перед официальным запуском, некоторые из которых требовали предварительной регистрации. Это не связано с процессом поступления в Хогвартс, описанным в романах и фильмах, и является просто маркетинговой активностью для игры.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Сколько стоит обучение в Хогвартсе? Как произвести оплату?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                Хогвартс не взимает плату за обучение. В волшебном мире образование в Хогвартсе предоставляется бесплатно всем зачисленным ведьмам и волшебникам. Студенты должны только приобрести учебники, волшебные палочки, мантии и другие личные вещи. Обратите внимание, что в реальности любой, кто просит вас заплатить за обучение в Хогвартсе, вероятно, пытается вас обмануть.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Как приобрести форму и волшебную палочку?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                После получения письма о зачислении, молодые ведьмы и волшебники посещают Косой переулок, чтобы приобрести мантии, волшебные палочки и другие школьные принадлежности. Мантии можно купить в магазине мадам Малкин «Одежда на все случаи жизни», а волшебные палочки выбираются в магазине Олливандера. Помните, палочка выбирает волшебника, а не наоборот!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Существует ли Хогвартс на самом деле?</h2>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
                Это отличный вопрос. Хогвартс существует в сердце каждого, кто верит в него. Технически, Хогвартс — это вымышленная школа магии, созданная Дж.К. Роулинг в серии о Гарри Поттере. Читая романы и смотря фильмы, мы можем узнать о магии этой школы и красоте жизни в кампусе.
              </p>
              <p className="text-lg text-amber-200 font-magic-ru leading-relaxed mt-4">
                Как сайт фанатов, мы рекомендуем, что каждому было бы полезно прочитать эти чудесные волшебные истории. Если вы действительно хотите погрузиться в волшебный мир, почему бы не начать ваше магическое путешествие с чтения серии о Гарри Поттере?
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Интересные факты о волшебном мире</h2>
            <p className="text-lg text-amber-200 font-magic-ru leading-relaxed">
              Школа Чародейства и Волшебства Хогвартс была основана четырьмя великими волшебниками: Годриком Гриффиндором, Хельгой Хаффлпафф, Ровеной Равенкло и Салазаром Слизерином. Школа расположена в уединенном районе Шотландии, невидимом для магглов (не-магических людей). Замок Хогвартс защищен мощной магией, включая заклинания против магглов, которые делают его похожим на заброшенные опасные руины в глазах магглов.
            </p>
            <p className="text-lg text-amber-200 font-magic-ru leading-relaxed mt-4">
              Хогвартс-экспресс отправляется с платформы 9¾ на вокзале Кингс-Кросс в Лондоне каждое 1 сентября, доставляя студентов в Хогвартс. Студенты должны пройти через волшебный барьер, скрытый между платформами 9 и 10, чтобы добраться до платформы 9¾.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-magic-ru text-amber-400 mb-6">Исследуйте больше волшебного мира</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/ru/quiz"
                className="magic-button px-8 py-4 text-xl font-magic-ru text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                Пройти тест распределения
              </Link>
              <Link 
                href="/ru/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-magic-ru text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                Поговорить с Распределяющей шляпой
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 