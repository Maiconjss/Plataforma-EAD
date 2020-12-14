
import React from 'react';
import { DefaultButton, TextField, Label } from '@fluentui/react';
import Logo from '../../assets/logo.png'
import './styles.css';
import '../../../src/index.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Register() {
    return (
        <div className="loginContainer">
            <div className="loginForm">
                <img src={Logo} alt="Logo" className="Logo" />
                <Link to="/Login">
                    <Label>RETORNAR PARA LOGIN</Label>
                </Link>
            </div>
        </div>
    )
}





