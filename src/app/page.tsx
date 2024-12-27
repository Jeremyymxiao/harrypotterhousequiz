import Link from 'next/link'

export const metadata = {
  title: 'Harry Potter House Quiz | Discover Your Hogwarts House',
  description: 'Uncover your Hogwarts house with the Sorting Hat! Take the Harry Potter House Quiz and start your magical journey today.',
  openGraph: {
    title: 'Start Your Magical Journey - Harry Potter House Quiz',
    description: 'Ready to discover your true Hogwarts house? Take our magical quiz and let the Sorting Hat guide you to where you truly belong!',
  }
}

export default function Home() {
  return (
    <div className="magic-bg min-h-screen w-full">
      {/* Magic Particles */}
      <div className="magic-particles" />
      
      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full mx-auto text-center space-y-12 magic-card p-8">
          <div className="space-y-8 floating">
            <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-harry tracking-wider px-4">
            Discover Your True Hogwarts House
            </h1>
            
            <p className="text-2xl md:text-4xl text-amber-400 font-harry tracking-wide px-4">
            Let the Sorting Hat guide you to where you truly belong
            </p>
          </div>

          <div className="flex flex-col space-y-4 justify-center px-4">
            <Link 
              href="/quiz"
              className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Start Quiz
            </Link>
            <Link 
              href="/ask-sorting-hat"
              className="magic-button px-12 py-4 text-2xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Ask Sorting Hat
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
