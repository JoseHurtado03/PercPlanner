import { createBrowserRouter } from "react-router-dom";
import LogIn from './pages/LogIn.jsx';
import HomePage from './pages/HomePage.jsx';
import Repertoire from './pages/Repertoire.jsx'
import Profile from './pages/Profile.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />
    },
    {
        path: "/homePage",
        element: <HomePage />
    },
    {
        path: "/repertoire",
        element: <Repertoire />
    },
    {
        path: "/profile",
        element: <Profile />
    }
])