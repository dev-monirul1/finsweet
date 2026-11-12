import { useState } from 'react'
import HomeIndex from './pages/home/HomeIndex'
import { BrowserRouter, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './components/layouts/RootLayout'




const routes = createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomeIndex />} />
    <Route path="/about" element={'Data about page'} />
    <Route path="/blog" element={'Data blog page'} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
