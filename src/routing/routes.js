import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import CreateAccount from './CreateAccount';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage />},
            { path: 'cart', element: <CartPage />},
            { path: 'login', element: <LoginPage />},
            { path: 'createAccount', element: <CreateAccount />},
        ]
    }
    
]);

export default router;