import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthPage from './pages/auth/auth-page.component';
import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';

import './App.scss';

const HomePage: React.FC = () => <div>Home Page</div>;

// const SignUp: React.FC = () => <div>Signup</div>;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
