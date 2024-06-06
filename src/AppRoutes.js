import { AnimatePresence } from "framer-motion";
import React, { lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./pages/home"));
const Lobby = lazy(() => import("./pages/solutions/lobby"));
const Appointment = lazy(() => import("./pages/solutions/appointment"));
const Pricing = lazy(() => import("./pages/pricing"));
const Payroll = lazy(() => import("./pages/solutions/payroll"));
const Processing = lazy(() => import("./pages/processingPage/Processing"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Privacy = lazy(() => import("./pages/privacy"));
const Terms = lazy(() => import("./pages/terms"));
const About = lazy(() => import("./pages/about/About"));
const NotFound = lazy(() => import("./pages/notFound"));
const TawkToChat = lazy(() => import("./common/tawkto/TawkToChat"));
const TermsOfPayment = lazy(() => import("./pages/termsOfPayment"));
const Join = lazy(() => import("./pages/join/Join"));
const EPayStatus = lazy(() => import("./pages/ePayStatus-services/EPayStatus"));
const Reports = lazy(() => import("./reports/Reports"));

export default function AppRoutes() {
  return (
    <AnimatePresence>
      <ScrollToTop></ScrollToTop>
      <TawkToChat></TawkToChat>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/services" element={<Processing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/join" element={<Join />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsOfPayment" element={<TermsOfPayment />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/services-payments" element={<EPayStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </AnimatePresence>
  );
}
