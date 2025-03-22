import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'
import { ru } from '@/i18n/translations/ru'

export const metadata = {
  title: 'ИИ Тест Распределяющей шляпы | Разговор с волшебной Распределяющей шляпой | Тест на факультет Хогвартса',
  description: 'Проведите волшебный разговор с нашей ИИ Распределяющей шляпой! Задавайте вопросы о факультетах Хогвартса, пройдите распределение через диалог и откройте для себя свое истинное место в мире волшебства.',
  keywords: 'Тест Распределяющей шляпы, ИИ Распределяющая шляпа, Разговор с Распределяющей шляпой, Тест на факультет Гарри Поттера, Факультеты Хогвартса',
  alternates: {
    canonical: 'https://harrypotterquiz.pro/ru/sorting-hat-quiz'
  },
  openGraph: {
    title: 'Разговор с волшебной Распределяющей шляпой - Интерактивное распределение по факультетам Хогвартса',
    description: 'Проведите личный разговор с ИИ Распределяющей шляпой! Задавайте вопросы, узнавайте о факультетах и откройте, где вы действительно принадлежите в Хогвартсе через волшебный диалог.'
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
              alt="Волшебная Распределяющая шляпа"
              width={150}
              height={150}
              className="mx-auto mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl text-amber-400 font-magic mb-6">
            Волшебная Распределяющая шляпа
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-magic mb-8 max-w-3xl mx-auto">
            "Возможно, вы не считаете меня красивой, но не судите по внешности, я съем себя, если вы найдете шляпу умнее меня."
          </p>
        </div>
      </section>
      
      {/* About the Sorting Hat */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic text-amber-400 mb-4">История Распределяющей шляпы</h2>
              <p className="text-amber-200 mb-4">
                Распределяющая шляпа была создана около 10 века четырьмя основателями Хогвартса: Годриком Гриффиндором, Салазаром Слизерином, Кандидой Когтевран и Пенелопой Пуффендуй.
              </p>
              <p className="text-amber-200">
                Когда основатели стали беспокоиться о том, как будут отбираться ученики для их факультетов после их смерти, Годрик снял свою шляпу, и каждый основатель добавил в нее знания и мудрость.
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-magic text-amber-400 mb-4">Как работает распределение</h2>
              <p className="text-amber-200 mb-4">
                Распределяющая шляпа анализирует ваш разум, характер и ценности, чтобы определить, к какому факультету Хогвартса вы действительно принадлежите. Хотя обычно она принимает окончательное решение, известно, что она учитывает ваши предпочтения.
              </p>
              <p className="text-amber-200">
                Как однажды шляпа сказала Гарри Поттеру: "Всё здесь, в твоей голове, и Слизерин поможет тебе на пути к величию, в этом нет сомнений... если ты уверен — тогда ГРИФФИНДОР!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-magic text-amber-400 mb-4">Поговорите с Распределяющей шляпой</h2>
          <p className="text-amber-200 max-w-2xl mx-auto font-magic">
            Проведите волшебный разговор с нашей ИИ Распределяющей шляпой! Задавайте вопросы о факультетах, 
            расскажите о себе или просто беседуйте о волшебном мире.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>
      
      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-magic text-amber-400 text-center mb-8">Четыре факультета Хогвартса</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-magic text-yellow-400 mb-3">Гриффиндор</h3>
              <p className="text-amber-200 mb-2 font-magic">Ценности: Храбрость, Отвага, Смелость, Рыцарство</p>
              <p className="text-amber-200 font-magic">Известные участники: Гарри Поттер, Гермиона Грейнджер, Рон Уизли, Альбус Дамблдор</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-magic text-green-400 mb-3">Слизерин</h3>
              <p className="text-amber-200 mb-2 font-magic">Ценности: Амбиции, Хитрость, Лидерство, Находчивость</p>
              <p className="text-amber-200 font-magic">Известные участники: Северус Снейп, Драко Малфой, Мерлин, Гораций Слизнорт</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-magic text-yellow-300 mb-3">Пуффендуй</h3>
              <p className="text-amber-200 mb-2 font-magic">Ценности: Трудолюбие, Терпение, Верность, Честная игра</p>
              <p className="text-amber-200 font-magic">Известные участники: Ньют Саламандер, Седрик Диггори, Нимфадора Тонкс, Помона Стебль</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-magic text-blue-400 mb-3">Когтевран</h3>
              <p className="text-amber-200 mb-2 font-magic">Ценности: Интеллект, Мудрость, Творчество, Оригинальность</p>
              <p className="text-amber-200 font-magic">Известные участники: Полумна Лавгуд, Филиус Флитвик, Кандида Когтевран, Гаррик Олливандер</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-magic text-amber-400 mb-6">Не готовы к разговору? Пройдите тест!</h2>
          <p className="text-amber-200 mb-8 font-magic">
            Если вы предпочитаете структурированный опыт, наш подробный тест на факультет Гарри Поттера предлагает другой способ обнаружить ваш истинный факультет Хогвартса.
          </p>
          <Link 
            href="/ru/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-magic text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            Пройти тест
          </Link>
        </div>
      </section>
    </div>
  )
} 