
import HomeIndex from './pages/home/HomeIndex'
import { BrowserRouter, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/common/ErrorPage'
import BlogIndex from './pages/blog/BlogIndex';
import BlogSingleIndex from './pages/blog/blogSingle/BlogSingleIndex';




const routes = createRoutesFromElements(

  <>
  <Route element={<RootLayout />}>
    <Route path="/" element={<HomeIndex />} />
    <Route path="/about" element={'Data about page'} />
    <Route path="/blog" element={<BlogIndex />} />   
    <Route path="/blog/:slug" element={<BlogSingleIndex/>} />   
  </Route>
  <Route path="*" element={<ErrorPage />} />
  </>
  
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
