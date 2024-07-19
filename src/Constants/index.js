import NotFound from "../Components/NotFound";
import About from "../Pages/About";
import Home from "../Pages/Home";

export const Pages = [
    {
        path: '/',
        element: <Home />,
        name: 'Home'
    },
    {
        path: '/About',
        element: <About />,
        name: 'About'
    },
    // {
    //     path: '/contact',
    //     element: <Contact />,
    //     name: 'Contact'
    // },
    {
        path: '*',
        element: <NotFound />,
        name: 'NotFound'
    }
];