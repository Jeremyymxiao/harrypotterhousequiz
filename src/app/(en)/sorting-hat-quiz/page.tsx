import ChatComponent from '@/components/ChatComponent'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'AI Sorting Hat Quiz | Talk to the Magical Sorting Hat | Harry Potter House Quiz',
  description: 'Have a magical conversation with our AI Sorting Hat! Ask questions about Hogwarts houses, get sorted through dialogue, and discover your true place in the wizarding world.',
  keywords: 'Sorting Hat Quiz, AI Sorting Hat, Talk to Sorting Hat, Harry Potter House Quiz, Hogwarts Houses, Magic Sorting Hat, Interactive Sorting, Magical Chat',
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro/sorting-hat-quiz'
  },
  openGraph: {
    title: 'Talk to the Magical Sorting Hat - Interactive Hogwarts House Sorting',
    description: 'Have a personal conversation with the Sorting Hat AI! Ask questions, learn about the houses, and discover where you truly belong at Hogwarts through an enchanted dialogue.'
  }
}

export default function AskSortingHatPage() {
  return (
    <div className="quiz-bg min-h-screen">
      <div className="magic-particles" />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block">
            <Image
              src="/images/sorting-hat.png"
              alt="The Magical Sorting Hat"
              width={150}
              height={150}
              className="mx-auto mb-6"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl text-amber-400 font-harry mb-6">
            The Magical Sorting Hat
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-harry mb-8 max-w-3xl mx-auto">
            "Oh, you may not think I'm pretty, but don't judge on what you see,
            I'll eat myself if you can find a smarter hat than me."
          </p>
        </div>
      </section>
      
      {/* About the Sorting Hat */}
      <section className="relative z-10 py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-harry text-amber-400 mb-4">The History of the Sorting Hat</h2>
              <p className="text-amber-200 mb-4">
                The Sorting Hat was created around the 10th century by the four founders of Hogwarts: Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw, and Helga Hufflepuff.
              </p>
              <p className="text-amber-200">
                When the founders became concerned about how students would be selected for their respective houses after they died, Godric took his hat off and each founder added knowledge and wisdom to it.
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-3xl font-harry text-amber-400 mb-4">How the Sorting Works</h2>
              <p className="text-amber-200 mb-4">
                The Sorting Hat analyzes your mind, personality, and values to determine which Hogwarts house you truly belong in. While it typically makes the final decision, it has been known to take your preferences into account.
              </p>
              <p className="text-amber-200">
                As the hat once said to Harry Potter, "It's all here in your head, and Slytherin will help you on the way to greatness, no doubt about that... if you're sure — better be GRYFFINDOR!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Component Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-harry text-amber-400 mb-4">Talk to the Sorting Hat</h2>
          <p className="text-amber-200 max-w-2xl mx-auto">
            Have an enchanted conversation with our AI Sorting Hat! Ask questions about the houses, 
            share details about yourself, or simply chat about the wizarding world.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatComponent />
        </div>
      </section>
      
      {/* Example Questions */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-8">Questions to Ask the Sorting Hat</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200">"What are the defining traits of Gryffindor house?"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200">"I'm very loyal to my friends but also ambitious. Which house might I belong in?"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200">"Tell me about famous Ravenclaws and what made them special."</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200">"What would you consider if you were sorting me right now?"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200">"How do you decide between two houses if someone has traits from both?"</p>
            </div>
            <div className="bg-black/40 p-5 rounded-lg border border-amber-400/30">
              <p className="text-amber-200">"Why did you put Harry Potter in Gryffindor instead of Slytherin?"</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Houses Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-8">The Four Hogwarts Houses</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-red-800/40">
              <h3 className="text-2xl font-harry text-yellow-400 mb-3">Gryffindor</h3>
              <p className="text-amber-200 mb-2">Values: Bravery, Courage, Daring, Chivalry</p>
              <p className="text-amber-200">Famous Members: Harry Potter, Hermione Granger, Ron Weasley, Albus Dumbledore</p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-green-800/40">
              <h3 className="text-2xl font-harry text-green-400 mb-3">Slytherin</h3>
              <p className="text-amber-200 mb-2">Values: Ambition, Cunning, Leadership, Resourcefulness</p>
              <p className="text-amber-200">Famous Members: Severus Snape, Draco Malfoy, Merlin, Horace Slughorn</p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-yellow-800/40">
              <h3 className="text-2xl font-harry text-yellow-300 mb-3">Hufflepuff</h3>
              <p className="text-amber-200 mb-2">Values: Hard Work, Patience, Loyalty, Fair Play</p>
              <p className="text-amber-200">Famous Members: Newt Scamander, Cedric Diggory, Nymphadora Tonks, Pomona Sprout</p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-800/40">
              <h3 className="text-2xl font-harry text-blue-400 mb-3">Ravenclaw</h3>
              <p className="text-amber-200 mb-2">Values: Intelligence, Wisdom, Creativity, Originality</p>
              <p className="text-amber-200">Famous Members: Luna Lovegood, Filius Flitwick, Rowena Ravenclaw, Garrick Ollivander</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 py-12 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-harry text-amber-400 mb-6">Not Ready to Chat? Take the Quiz!</h2>
          <p className="text-amber-200 mb-8">
            If you prefer a structured experience, our detailed Harry Potter House Quiz offers another way to discover your true Hogwarts house.
          </p>
          <Link 
            href="/quiz"
            className="magic-button inline-block px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                     hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                     backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
          >
            Take the Quiz
          </Link>
        </div>
      </section>
    </div>
  )
} 