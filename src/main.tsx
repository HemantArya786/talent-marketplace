import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App.tsx";
import "./index.css";
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
import Header from "./components/Header";
import PersonalDetailsForm from "./Pages/PersonalDetailsForm";
import ProjectDetailsForm from "./Pages/ProjectDetailForm";
import JobDetailsForm from "./Pages/JobDetailForm";
import { ContextApi } from './context/ContextApi';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>

      <ContextApi>
        <Header />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/role-selection" element={<RoleSelection />} />
            <Route path="/signup-client" element={<ClientSignUp />} />
            <Route path="/signup-user" element={<UserSignUp />} />

            <Route path="/inbox" element={<Inbox />} />

            <Route path="/developer/resume" element={<ResumeUpload />} />
            <Route path="/developer/list" element={<DevelopersListPage />} />

            <Route path="/developer/personal-details" element={<PersonalDetailsForm />} />
            <Route path="/developer/project-details" element={<ProjectDetailsForm />} />
            <Route path="/developer/experience-details" element={<JobDetailsForm />} />
            <Route path="/developer/preview/:userId" element={<ManualFormPage />} />
            <Route path="/developer/portfolio/:userId" element={<PortfolioPage />} />


            <Route path="/company/portfolio/:clientId" element={<CompanyPortfolioPage />} />
            <Route path="/company/preview/:clientId" element={<CompanyFormPage />} />

            <Route path="*" element={<App />} />
          </Routes>
        </div>

        <Footer />

      </ContextApi>
    </BrowserRouter>
  </StrictMode>
);
