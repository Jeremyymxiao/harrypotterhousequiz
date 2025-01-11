import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Отказ от ответственности | Тест распределения по факультетам Хогвартса',
  description: 'Отказ от ответственности для теста распределения по факультетам Хогвартса - информация об авторских правах и использовании контента.',
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-ru text-amber-400 text-center mb-8">
            Отказ от ответственности
          </h1>

          {/* Уведомление об авторских правах */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Уведомление об авторских правах</h2>
            <p className="text-amber-200 text-lg">
              Гарри Поттер и все связанные с ним персонажи, места и элементы являются торговыми марками
              и авторскими правами Warner Bros. Entertainment Inc. Этот сайт не связан с J.K. Rowling,
              Bloomsbury Publishing, Scholastic Publishing, Warner Bros. Entertainment Inc. или их
              лицензиатами. Все права защищены их соответствующими владельцами.
            </p>
          </div>

          {/* Фанатский контент */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Фанатский контент</h2>
            <p className="text-amber-200 text-lg">
              Этот сайт является фанатским проектом, созданным поклонниками для поклонников. Мы не
              претендуем на владение какими-либо правами на интеллектуальную собственность, связанную
              с франшизой Гарри Поттера. Наш тест распределения по факультетам создан исключительно
              для развлечения и не является официальным продуктом.
            </p>
          </div>

          {/* Торговые марки */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Торговые марки</h2>
            <p className="text-amber-200 text-lg">
              Все упомянутые торговые марки, логотипы и авторские права принадлежат их соответствующим
              владельцам. Любые ссылки на защищенные авторским правом материалы используются в
              соответствии с доктриной добросовестного использования и не предназначены для нарушения
              авторских прав.
            </p>
          </div>

          {/* Некоммерческое использование */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Некоммерческое использование</h2>
            <p className="text-amber-200 text-lg">
              Этот сайт является некоммерческим проектом и не получает никакой финансовой выгоды от
              использования материалов, связанных с Гарри Поттером. Мы не продаем товары или услуги и
              не собираем пожертвования. Сайт создан исключительно из любви к серии книг о Гарри Поттере
              и желания поделиться этой радостью с другими фанатами.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 