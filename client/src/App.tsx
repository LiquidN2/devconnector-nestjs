import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './components/layout/default-layout.component';
import AuthPage from './pages/auth/auth-page.component';
import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';
import ProfilePage from './pages/profile/profile-page.component';

import './App.scss';

const HomePage: React.FC = () => <div>Home Page</div>;

// const SignUp: React.FC = () => <div>Signup</div>;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="auth" element={<AuthPage />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
