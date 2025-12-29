import React, { useEffect } from 'react';
import { 
  createHashRouter, 
  RouterProvider, 
  Outlet, 
  useLocation,
  Navigate
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Root = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Outlet />
    </Layout>
  );
};

const ErrorBoundary = () => (
  <Layout>
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-black mb-4">Page Not Found</h1>
      <p className="text-slate-500 mb-8 font-medium">The link you followed might be broken, or the page may have moved.</p>
      <Navigate to="/" replace />
    </div>
  </Layout>
);

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "privacy", element: <PrivacyPolicy /> },
        { path: "terms", element: <TermsOfService /> },
        { path: "*", element: <Navigate to="/" replace /> }
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <RouterProvider 
        router={router} 
        future={{
          v7_startTransition: true,
        }}
      />
    </HelmetProvider>
  );
};

export default App;