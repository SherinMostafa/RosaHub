import NotFound from "../Components/NotFound";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Plants from "../Pages/Plants";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

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
        path: '/Register',
        element: <Register />,
        name: 'Register'
    },
    {
        path: '/Login',
        element: <Login />,
        name: 'Login'
    },
    {
        path: '*',
        element: <NotFound />,
        name: 'NotFound'
    }
];

export const Plant = [
    {
        name: 'Jasmine',
        image: '/Assets/Images/jasmine.jpg',
        description: 'Jasmine is an aromatic plant that thrives in warm climates. It has a beautiful fragrance and is used in perfumes. It also has remarkable properties such as jasmine tea.',
        category: 'Aromatic Plants'
    },
    {
        name: 'Jasmine',
        image: '/Assets/Images/jasmine.jpg',
        description: 'Jasmine is an aromatic plant that thrives in warm climates. It has a beautiful fragrance and is used in perfumes. It also has remarkable properties such as jasmine tea.',
        category: 'Aromatic Plants'
    },
    {
        name: 'Jasmine',
        image: '/Assets/Images/jasmine.jpg',
        description: 'Jasmine is an aromatic plant that thrives in warm climates. It has a beautiful fragrance and is used in perfumes. It also has remarkable properties such as jasmine tea.',
        category: 'Ornamental Plants'
    }
];

export const Category = ['Aromatic Plants', 'Herbaceous Plants', 'Ornamental Plants'];