import ApplyNRI from './pages/ApplyNRI';
import NRIInfo from './pages/NRIInfo';
import ApplyCard from './pages/ApplyCard';
import ManageCards from './pages/ManageCards';
import CardOffers from './pages/CardOffers';
import HomePage from './pages/HomePage';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StepsSection from './components/StepsSection';
import ServicesSection from './components/ServicesSection';
import AccountOverview from './components/AccountOverview';
import Footer from './components/Footer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavingsAccount from './pages/SavingsAccount';
import SalaryAccount from './pages/SalaryAccount';
import PrivateBankingSavingsAccount from './pages/PrivateBankingSavingsAccount';
import WealthManagementSavingsAccount from './pages/WealthManagementSavingsAccount';
import SelectBankingSavingsAccount from './pages/SelectBankingSavingsAccount';
import SavingsAccountForStudents from './pages/SavingsAccountForStudents';
import SavingsAccountForSeniors from './pages/SavingsAccountForSeniors';
import Payments from './pages/Payments';
import Cards from './pages/Cards';
import Loans from './pages/Loans';
import Investments from './pages/Investments';
import Insurance from './pages/Insurance';
import SpecialServices from './pages/SpecialServices';
import NRI from './pages/NRI';
import Business from './pages/Business';
// import iShop from './pages/iShop';
import Resources from './pages/Resources';
import About from './pages/About';
import Help from './pages/Help';
import Complaints from './pages/Complaints';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/savings-account" element={<SavingsAccount />} />
          <Route path="/salary-account" element={<SalaryAccount />} />
          <Route path="/private-banking-savings-account" element={<PrivateBankingSavingsAccount />} />
          <Route path="/wealth-management-savings-account" element={<WealthManagementSavingsAccount />} />
          <Route path="/select-banking-savings-account" element={<SelectBankingSavingsAccount />} />
          <Route path="/savings-account-for-students" element={<SavingsAccountForStudents />} />
          <Route path="/savings-account-for-seniors" element={<SavingsAccountForSeniors />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/apply-card" element={<ApplyCard />} />
          <Route path="/manage-cards" element={<ManageCards />} />
          <Route path="/card-offers" element={<CardOffers />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/special-services" element={<SpecialServices />} />
          <Route path="/nri" element={<NRI />} />
          <Route path="/apply-nri" element={<ApplyNRI />} />
          <Route path="/nri-info" element={<NRIInfo />} />
          <Route path="/business" element={<Business />} />
          {/* <Route path="/ishop" element={<iShop />} /> */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
