import '../styles/Navbar.css'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const isLogged = localStorage.getItem('isLogged')
    const email = localStorage.getItem('email')


    const [isLogIn, setLogIn] = useState(isLogged !== null);

    const location = useLocation();
    
    console.log(isLogged) 
    console.log(email)
    console.log(isLogIn)


    const handleLogout = () => {
        localStorage.removeItem('isLogged');
        localStorage.removeItem('email');
        setLogIn(false)
    }

    useEffect(() => {
        setLogIn(isLogged !== null);
    }, [location.pathname]); 


    return(
        <nav>
            <ul className='navbarMenu'>
                <li><img src="" alt="logo"/></li>
                {/* <li><h1>Titre</h1></li> */}
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/cart'>Panier</Link></li>
                {
                    !isLogIn ? (<li><Link to='/login'>Se connecter</Link></li>) :
                    (
                        <>
                            <li>Salut { email } !</li>
                            <li><button onClick={handleLogout}>Se déconnecter</button></li>
                        </>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar;