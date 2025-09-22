import React from 'react';
export default function NRIInfo() {
  return (
    <div style={{padding:'2rem', maxWidth:'900px', margin:'0 auto'}}>
      <h1>NRI Banking Information</h1>
      <p>JKL Bank offers a comprehensive suite of NRI banking services designed to meet the unique needs of Non-Resident Indians. Enjoy global access, secure remittance, and a range of account options tailored for you.</p>

      <h2 style={{marginTop:'2rem'}}>Account Types</h2>
      <ul style={{fontSize:'1.1rem', lineHeight:'1.7'}}>
        <li><b>NRE Account:</b> Repatriable account for income earned outside India. Tax-free interest and full repatriation of funds.</li>
        <li><b>NRO Account:</b> Manage income earned in India (rent, dividends, etc.). Repatriation allowed within set limits.</li>
        <li><b>FCNR Account:</b> Fixed deposit in foreign currency. Protects against exchange rate fluctuations.</li>
      </ul>

      <h2 style={{marginTop:'2rem'}}>Key Benefits</h2>
      <ul style={{fontSize:'1.1rem', lineHeight:'1.7'}}>
        <li>24x7 global access to your accounts via internet and mobile banking</li>
        <li>Easy and secure remittance services to India</li>
        <li>Attractive interest rates and tax benefits on select accounts</li>
        <li>Dedicated NRI helpdesk and relationship managers</li>
        <li>Wide range of investment and insurance options</li>
      </ul>

      <h2 style={{marginTop:'2rem'}}>Frequently Asked Questions</h2>
      <ul style={{fontSize:'1.1rem', lineHeight:'1.7'}}>
        <li><b>Who can open an NRI account?</b> Any Indian citizen residing abroad can open an NRI account with valid documents.</li>
        <li><b>What documents are required?</b> Passport, visa, proof of overseas address, and a recent photograph.</li>
        <li><b>How can I transfer money to India?</b> Use our secure online remittance portal or visit any JKL Bank branch.</li>
        <li><b>Is my money safe?</b> Yes, JKL Bank uses advanced security protocols to protect your funds and data.</li>
      </ul>
    </div>
  );
}
