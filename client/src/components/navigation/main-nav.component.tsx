import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MainNavContainer, MainNavLink } from './main-nav.styles';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCurrentRoutes } from '../../redux/routes/routes.selector';
import { useActions } from '../../hooks/useActions';
import { RouteSet } from '../../redux/routes';

export const MainNav: React.FC = () => {
  const routes = useAppSelector(selectCurrentRoutes);
  const { setRoutes } = useActions();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/profile/edit')) {
      setRoutes(RouteSet.ProfileEdit);
    } else {
      setRoutes(RouteSet.Default);
    }
  }, [location.pathname]);

  return (
    <MainNavContainer>
      {routes.map((route, index) => (
        <MainNavLink key={index} to={route.url}>
          {route.label}
        </MainNavLink>
      ))}
    </MainNavContainer>
  );
};

export default MainNav;
