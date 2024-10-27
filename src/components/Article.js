// src/components/Article.js
import React from 'react';
import '../css/Article.css';

const Article = () => {
  return (
    <div className="container article-container">
      <header className="text-center mb-5">
        <h1 className="article-title">Unmasking Scammers: Understanding, Identifying, and Protecting Against Fraud</h1>
        <p className="article-intro">
          In an increasingly digital world, scam artists are becoming more sophisticated, using a variety of tactics to deceive unsuspecting individuals and businesses.
        </p>
      </header>

      <section>
        <h2 className="section-title">The Anatomy of a Scam</h2>
        <p>Scammers leverage various methods to dupe their victims. Some of the most common types of scams include:</p>
        <ul className="list-group">
          <li className="list-group-item"><strong>Phishing Scams:</strong> Often conducted via email or text, phishing scams involve fraudsters impersonating trusted entities—like banks or service providers...</li>
          <li className="list-group-item"><strong>Romance Scams:</strong> Scammers often create fake profiles on dating sites and social media...</li>
          <li className="list-group-item"><strong>Tech Support Scams:</strong> Fraudsters pose as representatives from reputable tech companies...</li>
          <li className="list-group-item"><strong>Investment Scams:</strong> These frequently promise high returns with minimal risk...</li>
          <li className="list-group-item"><strong>Charity Scams:</strong> Scammers exploit the goodwill of others by creating fake charities...</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2 className="section-title">Signs You’re Being Scammed</h2>
        <ul>
          <li>Unsolicited communications</li>
          <li>Pressure tactics</li>
          <li>Poor grammar and spelling</li>
          <li>Too good to be true offers</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2 className="section-title">How to Protect Yourself</h2>
        <ol>
          <li><strong>Educate Yourself:</strong> Stay informed about the latest scams...</li>
          <li><strong>Verify Authenticity:</strong> If someone claims to be from a trusted organization...</li>
          <li><strong>Use Security Measures:</strong> Implement robust cybersecurity practices...</li>
          <li><strong>Trust Your Instincts:</strong> If something feels off, trust your gut...</li>
          <li><strong>Report Scams:</strong> If you encounter a scam, report it...</li>
        </ol>
      </section>
<section className="mt-5">
    <h2 className="section-title">Examples of Scam Links and Channels</h2>
    <p>
        Here are examples of how scammers use platforms like YouTube and Telegram to deceive people. Be cautious and do not engage with suspicious content or click on unknown links:
    </p>
    <ul className="list-group">
        <li className="list-group-item">
            <strong>YouTube Scam Example:</strong> 
            <a href="https://youtu.be/Cgq_HSwMyE0" target="_blank" rel="noopener noreferrer">
                Fake Boucheron's scam
            </a> 
        </li>
    </ul>
    <p className="mt-3">
        Always verify the authenticity of any group or video before engaging. If you find any fraudulent content, report it immediately to the platform's support team.
    </p>
</section>


      <footer className="text-center mt-5">
        <h2 className="section-title">Conclusion</h2>
        <p>
          Scammers thrive on deception and exploitation, but by understanding their tactics and remaining vigilant, you can protect yourself and your loved ones. Stay educated and aware.
        </p>
      </footer>
    </div>
  );
};

export default Article;
