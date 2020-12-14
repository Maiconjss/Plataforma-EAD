
import React from 'react';
import { DefaultButton, TextField, Label } from '@fluentui/react';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import './styles.css';
import '../../../src/index.css'

export default function Login() {
    return (
 
        <div className="loginContainer">
            <div className="loginForm">

                <img src={Logo} alt="Logo" className="Logo" />

                <TextField 
                   label="E-mail" 
                   type="email"
                   placeholder="Seu e-mail" 
                />

                <TextField 
                  label="Senha" 
                  type="password" 
                  placeholder="Sua senha" 
                  canRevealPassword
                />

                <Link to="/Register">
                    <Label>Não tem uma conta? cadastre-se</Label>
                </Link>

                <Label>Esqueceu sua senha? Recupere aqui </Label>

                <DefaultButton 
                  text="Login" 
                />

            </div>
        </div>
     
    )
}





