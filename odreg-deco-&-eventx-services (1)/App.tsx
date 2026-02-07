
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesListPage from './pages/ServicesListPage';
import ServiceDetail from './pages/ServiceDetail';
import PortfolioListPage from './pages/PortfolioListPage';
import PortfolioDetail from './pages/PortfolioDetail';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ConsultPage from './pages/ConsultPage';
import AdminInboxPage from './pages/AdminInboxPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4E4BC]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioListPage />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/consult" element={<ConsultPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminInboxPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
