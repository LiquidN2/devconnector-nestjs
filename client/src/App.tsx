import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultLayout from './components/layout/default-layout.component';
import AuthPage from './pages/auth/auth-page.component';
import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';
import ProfilePage from './pages/profile/profile-page.component';
import PostsPage from './pages/posts/posts-page.component';
import ConnectionsPage from './pages/connections/connections-page.component';

import ProfileEdit from './pages/profile/profile-edit.component';

import PrivateRoute from './routes/private-route.component';
import PublicRoute from './routes/public-route.component';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* PRIVATE Access Only */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DefaultLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="/posts" />} />
          <Route
            path="profile/edit/main"
            element={<ProfileEdit section="main" />}
          />
          <Route
            path="profile/edit/experience"
            element={<ProfileEdit section="experience" />}
          />
          <Route
            path="profile/edit/education"
            element={<ProfileEdit section="education" />}
          />
          <Route
            path="profile/edit/*"
            element={<Navigate to="/profile/edit/main" />}
          />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="connections" element={<ConnectionsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        {/* PUBLIC Access Only  */}
        <Route
          path="auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
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
