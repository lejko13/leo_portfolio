import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LangProvider } from './lib/LangContext';
import Home from './pages/Home';
import { lazy, Suspense } from 'react';

// Sub-pages load on demand – the home page ships less JavaScript
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRoutes = () => {

 
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/sluzby/:id" element={<ServiceDetail />} />
      <Route path="/:id" element={<ProjectDetail />} />

    </Routes>
    </Suspense>
  );
};


function App() {

  return (

      <LangProvider>
          <Router>
            <ScrollToTop />
            <AppRoutes />
          </Router>
          <Toaster />
      </LangProvider>
    
  )
}

export default App