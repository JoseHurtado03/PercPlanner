import { createBrowserRouter } from "react-router-dom";
import LogIn from './pages/LogIn.jsx';
import SignIn from './pages/SignIn.jsx';
import HomePage from './pages/HomePage.jsx';
import Repertoire from './pages/Repertoire.jsx'
import Profile from './pages/Profile.jsx'
import Admin from './pages/Admin.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn />
    },
    {
        path: "/signIn",
        element: <SignIn />
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
    },
    {
        path: "/admin",
        element: <Admin />
    }
])