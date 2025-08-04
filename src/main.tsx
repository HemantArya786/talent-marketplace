import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App.tsx";
import "./index.css";
import Navbar from "@/Navbar.tsx";
import Footer from "@/Footer";
import LoginPage from "./Pages/LoginPage";
import ResumeUpload from "./Pages/DeveloperResumeUpload";
import ManualFormPage from "./Pages/DeveloperManualFillup";
import PortfolioPage from "./Pages/DeveloperPortfolioPage";
import CompanyFormPage from "./Pages/CompanyManualFillUp";
import CompanyPortfolioPage from "./Pages/CompanyPortfolioPage";
import DevelopersListPage from "./Pages/FindDeveloper";
import Inbox from "./Pages/Inbox";
import RoleSelection from "./Pages/RoleSection";
import UserSignUp from "./Pages/UserSignUp";
import ClientSignUp from "./Pages/ClientSignUp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter> 
      <Navbar />
      <div className="pt-16">
         <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/developer/resume" element={<ResumeUpload />} />
        <Route path="/developer/list" element={<DevelopersListPage />} />
        <Route path="/developer/preview" element={<ManualFormPage />} />
        <Route path="/company/portfolio" element={<CompanyPortfolioPage  />} />
        <Route path="/developer/portfolio" element={<PortfolioPage />} />
        <Route path="/company/manual-fillup" element={<CompanyFormPage />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/signup-client" element={<ClientSignUp />} />
        <Route path="/signup-user" element={<UserSignUp />} />
        
    

        <Route path="*" element={<App />} />
      </Routes>
      </div>
     
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
