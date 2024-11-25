import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/common/Navbar';
import PrivateRoute from './routes/PrivateRoute';
import AdminRoute from './routes/AdminRoute';
import ModeratorRoute from './routes/ModeratorRoute';
import { setUser } from './features/auth/authSlice';
import { getCurrentUser } from './api/auth.api';
import Loading from './components/common/Loading';

// Lazy-loaded Pages
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ProfilePage = lazy(() => import('./pages/Profile'));
const UsersPage = lazy(() => import('./pages/users/UsersPage'));
const NotFound = lazy(() => import('./pages/404'));
const Unauthorized = lazy(() => import('./pages/403'));

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getCurrentUser();
        dispatch(setUser(data));
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (!isAuthenticated) {
      fetchUser();
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/403" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />

          {/* Private Routes */}
          <Route
            path="/"
            element={<PrivateRoute component={<DashboardPage />} />}
          />
          <Route
            path="/articles"
            element={<PrivateRoute component={<ArticlesPage />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute component={<ProfilePage />} />}
          />

          {/* Admin-only Route */}
          <Route
            path="/users"
            element={<AdminRoute component={<UsersPage />} />}
          />

          {/* Moderator-only Route */}
          <Route
            path="/moderator-area"
            element={<ModeratorRoute component={<DashboardPage />} />}
          />

          {/* Fallback to Dashboard if no other matches */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
