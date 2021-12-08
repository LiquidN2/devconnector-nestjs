import React, { MouseEventHandler, useState } from 'react';
import IconElipsisH from '../icons/icon-elipsis-h.component';

import Avatar from '../avatar/avatar.component';

import {
  HeaderContainer,
  UserContainer,
  UserDescription,
  UserName,
  UserTitle,
  MenuAndTimeContainer,
  PostTime,
  PostMenuButton,
  ArrowUp,
  DropDownMenu,
  DropDownMenuBtn,
} from './post-header.styles';

const MenuButton: React.FC<{
  onClick: MouseEventHandler<HTMLElement>;
}> = ({ onClick }) => {
  return (
    <PostMenuButton onClick={onClick}>
      <IconElipsisH />
    </PostMenuButton>
  );
};

const PostHeader: React.FC = () => {
  const [dropDownHidden, setDropDownHidden] = useState(true);

  const toggleDropDownHidden: MouseEventHandler<HTMLElement> = () => {
    setDropDownHidden(!dropDownHidden);
  };

  return (
    <HeaderContainer>
      <UserContainer>
        <Avatar src="/img/users/user-4.jpg" />
        <UserDescription>
          <UserName>John Doe</UserName>
          <UserTitle>Developer</UserTitle>
        </UserDescription>
      </UserContainer>

      <MenuAndTimeContainer>
        <PostTime>2 hours ago</PostTime>
        <MenuButton onClick={toggleDropDownHidden} />
        {!dropDownHidden ? (
          <DropDownMenu>
            <ArrowUp />
            <DropDownMenuBtn>Edit</DropDownMenuBtn>
            <DropDownMenuBtn>Delete</DropDownMenuBtn>
          </DropDownMenu>
        ) : (
          <div style={{ position: 'absolute', right: '0', top: '3.3rem' }} />
        )}
      </MenuAndTimeContainer>
    </HeaderContainer>
  );
};

export default PostHeader;
