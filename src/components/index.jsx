import React, { useState } from 'react';
import { FormLogin } from './styles';

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return (
    <FormLogin>
      <label htmlFor="username">Usuário:</label>
      <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
      <br />
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
      <br />
      <button type="submit">Entrar</button>
    </FormLogin>
  );
}