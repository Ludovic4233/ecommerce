import { useForm } from 'react-hook-form';
import '../styles/LoginPage.css'

const CreateAccount = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <h1>Création nouveau compte</h1>
            <form onSubmit={handleSubmit()}>
                <div>
                    <label for="firstname">Prénom</label>
                    <input type="text" id="firstname" {...register('firstname', {required: 'Le prénom est requis'})} />
                    {errors.firstname && <p className='error-message'>{errors.firstname.message}</p>}
                </div>
                <div>
                    <label for="lastname">Nom</label>
                    <input type="text" id="lastname" {...register('lastname', {required: 'Le nom est requis'})} />
                    {errors.lastname && <p className='error-message'>{errors.lastname.message}</p>}
                </div>
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
                <div>
                    <label for="age">Age</label>
                    <input type="number" id="age" {...register('age', {required: 'L\'age est requis', min: {value: 18, message: 'L\'âge doit être supérieur à 18',}})} />
                    {errors.age && <p className='error-message'>{errors.age.message}</p>}
                </div>
                
                <button>Entrer</button>
            </form>
        </>
    )
}

export default CreateAccount