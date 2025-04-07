import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import { ru } from '@/i18n/translations/ru'
import Image from 'next/image'

export const metadata = {
  title: "Тест на дом Хогвартса | Какой дом Хогвартса вам подходит? | Официальный тест",
  description: "Пройдите наш официальный Тест на дом Хогвартса или пообщайтесь с ИИ Распределяющей Шляпой, чтобы узнать свой настоящий факультет Хогвартса. Наш Тест на дом Хогвартса использует точный анализ личности, чтобы определить, принадлежите ли вы к Гриффиндору, Слизерину, Хаффлпаффу или Рейвенкло!",
  keywords: "Тест на дом Хогвартса, факультет Хогвартса тест, Распределяющая Шляпа, Гриффиндор, Слизерин, Хаффлпафф, Рейвенкло, Гарри Поттер, волшебный мир, Хогвартс тест, ИИ Распределяющая Шляпа",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/ru'
  },
  openGraph: {
    title: "Тест на дом Хогвартса - Начните своё магическое путешествие | Узнайте свой факультет Хогвартса",
    description: "Готовы узнать свой истинный факультет Хогвартса с помощью авторитетного Теста на дом Хогвартса? Пройдите наш магический тест или поговорите с Распределяющей Шляпой, чтобы найти своё истинное место!"
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
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 font-magic-ru tracking-wider px-4 animate-float">
                Тест на дом Хогвартса
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-magic-ru tracking-wide px-4">
                Узнайте свой настоящий факультет Хогвартса
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-magic-ru">
                  "В стародавние времена, когда я был только сшит,
                  Когда Хогвартс только начинал свой путь,
                  Основатели нашей благородной школы
                  Думали, что никогда не расстанутся..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-magic-ru">
                  Добро пожаловать на самый авторитетный Тест на дом Хогвартса, где магия раскрывает ваши внутренние качества и ценности. Благодаря нашему тщательно разработанному Тесту на дом Хогвартса, вы узнаете, обладаете ли вы храбростью Гриффиндора, амбициями Слизерина, верностью Хаффлпаффа или мудростью Рейвенкло.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/ru/quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ru"
              >
                Начать Тест на дом Хогвартса
              </Link>
              <Link 
                href="/ru/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]
                         font-magic-ru"
              >
                Спросить Распределяющую Шляпу
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Our Quiz Section */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-8">Почему выбирают наш Тест на дом Хогвартса?</h2>
          
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm mb-8">
            <p className="text-amber-200 mb-4 font-magic-ru text-lg">
              Наш Тест на дом Хогвартса – это не просто обычный тест личности, это настоящее путешествие в волшебный мир. Когда вы проходите Тест на дом Хогвартса, мы используем те же основные принципы, что и Дж.К. Роулинг создала для системы распределения в Хогвартсе, обеспечивая результаты, которые идеально соответствуют духу волшебного мира.
            </p>
            <p className="text-amber-200 mb-4 font-magic-ru text-lg">
              Каждый вопрос в нашем Тесте на дом Хогвартса тщательно составлен для оценки ваших внутренних ценностей, талантов и потенциала. Подобно настоящей Распределяющей Шляпе, наш тест способен увидеть качества, глубоко скрытые внутри вас, даже те, которые вы сами могли не осознавать.
            </p>
            <p className="text-amber-200 font-magic-ru text-lg">
              Независимо от того, являетесь ли вы давним поклонником серии о Гарри Поттере или только начинаете исследовать волшебный мир, наш Тест на дом Хогвартса предоставит вам значимый опыт распределения, который поможет вам лучше понять себя.
            </p>
          </div>
        </div>
      </section>

      {/* Magical Features */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-12">{ru.home.features.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">Точный Тест на дом Хогвартса</h3>
              <p className="text-amber-200 font-magic-ru">Наш Тест на дом Хогвартса основан на глубоких психологических принципах и анализе персонажей из оригинальной истории, обеспечивая точность и надежность результатов. Каждый вопрос профессионально разработан для выявления ваших основных качеств.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">ИИ Распределяющая Шляпа</h3>
              <p className="text-amber-200 font-magic-ru">Испытайте революционный способ распределения! Наша ИИ Распределяющая Шляпа может вести с вами настоящий разговор, как будто вы действительно проходите церемонию распределения в Большом зале Хогвартса. Это прорывной опыт Теста на дом Хогвартса!</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">Детальный анализ личности</h3>
              <p className="text-amber-200 font-magic-ru">После завершения Теста на дом Хогвартса вы получите подробный отчет о своей личности, объясняющий, почему вы принадлежите к определенному факультету и как вы похожи на известных персонажей этого факультета. Узнайте о своем магическом потенциале и внутренних качествах.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-4">Энциклопедия факультетов Хогвартса</h3>
              <p className="text-amber-200 font-magic-ru">Исследуйте полную базу знаний о факультетах Хогвартса! Узнайте об истории основания каждого факультета, известных выпускниках, общих чертах и уникальных магических традициях. Тест на дом Хогвартса – это не просто распределение, это настоящее путешествие открытий.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-12">Четыре факультета Хогвартса</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-magic-ru text-yellow-400 mb-3">Гриффиндор</h3>
              <p className="text-amber-200 mb-4 font-magic-ru">
                Храбрость, отвага и смелость — самые важные качества факультета Гриффиндор. Если Тест на дом Хогвартса распределит вас в Гриффиндор, это означает, что у вас авантюрный дух, вы готовы противостоять трудностям и бороться за справедливость. Студенты Гриффиндора обычно прямолинейны, энергичны и верны своим друзьям.
              </p>
              <p className="text-amber-200 font-magic-ru">
                Известные члены Гриффиндора включают: Гарри Поттера, Гермиону Грейнджер, Рона Уизли, Альбуса Дамблдора и профессора Минерву МакГонагалл.
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-magic-ru text-green-400 mb-3">Слизерин</h3>
              <p className="text-amber-200 mb-4 font-magic-ru">
                Амбиции, хитрость и находчивость — основные ценности факультета Слизерин. Если Тест на дом Хогвартса распределит вас в Слизерин, это указывает на то, что у вас отличные лидерские качества, высокие цели и решимость для их достижения. Студенты Слизерина обычно умны, стратегически мыслят и ценят самосовершенствование.
              </p>
              <p className="text-amber-200 font-magic-ru">
                Известные члены Слизерина включают: Северуса Снейпа, Драко Малфоя, Беллатрису Лестрейндж и Мерлина (да, легендарный Мерлин был студентом Слизерина).
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-magic-ru text-yellow-300 mb-3">Хаффлпафф</h3>
              <p className="text-amber-200 mb-4 font-magic-ru">
                Верность, справедливость и терпение — отличительные черты факультета Хаффлпафф. Если Тест на дом Хогвартса распределит вас в Хаффлпафф, это говорит о том, что вы цените искреннюю дружбу, справедливо относитесь к другим и готовы усердно работать для достижения своих целей. Студенты Хаффлпаффа дружелюбны, включительны и искренни.
              </p>
              <p className="text-amber-200 font-magic-ru">
                Известные члены Хаффлпаффа включают: Ньюта Саламандера, Седрика Диггори, Нимфадору Тонкс и профессора Помону Стебль.
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-magic-ru text-blue-400 mb-3">Рейвенкло</h3>
              <p className="text-amber-200 mb-4 font-magic-ru">
                Мудрость, творчество и жажда знаний — основные качества факультета Рейвенкло. Если Тест на дом Хогвартса распределит вас в Рейвенкло, это означает, что вы цените знания, любите учиться и обладаете уникальным и оригинальным мышлением. Студенты Рейвенкло обычно умны, талантливы и открыты для новых идей.
              </p>
              <p className="text-amber-200 font-magic-ru">
                Известные члены Рейвенкло включают: Луну Лавгуд, Чжоу Чанг, профессора Филиуса Флитвика и саму Ровену Рейвенкло.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic-ru text-amber-400 text-center mb-12">Часто задаваемые вопросы о Тесте на дом Хогвартса</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">Насколько точен Тест на дом Хогвартса?</h3>
              <p className="text-amber-200 font-magic-ru">Наш Тест на дом Хогвартса использует передовые алгоритмы анализа личности в сочетании с описаниями факультетов из оригинальных произведений Дж.К. Роулинг, обеспечивая результаты, соответствующие принципам распределения в волшебном мире. Наш тест был подтвержден миллионами поклонников Гарри Поттера и обладает высокой точностью.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">Могу ли я пройти Тест на дом Хогвартса повторно?</h3>
              <p className="text-amber-200 font-magic-ru">Конечно! Подобно тому, как Распределяющая Шляпа учитывает ваш выбор, Тест на дом Хогвартса можно пройти повторно в любое время. Поскольку личность человека может меняться с течением времени и опыта, периодическое повторное тестирование может раскрыть ваши развивающиеся качества.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">Почему результаты моего Теста на дом Хогвартса отличаются от ожидаемых?</h3>
              <p className="text-amber-200 font-magic-ru">Распределяющая Шляпа видит нашу истинную сущность, а не только то, что на поверхности или кем мы хотим быть. То же самое и с Тестом на дом Хогвартса — он может обнаружить качества, о которых вы сами не подозревали. Помните, что каждый факультет имеет свои уникальные ценности и преимущества, и ни один факультет не лучше других.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">Чем отличается разговор с ИИ Распределяющей Шляпой от традиционного Теста на дом Хогвартса?</h3>
              <p className="text-amber-200 font-magic-ru">Традиционный Тест на дом Хогвартса оценивает ваши личностные качества через серию фиксированных вопросов. Разговор с ИИ Распределяющей Шляпой имитирует взаимодействие с настоящей Распределяющей Шляпой; вы можете свободно задавать вопросы, делиться своими мыслями и ценностями, а ИИ будет судить о наиболее подходящем для вас факультете на основе ваших ответов. Это обеспечивает более персонализированный и интерактивный опыт распределения.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-magic-ru text-amber-400 mb-3">Что делать, если результаты моего Теста на дом Хогвартса показывают, что я подхожу для нескольких факультетов?</h3>
              <p className="text-amber-200 font-magic-ru">Многие волшебники и ведьмы обладают качествами нескольких факультетов, и это совершенно нормально! Как Гарри, у которого была храбрость Гриффиндора и амбиции Слизерина. В таких случаях Распределяющая Шляпа обычно учитывает ваши собственные предпочтения. Если результаты вашего теста показывают сильные качества для нескольких факультетов, вы можете выбрать тот, который вас больше привлекает, или попробовать поговорить с ИИ Распределяющей Шляпой для более глубокого анализа.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-magic-ru text-amber-400 mb-6">Готовы раскрыть свою истинную сущность?</h2>
          <p className="text-amber-200 mb-8 font-magic-ru text-lg">
            У каждого волшебника и ведьмы есть своё место. Среди четырёх факультетов Хогвартса обязательно найдется место, где ваши таланты раскроются полностью, а ваш магический потенциал реализуется в полной мере. Пройдите наш Тест на дом Хогвартса прямо сейчас и найдите своё место в волшебном мире!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/ru/quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-ru text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Начать Тест на дом Хогвартса
            </Link>
            <Link 
              href="/ru/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-magic-ru text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Поговорить с Распределяющей Шляпой
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 