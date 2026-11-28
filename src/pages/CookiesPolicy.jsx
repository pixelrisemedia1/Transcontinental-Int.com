import React from "react";
import DocumentPageLayout from "../components/documents/DocumentPageLayout";

export default function CookiesPolicy() {
  return (
    <DocumentPageLayout
      title="Cookies Policy"
      subtitle="How we use cookies and similar technologies on our website."
      description="Last updated: February 2026. This Cookies Policy explains what cookies are, how TransContinental Group International Limited uses them, and how you can manage your cookie preferences."
      url="https://drive.google.com/file/d/1-oCVkCJYdkE5LqRt_INhA0lKilEHjIKP/view?usp=drive_link"
    >
      <h3>1. What Are Cookies?</h3>
      <p>Cookies are small text files placed on your device (computer, smartphone, or other internet-enabled device) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.</p>

      <h3>2. Types of Cookies We Use</h3>

      <h4>Strictly Necessary Cookies</h4>
      <p>These cookies are essential for the operation of our website. They enable core functionality such as security, session management, and accessibility preferences. You cannot opt out of these cookies as they are required for the site to function.</p>
      <ul>
        <li><strong>Session cookies:</strong> Keep you logged in during your session</li>
        <li><strong>Security cookies:</strong> Protect against cross-site request forgery and other attacks</li>
        <li><strong>Preference cookies:</strong> Remember your accessibility settings and language preferences</li>
      </ul>

      <h4>Analytics Cookies</h4>
      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the structure, content, and functionality of our site.</p>
      <ul>
        <li><strong>Page view tracking:</strong> Which pages are most visited</li>
        <li><strong>Traffic sources:</strong> How visitors find our website</li>
        <li><strong>Device and browser data:</strong> Technical information to optimize compatibility</li>
      </ul>

      <h4>Functional Cookies</h4>
      <p>These cookies allow our website to remember choices you make and provide enhanced, more personalized features. They may be set by us or by third-party providers whose services we have added to our pages.</p>
      <ul>
        <li><strong>Language preferences:</strong> Remembering your selected language via Google Translate</li>
        <li><strong>Accessibility settings:</strong> Storing your font size, contrast, and other accessibility preferences</li>
        <li><strong>Form data:</strong> Remembering information you have entered in forms</li>
      </ul>

      <h4>Third-Party Cookies</h4>
      <p>Some cookies are placed by third-party services that appear on our pages:</p>
      <ul>
        <li><strong>Google Translate:</strong> Provides website translation functionality. Google's privacy policy applies to their cookies.</li>
        <li><strong>Google Maps:</strong> Embedded maps on our Contact page. Google's privacy policy applies.</li>
        <li><strong>hCaptcha:</strong> Bot protection on our forms. hCaptcha's privacy policy applies.</li>
      </ul>

      <h3>3. Cookie Duration</h3>
      <ul>
        <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
        <li><strong>Persistent cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until you delete them</li>
        <li><strong>Accessibility preference cookies:</strong> Stored locally in your browser's localStorage until you clear it</li>
      </ul>

      <h3>4. Managing Your Cookie Preferences</h3>
      <p>You can control and manage cookies in several ways:</p>
      <ul>
        <li><strong>Cookie consent banner:</strong> When you first visit our site, you can accept or decline non-essential cookies through our consent banner.</li>
        <li><strong>Browser settings:</strong> Most browsers allow you to view, manage, delete, and block cookies. Note that blocking all cookies may affect website functionality.</li>
        <li><strong>Browser-specific instructions:</strong>
          <ul>
            <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
            <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
            <li>Safari: Preferences → Privacy → Manage Website Data</li>
            <li>Edge: Settings → Site Permissions → Cookies and site data</li>
          </ul>
        </li>
      </ul>
      <p>Please note that restricting cookies may impact the functionality of our website, including your ability to use features such as the quote request form and live chat.</p>

      <h3>5. Do Not Track</h3>
      <p>Some browsers include a "Do Not Track" feature. Our website does not currently respond to Do Not Track signals, but you can use the browser settings and cookie management options described above to limit tracking.</p>

      <h3>6. Updates to This Policy</h3>
      <p>We may update this Cookies Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please check this page periodically to stay informed about our use of cookies.</p>

      <h3>7. Contact Us</h3>
      <p>If you have questions about our use of cookies, please contact us at <a href="mailto:tcl@transcontinental-int.com" className="text-cyan-600 hover:underline">tcl@transcontinental-int.com</a>.</p>
    </DocumentPageLayout>
  );
}