export const metadata = {
  title: "Terms of Service | Harry Potter House Quiz",
  description: "Terms of Service for Harry Potter House Quiz - Read our terms and conditions for using our services.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-harry text-amber-400 text-center mb-8">Terms of Service</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">1. Acceptance of Terms</h2>
            <p className="text-amber-200">
              By accessing and using Harry Potter House Quiz ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. These Terms of Service apply to all visitors, users, and others who access 
              or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">2. Description of Service</h2>
            <p className="text-amber-200">
              Harry Potter House Quiz is a free online quiz platform that allows users to discover their Hogwarts House 
              through personality-based questions. The Service includes various Harry Potter-themed quizzes and related 
              entertainment content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">3. User Responsibilities</h2>
            <p className="text-amber-200">
              Users are responsible for:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li>Providing accurate information when using the Service</li>
              <li>Using the Service only for lawful purposes</li>
              <li>Not attempting to interfere with or disrupt the Service</li>
              <li>Not using automated systems to access the Service</li>
              <li>Respecting the intellectual property rights of others</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">4. Prohibited Uses</h2>
            <p className="text-amber-200">
              You may not use the Service:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">5. Intellectual Property</h2>
            <p className="text-amber-200">
              The Service and its original content, features, and functionality are and will remain the exclusive property 
              of Harry Potter House Quiz and its licensors. All Harry Potter-related content is owned by Warner Bros. 
              Entertainment Inc. and J.K. Rowling. This Service is a fan-made project and is not officially affiliated 
              with the Harry Potter franchise.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">6. Privacy Policy</h2>
            <p className="text-amber-200">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices regarding the collection and use of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">7. Disclaimer of Warranties</h2>
            <p className="text-amber-200">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties 
              of any kind, whether express or implied. We do not warrant that the Service will be available at any particular 
              time or location, uninterrupted or secure, or free of errors or omissions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">8. Limitation of Liability</h2>
            <p className="text-amber-200">
              In no event shall Harry Potter House Quiz, its affiliates, or their respective officers, directors, employees, 
              or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">9. Governing Law</h2>
            <p className="text-amber-200">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which our Service is operated, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">10. Changes to Terms</h2>
            <p className="text-amber-200">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
              material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">11. Contact Information</h2>
            <p className="text-amber-200">
              If you have any questions about these Terms of Service, please contact us through our website or email us 
              at the contact information provided on our Contact page.
            </p>
          </section>

          <section className="space-y-4">
            <p className="text-amber-200 text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 