import React, { useRef, useState } from "react";
import { FaPiggyBank, FaBriefcase, FaChartLine, FaPlusCircle, FaGift, FaRegFilePdf, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

export default function SavingsAccount() {
  const [showModal, setShowModal] = useState(false);
  const featuresRef = useRef(null);

  const handleOpenAccount = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleViewBenefits = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/brochures/savings-account-brochure.pdf';
    link.download = 'JKL-Savings-Account-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    // Inline style objects
    const styles = {
      wrapper: {
        background: '#4A90E2', color: '#fff', minHeight: '80vh', padding: '3rem 0 2rem 0', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
      },
      banner: {
        background: 'linear-gradient(90deg, #4A90E2 60%, #50E3C2 100%)', color: '#fff', padding: '2.5rem 2rem 2rem 2rem', borderRadius: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: '0 2px 16px rgba(74, 144, 226, 0.10)'
      },
      bannerTitle: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' },
      bannerDesc: { fontSize: '1.2rem', marginBottom: '1.5rem' },
      btnRow: { display: 'flex', gap: '1rem', marginBottom: '1.5rem' },
      actionBtn: { background: '#fff', color: '#4A90E2', border: 'none', borderRadius: '1.2rem', padding: '0.8rem 1.8rem', fontSize: '1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 1px 6px rgba(74, 144, 226, 0.07)', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' },
      featuresGrid: { display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' },
      featureCard: { background: '#fff', color: '#222B45', borderRadius: '1.2rem', boxShadow: '0 1px 8px rgba(74, 144, 226, 0.08)', padding: '1.5rem 1.2rem', minWidth: '220px', flex: '1 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.7rem' },
      featureIcon: { fontSize: '1.7rem', color: '#4A90E2' },
      featureTitle: { fontWeight: 'bold', fontSize: '1.1rem' },
      featureDesc: { fontSize: '1rem' },
      faqSection: { marginTop: '2.5rem' },
      faqTitle: { fontSize: '1.3rem', color: '#4A90E2', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
      faqList: { listStyle: 'none', padding: 0 },
      faqItem: { marginBottom: '1.2rem', color: '#222B45' }
    };

    // --- CLEAN RETURN BLOCK ---
    return (
      <div style={styles.wrapper}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
          <div style={styles.banner}>
            <h1 style={styles.bannerTitle}>Savings Account: One Account - Endless Possibilities</h1>
            <p style={styles.bannerDesc}>
              Unlock a world of benefits with a JKL Bank Savings Account. Enjoy easy access, high interest, digital banking, and more—all in one place.
            </p>
            <div style={styles.btnRow}>
              <button style={styles.actionBtn} onClick={handleOpenAccount}><FaPlusCircle /> Open Account</button>
              <button style={styles.actionBtn} onClick={handleViewBenefits}><FaGift /> View Benefits</button>
              <button style={styles.actionBtn} onClick={handleDownload}><FaRegFilePdf /> Download Brochure</button>
            </div>
          </div>
          <div style={styles.featuresGrid} ref={featuresRef} id="features-section">
            <div style={styles.featureCard}>
              <span style={styles.featureIcon}><FaCheckCircle /></span>
              <span style={styles.featureTitle}>Zero Balance Facility</span>
              <span style={styles.featureDesc}>No minimum balance required for select accounts.</span>
            </div>
            <div style={styles.featureCard}>
              <span style={styles.featureIcon}><FaGift /></span>
              <span style={styles.featureTitle}>Exclusive Offers</span>
              <span style={styles.featureDesc}>Get discounts and cashback on shopping, dining, and more.</span>
            </div>
            <div style={styles.featureCard}>
              <span style={styles.featureIcon}><FaRegFilePdf /></span>
              <span style={styles.featureTitle}>Easy Documentation</span>
              <span style={styles.featureDesc}>Quick and paperless account opening process.</span>
            </div>
            <div style={styles.featureCard}>
              <span style={styles.featureIcon}><FaPlusCircle /></span>
              <span style={styles.featureTitle}>Family Banking</span>
              <span style={styles.featureDesc}>Bank together and enjoy group benefits for your family.</span>
            </div>
          </div>
          <div style={styles.faqSection}>
            <div style={styles.faqTitle}><FaQuestionCircle /> Frequently Asked Questions</div>
            <ul style={styles.faqList}>
              <li style={styles.faqItem}><b>Who can open a JKL Bank Savings Account?</b><br />Any resident individual above 18 years can open an account. Minors can open with a guardian.</li>
              <li style={styles.faqItem}><b>What documents are required?</b><br />Aadhaar, PAN, and a passport-size photo are required for most accounts.</li>
              <li style={styles.faqItem}><b>Is there a minimum balance?</b><br />Zero balance facility is available for select account types.</li>
            </ul>
          </div>
          {showModal && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
              <div style={{ background: '#fff', borderRadius: '1.2rem', padding: '2rem 2.5rem', boxShadow: '0 2px 16px rgba(74,144,226,0.15)', minWidth: '320px', textAlign: 'center' }}>
                <h2>Open Savings Account</h2>
                <p>Thank you for your interest! Our representative will contact you soon to help you open your Savings Account at JKL Bank.</p>
                <button style={{ background: '#4A90E2', color: '#fff', border: 'none', borderRadius: '1rem', padding: '0.5rem 1.2rem', fontSize: '1rem', marginTop: '1.5rem', cursor: 'pointer' }} onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

