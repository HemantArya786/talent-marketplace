import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App.tsx";
import "./index.css";
import Footer from "@/Footer";
import LoginPage from "./Pages/LoginPage";
// import ResumeUpload from "./Pages/DeveloperResumeUpload";
// import ManualFormPage from "./Pages/DeveloperManualFillup";
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
import ProfileImageUpload from "./Pages/ProfileImageUplaodPage";
import EducationForm from "./Pages/EducationFormPage";
import CategorySkillsForm from "./Pages/CategorySkillsForm";
import CompanyDetailsPage from "./Pages/CompanyDetailPage";
import CompanyProfileImageUpload from "./Pages/CompanyProfileUploadPage";
import CompanyPersonDetailsForm from "./Pages/CompanyPersonDetailsForm";
import Test from "./Pages/Test";
import JobPostPage from "./Pages/JobPosting";
import CompanyDashboardPage from "./Pages/CompanyDashboard";
import CompanySidebar from "./components/CompanySidebar";
import ApplicantsPage from "./Pages/ApplicantList";
import DeveloperSidebar from "./components/DeveloperSidebar";

// Layout for company pages with sidebar
const CompanyLayout = ({ children }) => (
  <div className="flex">
    <CompanySidebar/>
    <div className="flex-1">{children}</div>
  </div>
);

const DeveloperLayout = ({ children }) => (
  <div className="flex">
    <DeveloperSidebar/>
    <div className="flex-1">{children}</div>
  </div>
);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>

      <ContextApi>
        <Header />

        <div className="pt-16">

          <Routes>  
            <Route path="/" element={<App />} />
            <Route path="*" element={<App />} />

            <Route path="/signup-client" element={<ClientSignUp />} />
            <Route path="/signup-user" element={<UserSignUp />} />
            <Route path="/role-selection" element={<RoleSelection />} />

            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/inbox" element={<Inbox />} /> */}
            {/* <Route path="/developer/resume" element={<ResumeUpload />} /> */}

            <Route path="/developer/personal-details/:userId" element={<PersonalDetailsForm />} />
            <Route path="/developer/experience-details/:userId" element={<JobDetailsForm />} />
            <Route path="/developer/project-details/:userId" element={<ProjectDetailsForm />} />
            <Route path="/developer/education-details/:userId" element={<EducationForm />} />
            <Route path="/developer/profile-image/:userId" element={<ProfileImageUpload />} />
            <Route path="/developer/category/:userId" element={<CategorySkillsForm />} /> 
            {/* <Route path="/developer/preview/:userId" element={<ManualFormPage />} /> */}

            {/* //new add change */}
            <Route path="/developer/portfolio/:userId" element={<DeveloperLayout><PortfolioPage/></DeveloperLayout> } />
            <Route path="/inbox" element={<DeveloperLayout><Inbox/></DeveloperLayout>}/>


            {/*  2 new pages were added for company */}
            <Route path="/company/company-details/:clientId" element={<CompanyDetailsPage />} />
            <Route path="/company/personal-details/:clientId" element={<CompanyPersonDetailsForm />} />
            <Route path="/company/profile-image/:clientId" element={<CompanyProfileImageUpload />} />
            
            <Route path="/company/portfolio/:clientId" element={<CompanyLayout> <CompanyPortfolioPage /></CompanyLayout>} />
            <Route path="/company/preview/:clientId" element={<CompanyFormPage />} />
          
            <Route path="/test" element={<Test />} />

            <Route path="/company/post-job" element={<CompanyLayout> <JobPostPage/></CompanyLayout>}/>
            <Route path="/company/dashboard" element={<CompanyLayout><CompanyDashboardPage/></CompanyLayout> }/>
            <Route path="/developer/list" element={<CompanyLayout><DevelopersListPage /></CompanyLayout> } />
            <Route path="/inbox" element={<CompanyLayout ><Inbox/></CompanyLayout>} />
            <Route path="/company/applicants" element={<CompanyLayout><ApplicantsPage/></CompanyLayout> }/>



            

          </Routes>
        </div>

        <Footer />

      </ContextApi >
    </BrowserRouter >
  </StrictMode >



);
