import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'

export const metadata = {
  title: "Harry Potter House Quiz, Discover Which Hogwarts House Are You?",
  description: "Take the Harry Potter House Quiz or chat with the AI Sorting Hat to discover your true Hogwarts house. Experience the magic of personalized sorting!",
  keywords: "Harry Potter House Quiz, Sorting Hat Chat, Hogwarts Houses, Gryffindor, Slytherin, Hufflepuff, Ravenclaw, Personality Test, Wizarding World, AI Sorting Hat, Magic Quiz",
  alternates: {
    canonical: 'https://harrypotterquiz.pro'
  },
  openGraph: {
    title: "Start Your Magical Journey - Harry Potter House Quiz & Sorting Hat Chat",
    description: "Ready to discover your true Hogwarts house? Take our magical quiz or have a personal conversation with the Sorting Hat to find where you truly belong!"
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
              <h1 className="text-4xl md:text-8xl font-bold text-amber-400 font-harry tracking-wider px-4 animate-float">
              Discover Your True Hogwarts House
              </h1>
              
              <p className="text-2xl md:text-4xl text-amber-400 font-harry tracking-wide px-4">
              Let the Sorting Hat guide you to where you truly belong
              </p>

              <div className="mt-8 text-amber-200">
                <div className="mb-6 italic text-lg font-harry">
                  "In times of old when I was new,
                  And Hogwarts barely started,
                  The founders of our noble school
                  Thought never to be parted..."
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/quiz"
                className="magic-button px-12 py-4 text-3xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)] font-harry"
              >
                Start Quiz
              </Link>
              <Link 
                href="/ask-sorting-hat"
                className="magic-button px-12 py-4 text-3xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)] font-harry"
              >
                Ask Sorting Hat
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-12">Magical Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">Advanced House Quiz</h3>
              <p className="text-amber-200">Experience our enchanted Harry Potter House Quiz that delves deep into your personality traits and values.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">AI Sorting Hat</h3>
              <p className="text-amber-200">Have a magical conversation with our intelligent Sorting Hat, just like at Hogwarts!</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">Detailed Analysis</h3>
              <p className="text-amber-200">Discover why you belong to your house with our comprehensive personality insights.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">House History</h3>
              <p className="text-amber-200">Learn about your house's rich history, famous members, and unique characteristics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">How accurate is this Harry Potter House Quiz?</h3>
              <p className="text-amber-200">Our quiz uses advanced algorithms and deep personality analysis to ensure the most accurate house placement possible.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">Can I retake the quiz?</h3>
              <p className="text-amber-200">Yes! Just like the Sorting Hat takes your choice into account, you can retake our quiz as many times as you wish.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">What makes this different from other quizzes?</h3>
              <p className="text-amber-200">Our quiz combines traditional sorting methods with modern personality insights, plus you can chat with our AI Sorting Hat!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
