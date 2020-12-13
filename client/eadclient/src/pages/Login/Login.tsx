
import React from 'react';
import { DefaultButton, TextField, Label } from '@fluentui/react';
import Logo from '../../assets/logo.png'
import './styles.css';
import '../../../src/index.css'

export default function Login() {
    return (
        <div className="loginContainer">
            <div className="loginForm">
                <img src={Logo} alt="Logo" className="Logo" />
                <TextField label="E-mail" />
                <TextField label="Senha" type="password" canRevealPassword />
                <Label>Ainda não tem uma conta? Cadastre-se <a href="#"> aqui </a> </Label>
                <Label>Esqueceu sua senha? Recupere <a href="#"> aqui </a> </Label>
                <DefaultButton text="Login" />
            </div>
        </div>
    )
}





