import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App.tsx";
import "./index.css";
import Auth from "@/Auth.tsx";
import ListOfCompanyAndJobs from "@/ListOfCompanyAndjobs.tsx";
import Navbar from "@/Navbar.tsx";
import JobApplyPage from "@/JobApplyPage.tsx";
import CompanyPofilePage from "@/CompanyProfilePage.tsx";
import CandidateFillUpPage from "@/CandidateFillUpPage.tsx";
import TalentFilterPage from "@/TalentFilterPage.tsx";
// import Home from "@/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/list" element={<ListOfCompanyAndJobs />} />
        <Route path="/job-apply" element={<JobApplyPage />} />
        <Route path="/company-page" element={<CompanyPofilePage />} />
        <Route path="/candidate-fillup" element={<CandidateFillUpPage />} />
        <Route path="/find" element={<TalentFilterPage />} />

        <Route path="*" element={<App />} />
      </Routes>{" "}
    </BrowserRouter>
  </StrictMode>
);
