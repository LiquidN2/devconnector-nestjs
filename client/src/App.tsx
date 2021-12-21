import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import DefaultLayout from './components/layout/default-layout.component';
import AuthPage from './pages/auth/auth-page.component';
import SignIn from './components/signin/signin.component';
import SignUp from './components/signup/signup.component';
import PostsPage from './pages/posts/posts-page.component';
import ConnectionsPage from './pages/connections/connections-page.component';
import ProfilePage from './pages/profile/profile-page.component';
import SearchPage from './pages/search/search-page.component';

import ProfileEdit from './pages/profile/profile-edit.component';

import PrivateRoute from './routes/private-route.component';
import PublicRoute from './routes/public-route.component';

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
          {/* INDEX */}
          <Route index element={<Navigate to="/posts" />} />

          {/* PROFILE */}
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

          {/* SEARCHES */}
          <Route path="searches" element={<SearchPage />} />

          {/* POSTS */}
          <Route path="posts" element={<PostsPage />} />

          {/* CONNECTIONS */}
          <Route path="connections" element={<ConnectionsPage />} />

          {/* WILDCARDS */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>

        <Route
          path="users/:userId"
          element={
            <PrivateRoute>
              <DefaultLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<ProfilePage />} />
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
