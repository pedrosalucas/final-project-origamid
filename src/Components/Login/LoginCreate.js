import React from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../UserContext';


const LoginCreate = () => {
    const username = useForm();
    const password = useForm();
    const email = useForm('email');

    const { userLogin } = React.useContext(UserContext);
    
    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({ 
            username: username.value,
            email: email.value,
            password: password.value
        });
        const response = await fetch( url, options );
        if( response.ok ) {
            userLogin( username.value, password.value );
        }
    }
    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" label="Usuário" id="username" {...username} />
                <Input type="email" label="Email" id="email" {...email} />
                <Input type="password" label="Senha" id="password" {...password} />
                <Button>Cadastrar</Button>
            </form>
        </section>
    );
};

export default LoginCreate;