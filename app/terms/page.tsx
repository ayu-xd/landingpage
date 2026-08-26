import Link from 'next/link'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata = {
  title: 'Terms of Service | DMDroid',
  description: 'DMDroid Terms of Service - Read the terms governing your use of our platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last updated: August 26, 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DMDroid (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service. We reserve the right to modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">2. Description of Service</h2>
              <p>
                DMDroid provides social media direct-message automation, task queuing, and scheduling services for Instagram accounts. The Service helps you manage DM campaigns through pacing delays and safety limits designed to safeguard your accounts. Messages are sent from your own logged-in Instagram account.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">3. Eligibility</h2>
              <p>
                You must be at least 18 years old to use DMDroid. By using the Service, you represent and warrant that you have the legal capacity to enter into this agreement and are at least 18 years of age.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">4. User Responsibilities</h2>
              <p>You are solely responsible for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>The configuration and use of automation parameters (daily pacing ceilings, delays, and message content).</li>
                <li>Ensuring your use complies with Instagram&apos;s Terms of Service and Community Guidelines.</li>
                <li>All content sent through DMDroid, including message content and target lists.</li>
                <li>Maintaining the security of your account credentials and browser sessions.</li>
              </ul>
              <p>
                We highly recommend reviewing Instagram&apos;s terms and acting in accordance with them. You may not use DMDroid to send content that infringes on third-party rights, is offensive, unlawful, deceptive, or harmful, includes spam, targets minors, or impersonates others.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">5. Account Subscriptions & Payments</h2>
              <p>
                Access to premium features requires a paid subscription. The subscription period is monthly and will continue until cancelled by you or us.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Billing is recurring on the same date each month after your initial subscription.</li>
                <li>You may cancel your subscription at any time through your account settings.</li>
                <li>All subscription fees are non-refundable unless otherwise specified.</li>
                <li>We reserve the right to change subscription fees with advance notice. You will be given the choice to cancel or continue at the new price.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">6. Free Trial</h2>
              <p>
                DMDroid offers a 3-day free trial for new users. A credit card is required to start the trial. If you cancel before the trial ends, you will not be charged. If you do not cancel, your subscription will begin and you will be billed according to your selected plan.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">7. Disclaimer</h2>
              <p>
                DMDroid is not affiliated with Instagram or Meta in any way. Instagram may block or restrict your Instagram profile based on activities you do with or without DMDroid. DMDroid has no control over, and assumes no responsibility for, such actions. By using DMDroid and linking your Instagram account, you acknowledge this risk. DMDroid is not responsible or accountable for any blocks or restrictions imposed by Instagram or any other third-party platform.
              </p>
              <p>
                DMDroid disclaims all warranties and conditions of merchantability, fitness for a particular purpose, or non-infringement. The Service is provided &quot;as is&quot; without warranties of any kind.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, DMDroid shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service. Your only remedy for any breach by us is to terminate your subscription and discontinue using the Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless DMDroid and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account and access to the Service immediately, without prior notice, if you violate these Terms of Service or engage in activities that cause harm to our infrastructure or users. You may also terminate your account at any time through your account settings.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">12. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable for any reason, this shall not affect any other provision of these Terms, which shall remain in full force and effect.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">13. Governing Law</h2>
              <p>
                These Terms shall be subject to and construed in accordance with the laws of the United States. Any disputes arising under these Terms shall be resolved in the applicable courts of the United States.
              </p>
            </section>

            <section className="space-y-2 border-t border-border pt-6">
              <h2 className="text-lg font-semibold text-foreground">14. Contact Us</h2>
              <p>
                For questions regarding these Terms of Service, please contact our support team at{' '}
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
