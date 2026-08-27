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
            <p className="text-sm text-muted-foreground">Last updated: August 27, 2026</p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
              <p>
                This Privacy Policy explains how DMDroid (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and protects information when you use the DMDroid Chrome extension and related services. By installing or using DMDroid, you consent to the practices described in this policy.
              </p>
              <p>
                DMDroid is an Instagram direct-message automation tool designed for agencies and founders. It runs as a Chrome browser extension that automates sending follow-up messages on your behalf.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>

              <h3 className="font-semibold text-foreground">2.1 Account Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email address (used for login authentication)</li>
                <li>DMDroid user ID (internal account identifier)</li>
              </ul>

              <h3 className="font-semibold text-foreground">2.2 Instagram Account Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your Instagram username and user ID (detected from your active Instagram session)</li>
                <li>Your Instagram profile picture URL</li>
                <li>Instagram authentication credentials (session tokens) — stored locally on your device for cross-browser transfer; never stored on our servers</li>
              </ul>

              <h3 className="font-semibold text-foreground">2.3 Campaign and Contact Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Target lists you create or upload (list names, descriptions)</li>
                <li>Contact information you provide (Instagram usernames, full names)</li>
                <li>Contact data enriched from your Instagram account: display names, profile picture URLs, conversation thread IDs, reachability status</li>
                <li>Follower and following lists from your Instagram account, used for building target lists</li>
              </ul>

              <h3 className="font-semibold text-foreground">2.4 Message and Conversation Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Instagram direct-message content (text, timestamps, sender information) from your campaign conversations</li>
                <li>Read receipt status (whether a contact has seen your message, and when)</li>
                <li>Reply detection data (whether a contact has replied)</li>
                <li>Recent conversation history (rolling window for unified inbox sync)</li>
              </ul>

              <h3 className="font-semibold text-foreground">2.5 Browser and Device Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Browser instance identifier (unique ID, persisted across sessions)</li>
                <li>Browser display label (your Instagram username)</li>
                <li>Chrome extension version number</li>
                <li>Operating platform and browser user agent string</li>
                <li>Chrome tab IDs for managed Instagram tabs</li>
              </ul>

              <h3 className="font-semibold text-foreground">2.6 Engine and Diagnostic Data</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Task execution logs (success, failure, timing)</li>
                <li>Engine diagnostic events (session state, errors)</li>
                <li>Heartbeat signals (sent periodically to confirm browser is active)</li>
              </ul>

              <h3 className="font-semibold text-foreground">2.7 Local Storage Data</h3>
              <p>The extension stores the following locally on your device using Chrome&apos;s built-in storage API:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Authentication tokens (access token, refresh token)</li>
                <li>Browser identity keys</li>
                <li>Task statistics (completed/failed counts)</li>
                <li>Tab management IDs</li>
                <li>Engine state flags (paused, disconnected)</li>
                <li>Diagnostic logs and events</li>
                <li>Conversation watermark timestamps (per thread, per browser instance — used to avoid re-syncing messages you have already sent)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use the collected data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Campaign Execution:</strong> Sending and scheduling Instagram direct messages on your behalf, tracking message delivery, and managing follow-up sequences.</li>
                <li><strong>Reply Detection:</strong> Monitoring your Instagram conversations to detect when a contact replies, so we can pause follow-ups and mark the contact as replied.</li>
                <li><strong>Read Receipt Tracking:</strong> Checking whether your messages have been seen by contacts.</li>
                <li><strong>Collision Prevention:</strong> Ensuring the same message is not sent twice to the same contact.</li>
                <li><strong>Safety Limits:</strong> Respecting work-hour settings and rate limits to protect your Instagram account.</li>
                <li><strong>Unified Inbox:</strong> Synchronizing conversation data to enable viewing your messages across devices.</li>
                <li><strong>Account Pairing:</strong> Linking your DMDroid account to your Instagram username for multi-account management.</li>
                <li><strong>Troubleshooting:</strong> Debugging engine errors and resolving support requests.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">4. How Your Information Is Shared</h2>

              <h3 className="font-semibold text-foreground">4.1 We Do Not Sell Your Data</h3>
              <p>We do not sell, trade, or rent your personal information to third parties.</p>

              <h3 className="font-semibold text-foreground">4.2 Data Shared With Your Consent</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your campaign data is shared with Instagram&apos;s servers when DMDroid sends messages on your behalf (this is how DM automation works).</li>
                <li>You may share your DMDroid dashboard with team members if you use the multi-user features.</li>
              </ul>

              <h3 className="font-semibold text-foreground">4.3 Legal Requirements</h3>
              <p>We may disclose your information if required by law, court order, or governmental request.</p>

              <h3 className="font-semibold text-foreground">4.4 Service Providers</h3>
              <p>
                We use <strong>Supabase</strong> as our sole backend infrastructure provider. Supabase hosts our database and authentication services. Your data is stored on Supabase&apos;s cloud infrastructure. Supabase operates under strict data processing agreements.
              </p>

              <h3 className="font-semibold text-foreground">4.5 No Other Third Parties</h3>
              <p>We do not integrate with analytics services, error tracking services, advertising networks, or any other third-party data processors.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">5. Browser Extension Permissions</h2>
              <p>DMDroid requests the following Chrome permissions:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>storage</strong> — Stores your authentication tokens, browser identity, task statistics, and engine configuration locally on your device.</li>
                <li><strong>tabs</strong> — Opens and manages Instagram browser tabs for campaign execution. Reads tab URLs to verify you are on Instagram.</li>
                <li><strong>alarms</strong> — Schedules recurring tasks: heartbeat signals, task polling, token refresh, message collection, and conversation sync.</li>
              </ul>

              <h3 className="font-semibold text-foreground">Host Permission: Instagram</h3>
              <p>The extension runs on Instagram pages to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Read your logged-in Instagram account information (username, user ID)</li>
                <li>Access your direct-message threads to send and read messages</li>
                <li>Compose and send messages through Instagram&apos;s messaging interface</li>
                <li>Read message read receipts</li>
                <li>Access your follower and following lists to build target lists</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">6. Data Stored Locally on Your Device</h2>
              <p>
                The extension stores data locally on your device using Chrome&apos;s built-in storage API. This data never leaves your device unless it is sent to our backend via API calls described in this policy.
              </p>
              <p>Data stored locally includes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Supabase authentication tokens (access token, refresh token)</li>
                <li>Your browser instance ID and display label</li>
                <li>A persistent browser identity key that identifies your physical browser across sessions</li>
                <li>Task completion statistics</li>
                <li>Chrome tab IDs for managed Instagram tabs</li>
                <li>Engine state (paused, disconnected, sleep/wake configuration)</li>
                <li>Diagnostic logs and structured event data</li>
                <li>Conversation watermark timestamps (used to avoid re-syncing messages you have already sent)</li>
              </ul>
              <p>No cookies are set or read by the extension. Authentication is handled via secure tokens in HTTP headers.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">7. Data Retention</h2>

              <h3 className="font-semibold text-foreground">7.1 Server-Side Data</h3>
              <p>We retain your data on our servers for as long as your account is active. This includes campaign and contact data, message and conversation data, browser instance records, and account settings.</p>

              <h3 className="font-semibold text-foreground">7.2 Local Data</h3>
              <p>
                Data stored locally on your device persists until you uninstall the extension (all local data is removed) or clear the extension&apos;s storage manually via Chrome settings.
              </p>

              <h3 className="font-semibold text-foreground">7.3 Account Deletion</h3>
              <p>When you delete your DMDroid account:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>We will remove your server-side data within 30 days</li>
                <li>Local data on your device will remain until you uninstall the extension</li>
                <li>Watermark data (conversation timestamps) will persist in local storage</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">8. Your Rights Under GDPR (EEA Users)</h2>
              <p>If you are located in the European Economic Area (EEA), you have the following rights under the General Data Protection Regulation:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right to Access:</strong> Request copies of all personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
                <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
                <li><strong>Right to Object:</strong> Object to our processing of your personal data for specific purposes.</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
              </ul>
              <p>To exercise these rights, contact us at <strong>hello@dmdroid.app</strong>. We will respond within 30 days.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">9. Your Rights Under CCPA (California Users)</h2>
              <p>If you are a California resident, the California Consumer Privacy Act (CCPA) grants you the following rights:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal data we have collected about you.</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal data we have collected about you.</li>
                <li><strong>Right to Opt-Out of Sale:</strong> We do not sell your personal data. You have the right to opt out of any future sale, which we will honor.</li>
              </ul>
              <p>To exercise these rights, contact us at <strong>hello@dmdroid.app</strong>. We will respond within 45 days.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">10. Instagram Data Access</h2>
              <p>DMDroid accesses Instagram through your browser session to provide its automation features. We do not store your Instagram password. The extension accesses Instagram data by:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Reading your active session:</strong> Detecting your logged-in Instagram username and user ID.</li>
                <li><strong>Accessing DM threads:</strong> Reading your direct-message threads to send follow-up messages and detect replies.</li>
                <li><strong>Sending messages:</strong> Composing and sending messages through Instagram&apos;s messaging interface.</li>
                <li><strong>Reading read receipts:</strong> Checking whether your contacts have seen your messages.</li>
                <li><strong>Accessing followers/following:</strong> Reading your follower and following lists to build target lists for campaigns.</li>
              </ul>
              <p>This data access occurs entirely within your browser. The extension does not use Instagram&apos;s official API — it interacts directly with Instagram&apos;s web interface.</p>
              <p><strong>Important:</strong> By using DMDroid, you authorize the extension to access and act on your Instagram account. You are responsible for ensuring your use complies with Instagram&apos;s Terms of Service.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">11. Data Security</h2>
              <p>We implement the following security measures:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Encryption in transit:</strong> All API communication uses HTTPS/TLS encryption.</li>
                <li><strong>Token-based authentication:</strong> We use secure tokens for API authentication. Passwords are never stored by the extension.</li>
                <li><strong>No remote code:</strong> DMDroid contains no remote code execution. All extension code is bundled locally in the Chrome extension package.</li>
                <li><strong>Local-first data:</strong> Sensitive data (auth tokens, watermarks, logs) is stored locally on your device.</li>
              </ul>
              <p>However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of your data.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">12. Children&apos;s Privacy</h2>
              <p>
                DMDroid is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected data from a child under 13, we will delete it promptly. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <strong>hello@dmdroid.app</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page and notify you via the DMDroid extension or email (if you have provided one). Your continued use of DMDroid after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-2 border-t border-border pt-6">
              <h2 className="text-lg font-semibold text-foreground">14. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Email:</strong> <a href="mailto:hello@dmdroid.app" className="text-primary hover:underline">hello@dmdroid.app</a></li>
                <li><strong>Website:</strong> <a href="https://www.dmdroid.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.dmdroid.app</a></li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">15. Chrome Web Store Compliance</h2>
              <p>DMDroid complies with the Chrome Web Store Developer Program Policies:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Single Purpose:</strong> DMDroid automates Instagram direct-message follow-up sequences.</li>
                <li><strong>No Remote Code:</strong> The extension contains no remote code. All functionality is bundled in the extension package.</li>
                <li><strong>No Deceptive Practices:</strong> The extension does not misrepresent its functionality or data collection.</li>
                <li><strong>User Disclosure:</strong> This Privacy Policy fully discloses all data collected, stored, and transmitted.</li>
                <li><strong>Permission Justification:</strong> Each requested permission (storage, tabs, alarms) is necessary for core functionality as described in Section 5.</li>
                <li><strong>Secure Transmission:</strong> All data is transmitted over HTTPS/TLS. No data is transmitted over insecure HTTP connections.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">16. Data Collection Summary</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-4 font-semibold text-foreground">Data Category</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">What We Collect</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Where It Is Stored</th>
                      <th className="py-2 font-semibold text-foreground">How It Is Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4">Account info</td>
                      <td className="py-2 pr-4">Email, DMDroid user ID</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Authentication</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Instagram account</td>
                      <td className="py-2 pr-4">Username, user ID, profile pic</td>
                      <td className="py-2 pr-4">Local + Supabase</td>
                      <td className="py-2">Account pairing, task execution</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Campaign data</td>
                      <td className="py-2 pr-4">Target lists, message templates</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Campaign configuration</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Contacts</td>
                      <td className="py-2 pr-4">Usernames, full names, thread IDs, reachability</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Message targeting, collision prevention</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Followers/following</td>
                      <td className="py-2 pr-4">Follower and following lists</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Target list creation</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Messages</td>
                      <td className="py-2 pr-4">DM text content, timestamps, sender info</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Unified inbox, reply detection</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Read receipts</td>
                      <td className="py-2 pr-4">Seen status, seen timestamps</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Reply detection</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Browser metadata</td>
                      <td className="py-2 pr-4">Platform, user agent, extension version</td>
                      <td className="py-2 pr-4">Supabase (server)</td>
                      <td className="py-2">Compatibility, heartbeat</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Auth tokens</td>
                      <td className="py-2 pr-4">Access/refresh tokens</td>
                      <td className="py-2 pr-4">Local (device storage)</td>
                      <td className="py-2">API authentication</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Watermarks</td>
                      <td className="py-2 pr-4">Per-thread timestamps</td>
                      <td className="py-2 pr-4">Local (device storage)</td>
                      <td className="py-2">Prevent re-syncing messages</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Diagnostic logs</td>
                      <td className="py-2 pr-4">Task outcomes, errors, events</td>
                      <td className="py-2 pr-4">Local (device storage)</td>
                      <td className="py-2">Troubleshooting</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Engine state</td>
                      <td className="py-2 pr-4">Pause, sleep/wake, tab IDs</td>
                      <td className="py-2 pr-4">Local (device storage)</td>
                      <td className="py-2">Engine management</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
