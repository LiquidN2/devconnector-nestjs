import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { MainNavContainer, MainNavLink } from './main-nav.styles';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCurrentRoutes } from '../../redux/routes/routes.selector';
import { useActions } from '../../hooks/useActions';
import { RouteSet } from '../../redux/routes';

export const MainNav: React.FC = () => {
  const routes = useAppSelector(selectCurrentRoutes);
  const { setRoutes } = useActions();

  const location = useLocation();
  const { pathname } = location;
  const params = useParams();

  useEffect(() => {
    if (pathname.startsWith('/users')) {
      console.log(params.userId);
      const { userId } = params;
      if (!userId) return;
      setRoutes({ routeSet: RouteSet.Visit, userId });
      return;
    }

    if (pathname.startsWith('/profile/edit')) {
      setRoutes({ routeSet: RouteSet.ProfileEdit });
      return;
    }

    if (pathname.startsWith('/searches')) {
      setRoutes({ routeSet: RouteSet.Search });
      return;
    }

    setRoutes({ routeSet: RouteSet.Default });
  }, [pathname]);

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
