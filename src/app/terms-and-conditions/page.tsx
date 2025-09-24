import AppShell from '../AppShell';
import React from 'react';

export default function TermsPage() {
  return (
    <AppShell>
      <div className="max-w-3xl mx-auto py-16 px-4 mt-32">
        <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>
        <p className="mb-4">
          ProSkill, a skill education edtech initiative from the house of <strong>Wydex Ventures LLP</strong>, 
          provides courses and training programs subject to the following Terms &amp; Conditions. 
          By enrolling in our courses or accessing our website, you agree to these terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Definitions</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>&quot;We&quot; / &quot;Us&quot; / &quot;Our&quot;</strong> refers to ProSkill (Wydex Ventures LLP).</li>
          <li><strong>&quot;You&quot; / &quot;User&quot;</strong> refers to any learner, participant, or entity accessing our services.</li>
          <li><strong>&quot;Services&quot;</strong> include all online/offline skill courses, workshops, and related training programs offered by ProSkill.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Use of Service</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>You agree to use our services for personal and educational purposes only.</li>
          <li>You will not share, distribute, or resell course materials without written consent.</li>
          <li>You shall not attempt to gain unauthorized access to any part of our systems or platforms.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Account Registration</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>You may be required to create an account to access certain features or classes.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You must notify us immediately of any unauthorized use of your account.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Fees &amp; Payment</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All course fees must be paid in advance unless otherwise agreed.</li>
          <li>Prices are subject to change but will not affect learners already enrolled.</li>
          <li>Failure to pay may result in suspension or cancellation of access.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Refund Policy</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>If you are not satisfied with a course, you may raise a refund request <strong>within 1 day of enrollment</strong>.</li>
          <li>If you have attended/utilized the course completely, <strong>refunds will not be applicable</strong>.</li>
          <li>Approved refunds are processed within <strong>2 business days</strong> and will be credited to the original payment method within <strong>1–3 business days</strong>.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All content, videos, materials, and course designs provided by ProSkill are our exclusive property.</li>
          <li>You may not reproduce, distribute, or create derivative works without our written consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Disclaimers &amp; Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Courses and services are provided &quot;as is&quot; without warranties of any kind.</li>
          <li>We do not guarantee specific results, career outcomes, or earnings unless explicitly mentioned.</li>
          <li>To the fullest extent permitted by law, ProSkill will not be liable for any indirect or consequential damages.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Code of Conduct</h2>
        <p className="mb-4">
          Learners are expected to maintain respectful behavior towards trainers and peers. 
          ProSkill reserves the right to remove any learner engaging in disruptive or unethical behavior without a refund.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction 
          of the courts in Kerala, India.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. Updated terms will be posted on this page with the 
          &quot;Last Updated&quot; date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms &amp; Conditions, please contact us at{' '}
          <a href="mailto:info@proskilledu.com" className="text-blue-500 underline">info@proskilledu.com</a> 
          {' '}or call us at <strong>+91 70346 88802</strong>.
        </p>
      </div>
    </AppShell>
  );
}
