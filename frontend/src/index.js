import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Login from './pages/Login.js';
import Menu from "./pages/Menu.js";
import Newproduct from './pages/Newproduct.js';
import Signup from './pages/Signup.js';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<Newproduct />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
