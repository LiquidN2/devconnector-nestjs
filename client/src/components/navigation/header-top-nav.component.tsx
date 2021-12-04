import React from 'react';

import IconUser from '../icons/icon-user.component';
import IconChat from '../icons/icon-chat.component';
import IconAlert from '../icons/icon-alert.component';
import UserNav from './user-nav.component';

import {
  HeaderTopNavContainer,
  HeaderTopNavBtn,
  IconNotification,
} from './header-top-nav.styles';

const HeaderTopNav: React.FC = () => {
  return (
    <HeaderTopNavContainer>
      <HeaderTopNavBtn onClick={e => console.log('go to connections')}>
        <IconUser />
        <IconNotification />
      </HeaderTopNavBtn>
      <HeaderTopNavBtn>
        <IconChat />
        <IconNotification />
      </HeaderTopNavBtn>
      <HeaderTopNavBtn>
        <IconAlert />
        <IconNotification />
      </HeaderTopNavBtn>
      <UserNav />
    </HeaderTopNavContainer>
  );
};

export default HeaderTopNav;
