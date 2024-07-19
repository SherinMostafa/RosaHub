import NotFound from "../Components/NotFound";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Plants from "../Pages/Plants";

export const Pages = [
    {
        path: '/',
        element: <Home />,
        name: 'Home'
    },
    {
        path: '/Plants',
        element: <Plants />,
        name: 'Plants'
    },
    {
        path: '/About',
        element: <About />,
        name: 'About Us'
    },
    {
        path: '/Contact',
        element: <Contact />,
        name: 'Contact Us'
    },
    {
        path: '*',
        element: <NotFound />,
        name: 'NotFound'
    }
];