import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MainNavContainer, MainNavLink } from './main-nav.styles';

const DEFAULT_NAV_LINKS = [
  {
    url: '/posts',
    label: 'Posts',
  },
  {
    url: '/profile',
    label: 'Profile',
  },
  {
    url: '/connections',
    label: 'Connections',
  },
];

export const MainNav: React.FC = () => {
  const [links, setLinks] = useState(DEFAULT_NAV_LINKS);

  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.pathname.startsWith('/profile/edit')) {
      setLinks([
        {
          url: '/profile/edit/main',
          label: 'Main Profile',
        },
        {
          url: '/profile/edit/experience',
          label: 'Experience',
        },
        {
          url: '/profile/edit/education',
          label: 'Education',
        },
      ]);
    } else {
      setLinks(DEFAULT_NAV_LINKS);
    }
  }, [location.pathname]);

  return (
    <MainNavContainer>
      {links.map((link, index) => (
        <MainNavLink key={index} to={link.url}>
          {link.label}
        </MainNavLink>
      ))}
    </MainNavContainer>
  );
};

export default MainNav;
