import AppShell from '../AppShell';
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto py-16 px-4 mt-32">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          ProSkill, a skill education edtech initiative from the house of <strong>Wydex Ventures LLP</strong>, 
          is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard 
          your personal information when you use our website, courses, and related services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal details such as name, email, phone number, and billing information when you enroll in a course.</li>
          <li>Login credentials if you create an account on our platform.</li>
          <li>Learning progress, feedback, and submissions within courses.</li>
          <li>Technical information such as browser type, IP address, and cookies for analytics purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To process your course registrations and payments.</li>
          <li>To deliver course content, updates, and support services.</li>
          <li>To improve our platform, courses, and user experience.</li>
          <li>To send important notifications such as policy changes, course updates, and reminders.</li>
          <li>To comply with legal obligations where applicable.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing of Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>We do not sell or rent your personal data to third parties.</li>
          <li>We may share your information with trusted service providers (e.g., payment gateways, hosting services) 
              solely for delivering our services.</li>
          <li>We may disclose information if required by law or to protect the rights and safety of ProSkill, 
              our users, or the public.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies &amp; Tracking</h2>
        <p className="mb-4">
          Our website uses cookies and similar technologies to enhance user experience, track engagement, and 
          improve services. You may disable cookies through your browser settings, but some features may not 
          function properly.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement reasonable technical and organizational measures to protect your personal data against 
          unauthorized access, alteration, or misuse. However, no method of transmission over the internet is 
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Children’s Privacy</h2>
        <p className="mb-4">
          Our services are intended for learners aged 12 and above unless otherwise specified. We do not knowingly 
          collect personal data from children under 12 without parental consent.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>You may request access, correction, or deletion of your personal data.</li>
          <li>You may opt out of marketing communications by following unsubscribe links or contacting us directly.</li>
          <li>You may request clarification on how your data is used at any time.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Changes to Privacy Policy</h2>
        <p className="mb-4">
          We reserve the right to update this Privacy Policy at any time. Updated policies will be posted on this page 
          with the &quot;Last Updated&quot; date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding this Privacy Policy, please contact us at{' '}
          <a href="mailto:info@proskilledu.com" className="text-blue-500 underline">info@proskilledu.com</a> 
          {' '}or call us at <strong>+91 70346 88802</strong>.
        </p>
      </div>
    </AppShell>
  );
}
