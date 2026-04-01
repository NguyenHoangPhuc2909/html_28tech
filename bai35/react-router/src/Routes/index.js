import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../Layout/LayoutDefault";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogDetails from "../pages/Blog/BlogDetails";
import BlogNews from "../pages/Blog/BlogNews";
import BlogRelated from "../pages/Blog/BlogRelated";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import InfoUser from "../pages/InfoUser";
import Login from "../pages/Login";

const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "blog",
                element: <Blog />,
                children: [
                    {
                        index: true,
                        element: <BlogAll />
                    },
                    {
                        path: "news",
                        element: <BlogNews />
                    },
                    {
                        path: ":id",
                        element: <BlogDetails />
                    },
                    {
                        path: "related",
                        element: <BlogRelated />
                    },
                ]
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Error404 />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "info-user",
                        element: <InfoUser />
                    }
                ]
            }
        ]
    }
];

export default routes;

/* <Routes>
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
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<PrivateRoutes />}>
            <Route path="info-user" element={<InfoUser />} />
          </Route>
        </Route>
      </Routes> */
