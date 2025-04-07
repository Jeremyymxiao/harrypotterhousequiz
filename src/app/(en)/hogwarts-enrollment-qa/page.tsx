import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "Hogwarts Enrollment Q&A | How to Attend Hogwarts School of Witchcraft and Wizardry",
  description: "Learn about Hogwarts School of Witchcraft and Wizardry's enrollment process, admission criteria, and frequently asked questions. Discover how to receive your Hogwarts acceptance letter, school fees, and other important information about the wizarding world.",
  keywords: "Hogwarts enrollment, Hogwarts admission, Hogwarts acceptance letter, Hogwarts FAQ, Hogwarts school fees, Hogwarts uniform, wand purchasing, Diagon Alley",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/hogwarts-enrollment-qa'
  },
  openGraph: {
    title: "Hogwarts Enrollment Q&A | Magical School Admission Guide",
    description: "Explore Hogwarts School of Witchcraft and Wizardry's enrollment process, admission criteria, and FAQs. Learn how to get your Hogwarts acceptance letter!"
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
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 font-harry text-center mb-8">
              Hogwarts Enrollment Q&A
            </h1>
            
            <p className="text-xl text-amber-200 mb-8 font-harry leading-relaxed">
              Welcome to the Hogwarts Enrollment Q&A page! Here we answer common questions about admission to Hogwarts School of Witchcraft and Wizardry, helping you understand the enrollment process and related information about the most famous school in the wizarding world. Whether you've just received your owl-delivered letter or are simply curious about the magical world, you'll find the answers you seek here.
            </p>
          </div>

          {/* Q&A Section */}
          <div className="space-y-8">
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">What is Hogwarts' admission process?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                When a young witch or wizard is born, the Quill of Acceptance writes their name in the Book of Admittance, kept in a secret chamber at Hogwarts. On their 11th birthday, Hogwarts sends an owl with their acceptance letter, officially welcoming them to the school!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">How do I apply to Hogwarts?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                You don't need to actively apply. Hogwarts selects qualified young witches and wizards and sends them acceptance letters. Magical ability is innate, and Hogwarts' magic can identify all children with magical talents and invite them at the appropriate time.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">I'm over 11 years old and haven't received an acceptance letter. Do I still have a chance to attend?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Unfortunately, according to Hogwarts tradition, students over 11 years old cannot enroll. Hogwarts' educational system is designed as a seven-year curriculum, starting at age 11, ensuring students can completely learn all necessary magical courses.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">What does the "pre-registration" mentioned online refer to?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                NetEase developed a game called "Harry Potter: Magic Awakened" that conducted multiple beta tests and events before its official launch, some requiring pre-registration. This is unrelated to the Hogwarts enrollment process described in the novels and films and is simply a marketing activity for the game.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">How much does Hogwarts cost? How do I pay?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                Hogwarts does not charge tuition fees. In the wizarding world, Hogwarts education is provided free to all admitted witches and wizards. Students only need to purchase textbooks, wands, robes, and other personal items. Please note that in reality, anyone asking you to pay Hogwarts tuition is likely attempting to scam you.
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">How do I purchase uniforms and a wand?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                After receiving their acceptance letter, young witches and wizards visit Diagon Alley to purchase their robes, wands, and other school supplies. Robes can be bought at Madam Malkin's Robes for All Occasions, while wands are selected at Ollivanders. Remember, the wand chooses the wizard, not the other way around!
              </p>
            </section>

            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-harry text-amber-400 mb-6">Does Hogwarts really exist?</h2>
              <p className="text-lg text-amber-200 font-harry leading-relaxed">
                That's an excellent question. Hogwarts exists in the heart of everyone who believes in it. Technically, Hogwarts is a fictional magical school created by J.K. Rowling in the Harry Potter series. By reading the novels and watching the films, we can learn about the magic of this school and the beauty of campus life.
              </p>
              <p className="text-lg text-amber-200 font-harry leading-relaxed mt-4">
                As a fan site, we recommend that anyone would benefit from reading these wonderful magical stories. If you truly wish to immerse yourself in the magical world, why not start your magical journey by reading the Harry Potter series?
              </p>
            </section>
          </div>

          {/* Additional Information */}
          <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 mt-12 border border-amber-800/40">
            <h2 className="text-3xl font-harry text-amber-400 mb-6">Wizarding World Trivia</h2>
            <p className="text-lg text-amber-200 font-harry leading-relaxed">
              Hogwarts School of Witchcraft and Wizardry was founded by four great wizards: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin. The school is located in a secluded area of Scotland, invisible to Muggles (non-magical people). Hogwarts Castle is protected by powerful magic, including anti-Muggle charms that make it appear as an abandoned, dangerous ruin to Muggle eyes.
            </p>
            <p className="text-lg text-amber-200 font-harry leading-relaxed mt-4">
              The Hogwarts Express departs from Platform 9¾ at London's King's Cross Station on September 1st each year, taking students to Hogwarts. Students must pass through a magical barrier hidden between platforms 9 and 10 to reach Platform 9¾.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-harry text-amber-400 mb-6">Explore More of the Magical World</h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link 
                href="/quiz"
                className="magic-button px-8 py-4 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                Take Sorting Quiz
              </Link>
              <Link 
                href="/sorting-hat-quiz"
                className="magic-button px-8 py-4 text-xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
              >
                Chat with Sorting Hat
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 