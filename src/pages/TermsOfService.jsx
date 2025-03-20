const TermsOfService = () => {
  return (
    <div className="ml-2 mr-10">
      <div className="flex flex-col items-center">
        <div className="w-full px-9 mt-10 py-10">
          {/* Main Title */}
          <h1 className="text-dark-blue text-3xl font-extrabold text-center">
            Terms and Conditions
          </h1>

          {/* Introduction */}
          <p className="text-dark-blue text-md mt-6">
            These Terms and Conditions govern all use of “Jobbyo” (the “Application” or “Service”). By using Jobbyo, you (“the User”) agree to these Terms. Only adults (as defined by applicable law) can legally use the Service.
          </p>

          <hr className="my-6" />

          {/* 1. Introduction */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">1. Introduction</h2>
          <p className="text-dark-blue text-md mt-2">
            These Terms and Conditions govern all use of “Jobbyo” (the “Application” or “Service”). By using Jobbyo, you (“the User”) agree to these Terms. Only adults (as defined by applicable law) can legally use the Service.
          </p>

          {/* 2. Account Registration */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">2. Account Registration</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>You may need to register an account to use Jobbyo.</li>
            <li>You must provide accurate, complete information and keep your login details confidential.</li>
            <li>Each person should have only one account (unless otherwise specified).</li>
            <li>You can delete your account any time by clicking at the 'delete account' button at the Settings page.</li>
          </ul>

          {/* 3. Content Ownership & Usage */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">3. Content Ownership & Usage</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>Our Content</strong>: Jobbyo and its licensors own all intellectual property rights to content we provide. You may not copy, modify, or share Jobbyo content outside of normal use unless we allow it.
            </li>
            <li>
              <strong>User Content</strong>: You can upload or provide your own résumé information, profile data, etc. By doing so, you confirm you have the right to share it. You also grant us permission to process it as needed to run the Service (e.g., show it to potential employers, analyze it with AI).
            </li>
          </ul>

          {/* 4. Acceptable Use */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">4. Acceptable Use</h2>
          <p className="text-dark-blue text-md mt-2">
            You must not use Jobbyo in ways that break the law, infringe on anyone’s rights, or disrupt the Service.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Submitting false information or impersonating others.</li>
            <li>Spamming or using bots to create multiple accounts.</li>
            <li>Violating others’ privacy or rights.</li>
            <li>Attempting to hack, scrape, or damage our infrastructure.</li>
          </ul>

          {/* 5. External Resources & Third-Party Services */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">5. External Resources & Third-Party Services</h2>
          <p className="text-dark-blue text-md mt-2">
            Jobbyo may link to or integrate with third-party services (e.g., external job boards). We have no control over those services or their content. Any issues with third-party services must be handled with those third parties.
          </p>

          {/* 6. Paid Services & Subscriptions */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">6. Paid Services & Subscriptions</h2>
          <p className="text-dark-blue text-md mt-2">
            Some features on Jobbyo may require payment. Prices and payment details are shown during checkout. Subscriptions automatically renew unless canceled prior to renewal. If your payment fails, we can cancel or suspend your access.
          </p>

          {/* 7. Refunds & Cancellations */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">7. Refunds & Cancellations</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>Refunds</strong>: Check local legal rules. For instance, if you’re in the EU, UK, or Brazil, consumer protection laws may grant a right to cancel within a certain time.
            </li>
            <li>
              You can cancel a subscription by contacting us or using the cancellation option in your account settings (where available).
            </li>
            <li>
              If you cancel on time, your subscription won’t renew for the following period.
            </li>
          </ul>

          {/* 8. Liability & Disclaimers */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">8. Liability & Disclaimers</h2>
          <ul className="list-disc ml-5 mt-2">
            <li>
              <strong>Use at Your Own Risk</strong>: The Service is provided “as is.” We do our best to keep it accurate, but we can’t guarantee everything is always error-free.
            </li>
            <li>
              <strong>No Warranty</strong>: We don’t guarantee that Jobbyo will meet all your needs or be available at all times without interruption.
            </li>
            <li>
              <strong>Limitation of Liability</strong>: Except where prohibited by law, we aren’t responsible for indirect damages (e.g., lost profits) or issues caused by factors out of our control (e.g., downtime).
            </li>
            <li>
              <strong>Indemnification</strong>: If you cause harm by violating these Terms, you agree to defend and hold us harmless from legal claims or damages.
            </li>
          </ul>

          {/* 9. Privacy */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">9. Privacy</h2>
          <p className="text-dark-blue text-md mt-2">
            Our use of your personal data is explained in our Privacy Policy. By using Jobbyo, you agree we can process your information to run the Service (e.g., analyzing your résumé to match you with potential employers).
          </p>

          {/* 10. Changes to These Terms */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">10. Changes to These Terms</h2>
          <p className="text-dark-blue text-md mt-2">
            We may update or modify these Terms. If changes are major, we’ll let you know (e.g., via email or a prominent notice on our site). Continuing to use Jobbyo after changes means you agree to the updated Terms.
          </p>

          {/* 11. Governing Law & Dispute Resolution */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">11. Governing Law & Dispute Resolution</h2>
          <p className="text-dark-blue text-md mt-2">
            These Terms are governed by the laws where we are based (unless a different local law provides stronger consumer protections). Any legal disputes usually go through the courts where the company is located, unless your local laws say otherwise (especially if you are a consumer in the EU, UK, or Brazil).
          </p>

          {/* 12. Contact Us */}
          <h2 className="text-dark-blue text-2xl font-bold mt-8">12. Contact Us</h2>
          <p className="text-dark-blue text-md mt-2">
            For questions or concerns, please reach out to us at <strong>hello@jobbyo.ai</strong>.
          </p>

          <hr className="my-6" />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
