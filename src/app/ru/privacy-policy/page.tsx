import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Тест распределения по факультетам Хогвартса',
  description: 'Политика конфиденциальности теста распределения по факультетам Хогвартса - узнайте, как мы защищаем вашу конфиденциальность и обрабатываем ваши данные.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-magic-ru text-amber-400 text-center mb-8">
            Политика конфиденциальности
          </h1>

          {/* Введение */}
          <div className="space-y-4">
            <p className="text-amber-200 text-lg">
              Добро пожаловать на тест распределения по факультетам Хогвартса. Мы уважаем вашу конфиденциальность
              и стремимся защитить ваши личные данные. Эта политика конфиденциальности объясняет, как мы
              обрабатываем информацию при посещении нашего сайта.
            </p>
          </div>

          {/* Сбор информации */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Сбор информации</h2>
            <p className="text-amber-200 text-lg">
              Мы собираем минимальную информацию для улучшения вашего опыта:
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>Ваши ответы на тест и результаты</li>
              <li>Базовая статистика использования (например, посещения страниц)</li>
              <li>Ваши языковые предпочтения</li>
            </ul>
          </div>

          {/* Использование информации */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Использование информации</h2>
            <p className="text-amber-200 text-lg">
              Мы используем собранную информацию для:
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>Предоставления услуг теста распределения</li>
              <li>Улучшения опыта использования сайта</li>
              <li>Создания анонимной статистики использования</li>
            </ul>
          </div>

          {/* Использование Cookie */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Использование Cookie</h2>
            <p className="text-amber-200 text-lg">
              Мы используем необходимые файлы cookie для:
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>Сохранения языковых предпочтений</li>
              <li>Обеспечения базовой функциональности сайта</li>
              <li>Улучшения производительности сайта</li>
            </ul>
          </div>

          {/* Безопасность данных */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Безопасность данных</h2>
            <p className="text-amber-200 text-lg">
              Мы принимаем соответствующие меры безопасности для защиты вашей информации от
              несанкционированного доступа, изменения, раскрытия или уничтожения.
              Все данные хранятся и передаются в зашифрованном виде.
            </p>
          </div>

          {/* Сторонние сервисы */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Сторонние сервисы</h2>
            <p className="text-amber-200 text-lg">
              Мы используем следующие сторонние сервисы:
            </p>
            <ul className="list-disc list-inside text-amber-200 text-lg space-y-2">
              <li>Google Analytics (для статистики посещений)</li>
              <li>Vercel (для хостинга сайта)</li>
            </ul>
          </div>

          {/* Конфиденциальность детей */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Конфиденциальность детей</h2>
            <p className="text-amber-200 text-lg">
              Наш сайт предназначен для фанатов Гарри Поттера всех возрастов. Мы не собираем намеренно
              личную информацию детей младше 13 лет. Если вы родитель или опекун и обнаружили, что ваш
              ребенок предоставил нам личную информацию, пожалуйста, свяжитесь с нами, и мы обеспечим
              удаление этой информации.
            </p>
          </div>

          {/* Обновления политики */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Обновления политики</h2>
            <p className="text-amber-200 text-lg">
              Мы можем время от времени обновлять эту политику конфиденциальности. Любые изменения будут
              опубликованы на этой странице и, при необходимости, мы уведомим вас через сайт.
            </p>
          </div>

          {/* Связаться с нами */}
          <div className="space-y-4">
            <h2 className="text-2xl font-magic-ru text-amber-400">Связаться с нами</h2>
            <p className="text-amber-200 text-lg">
              Если у вас есть какие-либо вопросы об этой Политике конфиденциальности, пожалуйста,
              свяжитесь с нами через сайт.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 