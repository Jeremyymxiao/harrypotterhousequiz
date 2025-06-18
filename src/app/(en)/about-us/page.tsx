export const metadata = {
  title: "About Us | Harry Potter House Quiz",
  description: "Learn about Harry Potter House Quiz - A fan-made project dedicated to bringing the magic of Hogwarts House sorting to fellow Harry Potter enthusiasts worldwide.",
}

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-harry text-amber-400 text-center mb-8">About Us</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Welcome to Harry Potter House Quiz</h2>
            <p className="text-amber-200 text-lg">
              Welcome to the most comprehensive and accurate Harry Potter House Quiz on the internet! 
              Our platform is designed to help you discover your true Hogwarts House through carefully 
              crafted personality-based questions that reflect the core values and traits of Gryffindor, 
              Hufflepuff, Ravenclaw, and Slytherin.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Our Mission</h2>
            <p className="text-amber-200 text-lg">
              We believe that every Harry Potter fan deserves to find their place in the wizarding world. 
              Our mission is to provide an authentic, engaging, and accessible House sorting experience 
              that captures the magic and spirit of J.K. Rowling's beloved series. Whether you're a 
              longtime fan or new to the wizarding world, our quiz is designed to give you meaningful 
              insights into your personality and help you connect with the House that truly represents you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Who We Are</h2>
            <p className="text-amber-200 text-lg">
              This website is a passion project created by a dedicated Harry Potter fan who wanted to share 
              the magic of House sorting with fellow enthusiasts around the world. As a lifelong admirer of 
              the wizarding world, I've spent countless hours studying the nuances of each House's characteristics, 
              values, and the personalities that define them.
            </p>
            <p className="text-amber-200 text-lg">
              This is an independent fan project - we are not affiliated with Warner Bros., J.K. Rowling, 
              or any official Harry Potter entities. We're simply fans, creating content for fans, driven 
              by our love for the magical world that has captivated millions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">What Makes Us Different</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-harry text-amber-300">Multilingual Experience</h3>
                <p className="text-amber-200">
                  Our quiz is available in multiple languages including English, Chinese (Simplified & Traditional), 
                  Japanese, Korean, Portuguese, and Russian, making the magic accessible to Harry Potter fans worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-harry text-amber-300">Carefully Crafted Questions</h3>
                <p className="text-amber-200">
                  Each question is thoughtfully designed to reflect the core values and traits that define 
                  each House, ensuring an authentic and meaningful sorting experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-harry text-amber-300">Beautiful, Immersive Design</h3>
                <p className="text-amber-200">
                  Our platform features stunning visuals and an immersive design that captures the atmosphere 
                  of Hogwarts and the magical world.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-harry text-amber-300">Free & Accessible</h3>
                <p className="text-amber-200">
                  Our quiz is completely free to use, with no registration required. We believe magic should 
                  be accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-harry text-amber-300">Authenticity</h3>
                <p className="text-amber-200">
                  We strive to create an experience that stays true to the spirit of the Harry Potter universe.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-harry text-amber-300">Inclusivity</h3>
                <p className="text-amber-200">
                  Every fan, regardless of background or language, deserves to experience the magic.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-harry text-amber-300">Quality</h3>
                <p className="text-amber-200">
                  We're committed to providing the highest quality experience for our users.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-harry text-amber-300">Community</h3>
                <p className="text-amber-200">
                  We believe in fostering connections between Harry Potter fans worldwide.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Future Plans</h2>
            <p className="text-amber-200 text-lg">
              We're constantly working to improve and expand our platform. Future updates may include:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li>Additional quiz variations and specialized sorting experiences</li>
              <li>More detailed House descriptions and characteristics</li>
              <li>Interactive features and community elements</li>
              <li>Support for additional languages</li>
              <li>Enhanced mobile experience and accessibility features</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Contact Us</h2>
            <p className="text-amber-200 text-lg">
              We'd love to hear from you! Whether you have questions, suggestions, feedback, or just want 
              to share your House sorting experience, feel free to reach out to us.
            </p>
            <div className="bg-black/20 rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-harry text-amber-300">Get in Touch</h3>
              <div className="space-y-2">
                <p className="text-amber-200">
                  <strong>Email:</strong> 
                  <a 
                    href="mailto:xym0645@gmail.com" 
                    className="text-amber-400 hover:text-amber-300 transition-colors ml-2"
                  >
                    xym0645@gmail.com
                  </a>
                </p>
                <p className="text-amber-200 text-sm">
                  We typically respond to emails within 24-48 hours. Please include "Harry Potter House Quiz" 
                  in your subject line to help us prioritize your message.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Disclaimer</h2>
            <p className="text-amber-200">
              This website is a fan-created project and is not affiliated with, endorsed by, or connected to 
              J.K. Rowling, Warner Bros. Entertainment Inc., or any official Harry Potter entities. All Harry Potter 
              characters, names, and related elements are trademarks of and © Warner Bros. Entertainment Inc. 
              Harry Potter Publishing Rights © J.K. Rowling.
            </p>
          </section>

          <section className="space-y-4 text-center">
            <p className="text-amber-300 font-harry text-lg">
              Thank you for being part of our magical community!
            </p>
            <p className="text-amber-200 text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 