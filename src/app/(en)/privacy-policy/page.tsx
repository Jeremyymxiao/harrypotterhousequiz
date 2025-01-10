export const metadata = {
  title: "Privacy Policy | Harry Potter House Quiz",
  description: "Privacy Policy for Harry Potter House Quiz - Learn how we protect your privacy and handle your data.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-harry text-amber-400 text-center mb-8">Privacy Policy</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Introduction</h2>
            <p className="text-amber-200">
              Welcome to Harry Potter House Quiz. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we handle any information when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Information We Collect</h2>
            <p className="text-amber-200">
              We collect minimal information to improve your experience:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>Language preferences</li>
              <li>Quiz responses (not stored permanently)</li>
              <li>Basic usage data through cookies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">How We Use Your Information</h2>
            <p className="text-amber-200">
              We use the collected information solely to:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2">
              <li>Provide and maintain the quiz functionality</li>
              <li>Remember your language preferences</li>
              <li>Improve our website and user experience</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Cookies</h2>
            <p className="text-amber-200">
              We use essential cookies to ensure the proper functioning of our website. These cookies are necessary for
              basic features like language preferences and do not track personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Third-Party Services</h2>
            <p className="text-amber-200">
              Our website may use third-party services for analytics and functionality. These services may collect
              anonymous usage data subject to their own privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Changes to This Policy</h2>
            <p className="text-amber-200">
              We may update this privacy policy from time to time. Any changes will be posted on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">Contact Us</h2>
            <p className="text-amber-200">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 