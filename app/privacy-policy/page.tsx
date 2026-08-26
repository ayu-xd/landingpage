import Link from 'next/link'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata = {
  title: 'Privacy Policy | DMDroid',
  description: 'DMDroid Privacy Policy - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: August 26, 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-2">
              <p>
                At DMDroid (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services. By using DMDroid, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Account Information:</strong> Email address, linked Instagram usernames, and billing details provided during account creation.</li>
                <li><strong>Campaign Data:</strong> Target lists (CSVs), message content, and campaign configurations you upload or create.</li>
                <li><strong>Automation Data:</strong> Instagram direct-message content and reply/read-receipt status from your own conversations, used solely to run your campaigns and stop follow-ups when a contact replies.</li>
                <li><strong>Public Profile Data:</strong> Display names and public profile details of contacts you choose to message.</li>
                <li><strong>Authentication Data:</strong> Login session tokens stored locally to keep your browser paired. Passwords are never stored by the extension.</li>
                <li><strong>Usage Data:</strong> Analytics on how you interact with the platform to improve our services.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
              <p>We use the collected data to provide, maintain, and improve our services, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Configuring and running your direct messaging campaigns.</li>
                <li>Performing safety limits and collision warning checks to protect your social accounts.</li>
                <li>Processing subscription payments and managing account settings.</li>
                <li>Troubleshooting logs and analyzing campaign analytics.</li>
                <li>Sending service-related communications and support responses.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">3. Browser Instances & Automation Safety</h2>
              <p>
                Our application coordinates direct message tasks through browser extensions or custom browser sessions run locally by you. We do not store or transmit your Instagram account credentials. Your local session keys are stored securely on your browser device.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">4. Data Sharing & Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>With your explicit consent.</li>
                <li>To comply with legal obligations or respond to lawful requests.</li>
                <li>To protect our rights, privacy, safety, or property.</li>
                <li>With service providers who assist in operating our platform (under strict confidentiality agreements).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active or as needed to provide you services. You may request data deletion or terminate your account at any time through the account settings panel. Upon account deletion, we will remove your data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">6. Cookies and Local Storage</h2>
              <p>
                We use standard local storage and cookies to maintain authenticated sessions, store your Campaign Wizard drafts, and remember cookie consent settings. You can manage cookies through your browser settings, though disabling them may restrict platform functions. We do not use third-party advertising cookies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">7. Data Security</h2>
              <p>
                We employ advanced cryptographic protections and strict access controls to safeguard your data from unauthorized access or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">8. Your Rights (GDPR)</h2>
              <p>If you are located in the European Economic Area (EEA), you have the following rights:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right to Access:</strong> Request copies of your personal data.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data under certain conditions.</li>
                <li><strong>Right to Restrict Processing:</strong> Request restriction of processing your personal data.</li>
                <li><strong>Right to Object:</strong> Object to our processing of your personal data.</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization or directly to you.</li>
              </ul>
              <p>To exercise any of these rights, please contact us at hello@dmdroid.app. We will respond within 30 days.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">9. Your Rights (CCPA)</h2>
              <p>If you are a California resident, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Request disclosure of the categories and specific pieces of personal data we have collected about you.</li>
                <li>Request deletion of any personal data we have collected about you.</li>
                <li>Request that we do not sell your personal data (we do not sell data).</li>
              </ul>
              <p>To exercise these rights, please contact us at hello@dmdroid.app. We will respond within 45 days.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">10. Children&apos;s Privacy</h2>
              <p>
                DMDroid is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of DMDroid after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-2 border-t border-border pt-6">
              <h2 className="text-lg font-semibold text-foreground">12. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or your data, please contact our support team at{' '}
                <a href="mailto:hello@dmdroid.app" className="text-primary hover:underline">
                  hello@dmdroid.app
                </a>.
              </p>
            </section>
          </div>

          <div className="pt-4">
            <Link href="/" className="text-sm text-primary hover:underline">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
