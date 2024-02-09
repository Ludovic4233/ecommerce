import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import '../styles/LoginPage.css'

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const navigate = useNavigate();


    const onSubmit = async (data) => {
        //console.log(data)
        try{
            const response = await fetch('https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }) 

            if (!response.ok) {
                throw new Error('Identifiants incorrects');
            }
            
            // responseData = token
            const responseData = await response.json();

            console.log(responseData);

            const isLogged = true

        
            localStorage.setItem('isLogged', `${isLogged}`);
            localStorage.setItem('email', `${data.email}`);
        

            // navigate('/' + encodeURIComponent(data.email));
            navigate('/');

        } catch (error) {
            console.error('Erreur lors de la connexion:', error.message);
        }
    }    
    

    return(
        <>
            <h1>connexion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" {...register('email', {required: 'L\'email est requis'})} />
                    {errors.email && <p className='error-message'>{errors.email.message}</p>}
                </div>
                <div>
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" {...register('password', {required: 'Le mot de passe est requis'})} />
                    {errors.password && <p className='error-message'>{errors.password.message}</p>}
                </div>
                <button>Entrer</button>
            </form>
        </>
    )
}

export default LoginPage