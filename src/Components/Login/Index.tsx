import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Container, Forms } from './styles';
import LoginForm from './LoginForm/Index';

const Login: React.FC = () => {
  return (
    <Container>
      <Forms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Forms>
    </Container>
  )
}

export default Login;
