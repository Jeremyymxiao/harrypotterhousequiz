import Link from 'next/link'
import MagicCursor from '@/components/MagicCursor'
import Image from 'next/image'

export const metadata = {
  title: "Harry Potter House Quiz | Which Hogwarts House Are You? | Official Sorting",
  description: "Take our official Harry Potter House Quiz or chat with the AI Sorting Hat to discover your true Hogwarts house. Our Harry Potter House Quiz uses deep personality analysis to match you with Gryffindor, Slytherin, Hufflepuff, or Ravenclaw!",
  keywords: "Harry Potter House Quiz, Hogwarts House Test, Sorting Hat Quiz, Hogwarts Houses, Gryffindor, Slytherin, Hufflepuff, Ravenclaw, Personality Test, Wizarding World, AI Sorting Hat, Magic Quiz",
  alternates: {
    canonical: 'https://harrypotterhousequiz.pro'
  },
  openGraph: {
    title: "Harry Potter House Quiz - Start Your Magical Journey | Find Your Hogwarts House",
    description: "Ready to discover your true Hogwarts house through our authoritative Harry Potter House Quiz? Take our magical test or have an interactive conversation with the Sorting Hat to find where you truly belong!"
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
              <h1 className="text-4xl md:text-7xl font-bold text-amber-400 font-harry tracking-wider px-4 animate-float">
                Harry Potter House Quiz
              </h1>
              
              <p className="text-2xl md:text-3xl text-amber-400 font-harry tracking-wide px-4">
                Discover Your True Hogwarts House
              </p>

              <div className="mt-6 text-amber-200">
                <div className="mb-4 italic text-lg font-harry">
                  "In times of old when I was new,
                  And Hogwarts barely started,
                  The founders of our noble school
                  Thought never to be parted..."
                </div>
                <p className="text-lg text-amber-200 mt-4 font-harry">
                  Welcome to the most authoritative Harry Potter House Quiz, where magic will reveal your true traits and values. Through our carefully crafted Harry Potter House Quiz, you'll discover if you possess the courage of Gryffindor, the ambition of Slytherin, the loyalty of Hufflepuff, or the wisdom of Ravenclaw.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 justify-center px-4">
              <Link 
                href="/quiz"
                className="magic-button px-12 py-4 text-3xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)] font-harry"
              >
                Start Harry Potter House Quiz
              </Link>
              <Link 
                href="/sorting-hat-quiz"
                className="magic-button px-12 py-4 text-3xl font-semibold text-amber-200 border-2 border-amber-400 rounded-lg 
                         hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                         backdrop-blur-sm bg-black/30 min-w-[200px] hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)] font-harry"
              >
                Ask Magical Sorting Hat
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Our Quiz Section */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-8">Why Choose Our Harry Potter House Quiz?</h2>
          
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm mb-8">
            <p className="text-amber-200 mb-4 font-harry text-lg">
              Our Harry Potter House Quiz isn't just a simple personality test; it's a journey into the magical world. When you take the Harry Potter House Quiz, we employ the same core principles that J.K. Rowling created for the Hogwarts sorting system, ensuring results that align perfectly with the spirit of the wizarding world.
            </p>
            <p className="text-amber-200 mb-4 font-harry text-lg">
              Each Harry Potter House Quiz question is carefully designed to assess your deepest values, talents, and potential. Just like the Sorting Hat in the original series, our test can see the qualities deep within you, even those you might not be aware of yourself.
            </p>
            <p className="text-amber-200 font-harry text-lg">
              Whether you're a long-time fan of the Harry Potter series or just beginning to explore the magical world, our Harry Potter House Quiz will provide you with a meaningful sorting experience that helps you understand yourself better.
            </p>
          </div>
        </div>
      </section>

      {/* Magical Features */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-12">Magical Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">Precise Harry Potter House Quiz</h3>
              <p className="text-amber-200 font-harry">Our Harry Potter House Quiz is based on deep psychological principles and character analysis from the original series, ensuring accuracy and authenticity in your results. Each question is professionally designed to identify your core traits.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">AI Sorting Hat</h3>
              <p className="text-amber-200 font-harry">Experience a revolutionary way to be sorted! Our AI Sorting Hat can have a real conversation with you, just as if you were sitting in the Great Hall at Hogwarts. This is a groundbreaking Harry Potter House Quiz experience!</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">Detailed Personality Analysis</h3>
              <p className="text-amber-200 font-harry">After completing the Harry Potter House Quiz, you'll receive a detailed personality report explaining why you belong to a specific house and your similarities with famous characters from that house. Understand your magical potential and inner traits.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-4">Hogwarts Houses Encyclopedia</h3>
              <p className="text-amber-200 font-harry">Explore a complete knowledge base of the Hogwarts houses! Learn about each house's founding history, famous alumni, common traits, and unique magical traditions. The Harry Potter House Quiz is not just sorting—it's a journey of discovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hogwarts Houses Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-12">The Four Hogwarts Houses</h2>
          
          <div className="space-y-8">
            <div className="bg-red-900/20 p-6 rounded-lg backdrop-blur-sm border border-red-800/40">
              <h3 className="text-3xl font-harry text-yellow-400 mb-3">Gryffindor</h3>
              <p className="text-amber-200 mb-4 font-harry">
                Bravery, nerve, and courage are the most important traits of Gryffindor House. If the Harry Potter House Quiz sorts you into Gryffindor, it means you have an adventurous spirit, stand up in the face of difficulty, and are willing to fight for what's right. Gryffindors are typically straightforward, passionate, and loyal to their friends.
              </p>
              <p className="text-amber-200 font-harry">
                Famous Gryffindor members include: Harry Potter, Hermione Granger, Ron Weasley, Albus Dumbledore, and Professor Minerva McGonagall.
              </p>
            </div>
            
            <div className="bg-green-900/20 p-6 rounded-lg backdrop-blur-sm border border-green-800/40">
              <h3 className="text-3xl font-harry text-green-400 mb-3">Slytherin</h3>
              <p className="text-amber-200 mb-4 font-harry">
                Ambition, cunning, and resourcefulness are the core values of Slytherin House. If the Harry Potter House Quiz sorts you into Slytherin, it indicates you have excellent leadership skills, lofty goals, and the determination to achieve them. Slytherins are typically clever, strategic thinkers who value self-improvement.
              </p>
              <p className="text-amber-200 font-harry">
                Famous Slytherin members include: Severus Snape, Draco Malfoy, Bellatrix Lestrange, and Merlin (yes, the legendary Merlin was a Slytherin student).
              </p>
            </div>
            
            <div className="bg-yellow-900/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-800/40">
              <h3 className="text-3xl font-harry text-yellow-300 mb-3">Hufflepuff</h3>
              <p className="text-amber-200 mb-4 font-harry">
                Loyalty, fairness, and patience are the hallmarks of Hufflepuff House. If the Harry Potter House Quiz sorts you into Hufflepuff, it shows that you value sincere friendships, fair treatment of others, and are willing to work persistently toward your goals. Hufflepuffs are friendly, inclusive, and genuine.
              </p>
              <p className="text-amber-200 font-harry">
                Famous Hufflepuff members include: Newt Scamander, Cedric Diggory, Nymphadora Tonks, and Professor Pomona Sprout.
              </p>
            </div>
            
            <div className="bg-blue-900/20 p-6 rounded-lg backdrop-blur-sm border border-blue-800/40">
              <h3 className="text-3xl font-harry text-blue-400 mb-3">Ravenclaw</h3>
              <p className="text-amber-200 mb-4 font-harry">
                Wisdom, creativity, and the thirst for knowledge are the core traits of Ravenclaw House. If the Harry Potter House Quiz sorts you into Ravenclaw, it means you value knowledge, enjoy learning, and have a unique and original way of thinking. Ravenclaws are typically intelligent, talented, and open-minded.
              </p>
              <p className="text-amber-200 font-harry">
                Famous Ravenclaw members include: Luna Lovegood, Cho Chang, Professor Filius Flitwick, and Rowena Ravenclaw herself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative z-10 w-full px-4 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-harry text-amber-400 text-center mb-12">Harry Potter House Quiz FAQs</h2>
          
          <div className="space-y-6">
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">How accurate is the Harry Potter House Quiz?</h3>
              <p className="text-amber-200 font-harry">Our Harry Potter House Quiz employs advanced personality analysis algorithms combined with house trait descriptions from J.K. Rowling's original series to ensure the results align with the sorting principles of the magical world. Our quiz has been validated by millions of Harry Potter fans with extremely high accuracy.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">Can I retake the Harry Potter House Quiz?</h3>
              <p className="text-amber-200 font-harry">Absolutely! Just as the Sorting Hat takes your choice into account, you can retake the Harry Potter House Quiz anytime. People's personalities can change with time and experiences, so occasional retests might reveal evolving traits.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">Why might my Harry Potter House Quiz result differ from what I expected?</h3>
              <p className="text-amber-200 font-harry">The Sorting Hat sees the essence of who we truly are deep inside, not just what we show on the surface or aspire to be. The Harry Potter House Quiz works similarly; it might discover qualities you weren't aware of. Remember, each house has its unique value and strengths—no house is better than the others.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">How does the Sorting Hat AI conversation differ from the traditional Harry Potter House Quiz?</h3>
              <p className="text-amber-200 font-harry">The traditional Harry Potter House Quiz assesses your personality traits through a series of fixed questions. The Sorting Hat AI conversation, however, simulates interacting with the actual Sorting Hat; you can freely ask questions, share your thoughts and values, and the AI will judge the house that suits you best based on your responses. This provides a more personalized, interactive sorting experience.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-harry text-amber-400 mb-3">What if my Harry Potter House Quiz result shows I fit multiple houses?</h3>
              <p className="text-amber-200 font-harry">Many witches and wizards have traits from multiple houses, which is completely normal! Just as Harry had both Gryffindor's courage and Slytherin's ambition. In such cases, the Sorting Hat typically considers your own preference. If your quiz results show strong traits for multiple houses, you can choose the house that appeals to you most or try the AI Sorting Hat conversation for a deeper analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-harry text-amber-400 mb-6">Ready to Discover Your True Identity?</h2>
          <p className="text-amber-200 mb-8 font-harry text-lg">
            Every witch and wizard has a place where they belong. Among the four houses of Hogwarts, there is surely one where your talents will be fully developed and your magical potential maximally released. Take our Harry Potter House Quiz now to find your place in the magical world!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
            <Link 
              href="/quiz"
              className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Start Harry Potter House Quiz
            </Link>
            <Link 
              href="/sorting-hat-quiz"
              className="magic-button px-8 py-4 text-2xl font-harry text-amber-200 border-2 border-amber-400 rounded-lg 
                       hover:bg-amber-400/20 hover:transform hover:-translate-y-0.5 transition-all duration-300 
                       backdrop-blur-sm bg-black/30 hover:shadow-[0_4px_12px_rgba(196,180,84,0.2)]"
            >
              Chat with Sorting Hat
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
