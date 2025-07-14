import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App.tsx";
import "./index.css";
import Auth from "@/Pages/Auth";
import ListOfCompanyAndJobs from "@/Pages/ListOfCompanyAndjobs";
import Navbar from "@/Navbar.tsx";
import JobApplyPage from "@/Pages/JobApplyPage";
import CompanyPofilePage from "@/Pages/CompanyProfilePage";
import CandidateFillUpPage from "@/Pages/CandidateFillUpPage";
import TalentFilterPage from "@/Pages/TalentFilterPage";
import Footer from "@/Footer";
import AboutUs from "@/Pages/AboutUs";
import HowItWorks from "./Pages/HowItWorks";
import Test from "@/Test";
import SignUpOptionPage from "./Pages/AccountOptionPage";
import SignUpPage from "./Pages/SignUpPage";
import FindWorkPage from "./Pages/FindWorkPage";
// import Home from "@/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/test" element={<Test />} />
        <Route path="/signup-options" element={<SignUpOptionPage />} />
        <Route path="/list" element={<ListOfCompanyAndJobs />} />
        <Route path="/job-apply" element={<JobApplyPage />} />
        <Route path="/company-page" element={<CompanyPofilePage />} />
        <Route path="/candidate-fillup" element={<CandidateFillUpPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/find" element={<TalentFilterPage />} />
        <Route path="/signup-page" element={<SignUpPage />} />
        <Route path="/find-work" element={<FindWorkPage />} />

        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
