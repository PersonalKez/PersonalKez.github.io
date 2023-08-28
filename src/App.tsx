import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import React from 'react';

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
        path: "/skills",
        element: <Skills />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main> 
      <Outlet />
      <Testimonials />
      <Contact />
    </main>
    </>
  )
}

export default App;
