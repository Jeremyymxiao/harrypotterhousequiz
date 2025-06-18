export const metadata = {
  title: "Privacy Policy | Harry Potter House Quiz",
  description: "Privacy Policy for Harry Potter House Quiz - Learn how we protect your privacy and handle your data in compliance with GDPR and other privacy regulations.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 space-y-8">
          <h1 className="text-4xl font-harry text-amber-400 text-center mb-8">Privacy Policy</h1>
          
          <section className="space-y-4">
            <p className="text-amber-200 text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-amber-200">
              <strong>Effective Date:</strong> This Privacy Policy is effective as of the date of last update and governs 
              your use of Harry Potter House Quiz ("we," "us," "our," or "the Service").
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">1. Introduction</h2>
            <p className="text-amber-200">
              Harry Potter House Quiz respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website. Please read this Privacy Policy carefully. If you do not agree with the terms of 
              this Privacy Policy, please do not access the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">2. Information We Collect</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-harry text-amber-300">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
                <li>Quiz responses and preferences (not linked to personal identifiers)</li>
                <li>Language preferences for website display</li>
                <li>Contact information when you email us (email address, name if provided)</li>
                <li>Feedback or communications you send to us</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-harry text-amber-300">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
                <li>Log data (IP address, browser type, operating system, pages visited)</li>
                <li>Device information (device type, screen resolution, browser version)</li>
                <li>Usage data (time spent on pages, click patterns, navigation paths)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Analytics data through third-party services</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">3. How We Use Your Information</h2>
            <p className="text-amber-200">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li>Provide, operate, and maintain our Service</li>
              <li>Improve, personalize, and expand our Service</li>
              <li>Understand and analyze how you use our Service</li>
              <li>Remember your language preferences and settings</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Display personalized advertisements (through third-party ad networks)</li>
              <li>Detect, prevent, and address technical issues and security concerns</li>
              <li>Comply with legal obligations and enforce our Terms of Service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">4. Cookies and Tracking Technologies</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-harry text-amber-300">4.1 Types of Cookies We Use</h3>
              <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Preference Cookies:</strong> Remember your language and display preferences</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-harry text-amber-300">4.2 Managing Cookies</h3>
              <p className="text-amber-200">
                You can control cookies through your browser settings. However, disabling certain cookies may 
                affect the functionality of our Service. Most browsers allow you to refuse cookies or delete 
                existing cookies.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">5. Third-Party Services</h2>
            <p className="text-amber-200">
              We may use third-party services that collect, monitor, and analyze user data. These services 
              include but are not limited to:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li><strong>Microsoft Clarity:</strong> For user behavior analysis</li>
              <li><strong>Vercel Analytics:</strong> For performance monitoring</li>
            </ul>
            <p className="text-amber-200 mt-3">
              These third-party services have their own privacy policies. We recommend reviewing their privacy 
              policies to understand how they handle your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">6. Advertising</h2>
            <p className="text-amber-200">
              We may display advertisements on our Service through third-party advertising networks, including 
              Google AdSense. These ad networks may use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li>Display personalized advertisements based on your interests</li>
              <li>Measure ad effectiveness and performance</li>
              <li>Prevent fraud and ensure ad quality</li>
            </ul>
            <p className="text-amber-200 mt-3">
              You can opt out of personalized advertising by visiting 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" 
                 className="text-amber-400 hover:text-amber-300 underline">
                Google Ad Settings
              </a> or 
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" 
                 className="text-amber-400 hover:text-amber-300 underline ml-1">
                Digital Advertising Alliance
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">7. Data Sharing and Disclosure</h2>
            <p className="text-amber-200">
              We do not sell, trade, or otherwise transfer your personal information to third parties, except:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li>With third-party service providers who assist in operating our Service</li>
              <li>When required by law or to protect our legal rights</li>
              <li>To prevent fraud or security issues</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">8. Data Security</h2>
            <p className="text-amber-200">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">9. Data Retention</h2>
            <p className="text-amber-200">
              We retain your information only as long as necessary to provide our Service and fulfill the purposes 
              outlined in this Privacy Policy. Quiz responses are not stored permanently and are processed 
              anonymously. Log data and analytics information may be retained for up to 26 months for analytical purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">10. Your Rights and Choices</h2>
            <p className="text-amber-200">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="text-amber-200 mt-3">
              To exercise these rights, please contact us at 
              <a href="mailto:xym0645@gmail.com" 
                 className="text-amber-400 hover:text-amber-300 underline">
                xym0645@gmail.com
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">11. International Data Transfers</h2>
            <p className="text-amber-200">
              Your information may be transferred to and processed in countries other than your own. These countries 
              may have different data protection laws. We ensure appropriate safeguards are in place to protect 
              your personal information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">12. Children's Privacy</h2>
            <p className="text-amber-200">
              Our Service is designed for general audiences and does not knowingly collect personal information 
              from children under 13 years of age. If we become aware that we have collected personal information 
              from a child under 13, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">13. Changes to This Privacy Policy</h2>
            <p className="text-amber-200">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">14. Contact Information</h2>
            <p className="text-amber-200">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-black/20 rounded-lg p-6 space-y-3">
              <p className="text-amber-200">
                <strong>Email:</strong> 
                <a href="mailto:xym0645@gmail.com" 
                   className="text-amber-400 hover:text-amber-300 transition-colors ml-2">
                  xym0645@gmail.com
                </a>
              </p>
              <p className="text-amber-200">
                <strong>Website:</strong> 
                <a href="/" className="text-amber-400 hover:text-amber-300 transition-colors ml-2">
                  Harry Potter House Quiz
                </a>
              </p>
              <p className="text-amber-200 text-sm">
                Please include "Privacy Policy Inquiry" in your email subject line for faster response.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-harry text-amber-400">15. Legal Basis for Processing (GDPR)</h2>
            <p className="text-amber-200">
              If you are located in the European Economic Area (EEA), our legal basis for processing your 
              personal information includes:
            </p>
            <ul className="list-disc list-inside text-amber-200 space-y-2 ml-4">
              <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
              <li><strong>Legitimate Interest:</strong> To operate and improve our Service, analyze usage, and prevent fraud</li>
              <li><strong>Contractual Necessity:</strong> To provide the Service you've requested</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="space-y-4 text-center">
            <p className="text-amber-300 font-harry text-lg">
              Your privacy is important to us!
            </p>
            <p className="text-amber-200 text-sm">
              This Privacy Policy helps ensure we handle your information responsibly and transparently.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 