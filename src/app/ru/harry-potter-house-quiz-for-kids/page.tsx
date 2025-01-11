import { Metadata } from 'next'
import QuizComponent from '@/components/QuizComponent'

export const metadata: Metadata = {
  title: 'Тест распределения по факультетам Хогвартса для детей | Узнай свой факультет',
  description: 'Пройди наш детский тест распределения по факультетам Хогвартса и узнай, в какой факультет ты попадешь - Гриффиндор, Слизерин, Хаффлпафф или Рейвенкло!',
}

export default function HarryPotterHouseQuizForKids() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-ru text-amber-400 text-center mb-8">
            Тест распределения по факультетам Хогвартса для детей
          </h1>

          <div className="space-y-4">
            <p className="text-amber-200 text-lg text-center">
              Добро пожаловать в Хогвартс, юный волшебник! Готов узнать, в какой факультет тебя отправит
              Распределяющая шляпа? Ответь на несколько простых вопросов, и мы узнаем, где твой дом в
              Хогвартсе - храбрый Гриффиндор, мудрый Рейвенкло, верный Хаффлпафф или хитрый Слизерин!
            </p>
          </div>

          <QuizComponent />
        </div>
      </div>
    </div>
  )
} 