import './App.css';
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import React, { useEffect } from 'react';
import Theme from './utilities/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <ContactMe />
      }
    ]
  }
]);

const theme = Theme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about")
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
        <Contact />
      </main>
    </>
  )
}

export default App;
