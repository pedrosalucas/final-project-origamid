import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import userForm from "../../Hooks/useForm";
import { UserContext } from '../../UserContext';

const FormStyled = styled.form`
    margin-bottom: 2rem;
`;

const LinkPerdeuSenha = styled(Link)`
    display: inline-block;
    color: #666;
    padding: .5rem 0;
    line-height: 1;

    &:after {
        content: '';
        height: 2px;
        width: 100%;
        background-color: currentColor;
        display: block;
    }
`;

const DivCadastreSe = styled.div`
    margin: 4rem 0;

    h2{
        font-family: var(--type-secundary);

        &:after {
            content: '';
            display: block;
            background-color: #ddd;
            height: .5rem;
            width: 3rem;
            border-radius: .2rem;
        }
    }

    p {
        margin: 2rem 0;
    }
`;

const LoginForm = () => {
    const username = userForm();
    const password = userForm();

    const { userLogin, error, loading } = React.useContext( UserContext );

    async function handleLogin( event ) {
        event.preventDefault();
        if( username.validate() && password.validate() ) {
            userLogin( username.value, password.value );
        }
    }
    
    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>

            <FormStyled onSubmit={handleLogin}>
                <Input label="Usuário" type="text" id="username" {...username} />
                <Input label="Senha" type="password" id="password" {...password} />
                {loading ? ( <Button disabled>Entrar</Button> ) : ( <Button>Entrar</Button> )}
                <Error error={error} />
            </FormStyled>

            <LinkPerdeuSenha to="/login/perdeu">
                Perdeu a Senha?
            </LinkPerdeuSenha>

            <DivCadastreSe>
                <h2>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className="btn" to="/login/criar-conta">Cadastro</Link>
            </DivCadastreSe>
        </section>
    );
};

export default LoginForm;
