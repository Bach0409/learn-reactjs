import Login from '../Pages/Login/index';

const publicRouter = [
    {
        path: "/",
        element: Login,
    },
    {
        path: "login",
        element: Login,
    },
    {
        path: "*",
        element: Login,
    }

];

export default publicRouter;
