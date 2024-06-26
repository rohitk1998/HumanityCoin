import { useEffect } from 'react';
import './index.scss';

export default function Term_Condition() {

    useEffect(()=> {
      window.scroll(0,0)
    },[])
  return (
    <div className="ecosystem">
      <div className="terms-content">
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to Humanity Coin! These terms and conditions (“Terms”,
          “Agreement”) govern your use of our website located at [Website URL]
          (together or individually “Service”) operated by Humanity Coin.
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using our Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you must not
          access the Service.
        </p>

        <h2>Eligibility</h2>
        <p>
          To use our Service, you must be at least 18 years old and have the
          legal capacity to enter into a binding contract.
        </p>

        <h2>User Account</h2>
        <p>
          You must create an account to access certain features of the service.
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to notify us immediately of any
          unauthorized use of your account.
        </p>

        <h2>Purchases and Transactions</h2>
        <p>
          All transactions made via our service are irreversible. You agree to
          provide accurate and complete information during each transaction.
        </p>
        <h2>Use of Cryptocurrency</h2>
        <p>
          Humanity Coin is a decentralized cryptocurrency, and its use is
          subject to local laws and regulations.We do not guarantee the value or
          stability of Humanity Coin.
        </p>
        <h2>Risks Related to Cryptocurrency</h2>
        <p>
          The cryptocurrency market is volatile, and the value of your
          investment may increase or decrease.You acknowledge and accept the
          risks inherent in the purchase, sale and use of cryptocurrencies.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          The Service and its original content (excluding content provided by
          users) are and will remain the exclusive property of Humanity Coin and
          its licensors. You may not use our trademarks and trade dress without
          our prior written permission.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          In no event will Humanity Coin, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential or punitive loss or
          damage, including without limitation, lost profits, data, use,
          goodwill or other intangible losses, resulting from your access or use
          or inability to access or use the Service.
        </p>
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these terms at any time. If a revision is material we will provide at
          least 30 days notice prior to any new terms taking effect.
        </p>
        <h2>Applicable Right</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of that country, without regard to its conflict of law
          provisions.
        </p>
      </div>
    </div>
  );
}
