import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultLayout from './components/layout/default-layout.component';
import AuthPage from './pages/auth/auth-page.component';
import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';
import ProfilePage from './pages/profile/profile-page.component';
import PostsPage from './pages/posts/posts-page.component';
import ConnectionsPage from './pages/connections/connections-page.component';

// import PublicRoute from './routes/public-route.component';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* PRIVATE Access Only */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/posts" />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="connections" element={<ConnectionsPage />} />
        </Route>

        <Route path="/profile/edit" element={<DefaultLayout />}>
          <Route path="main" element={<ProfilePage />} />
          <Route path="education" element={<ProfilePage />} />
          <Route path="experience" element={<ProfilePage />} />
        </Route>

        {/* PUBLIC Access Only  */}
        <Route
          path="auth"
          element={
            // <PublicRoute>
            <AuthPage />
            // </PublicRoute>
          }
        >
          <Route index element={<Navigate to="/auth/signin" />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
