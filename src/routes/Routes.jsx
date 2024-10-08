import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />,
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=30')
            },
            {
                path: '/blog/:id',
                element: <Blog />,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />
            },
        ]
    }
])
