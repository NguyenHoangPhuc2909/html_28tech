import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import LayoutDefault from "./Layout/LayoutDefault";
import Blog from "./pages/Blog";
import BlogNews from "./pages/Blog/BlogNews";
import BlogRelated from "./pages/Blog/BlogRelated";
import BlogAll from "./pages/Blog/BlogAll";
import BlogDetails from "./pages/Blog/BlogDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} >
            <Route index element={<BlogAll />} />
            <Route path="news" element={<BlogNews />} />
            <Route path=":id" element={<BlogDetails />} />
            <Route path="related" element={<BlogRelated />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
