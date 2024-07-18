import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import UploadScannedResults from '../Pages/UploadScannedResults';
import ITAssetsManagement from '../Pages/ITAssetsManagement';
import ComplianceConfiguration from '../Pages/ComplianceConfiguration';
import ComplianceScoreOverview from '../Pages/ComplianceScoreOverview';
import Reports from '../Pages/Reports';
import EvidenceRepository from '../Pages/EvidenceRepository';
import UserManagement from '../Pages/UserManagement';
import Notification from '../Pages/Notification';
import Settings from '../Pages/Settings';
import './Home.css';

import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import PolicyPage from '../Pages/PolicyPage';
import ContactPage from '../Pages/ContactPage';



const Home  = () => {
  return (
    <Router>
    <Navbar />
    <div className='Home'>
      <Sidebar />
      <div className="content">
        <Routes>
          {/* Navbar Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Sidebar Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload-scanned-results" element={<UploadScannedResults />} />
          <Route path="/it-assets-management" element={<ITAssetsManagement />} />
            <Route path="/compliance-configuration" element={<ComplianceConfiguration />} />
            <Route path="/compliance-score-overview" element={<ComplianceScoreOverview />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/evidence-repository" element={<EvidenceRepository />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        
      </div>
    </Router>
    
  )
}

export default Home 