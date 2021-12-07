import React, { MouseEventHandler } from 'react';
import styled, { css, StyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';

import IconEdit from '../icons/icon-edit.component';
import IconSave from '../icons/icon-save.component';
import IconPlus from '../icons/icon-plus.component';
import IconReply from '../icons/icon-reply.component';

const baseStyles = css`
  background-color: var(--color-grey-lightest);
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  padding: var(--button-paddings);
  transition: background-color 0.2s;
  cursor: pointer;
  color: var(--color-grey-dark);
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--color-grey-lighter);
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const primaryTheme = css`
  background-color: var(--color-primary);
  color: white;

  &:hover {
    background-color: var(--color-primary-dark);
  }

  svg {
    fill: white;
  }
`;

export const Button = styled.button`
  ${baseStyles}
`;

export const ButtonPrimary = styled(Button)`
  ${primaryTheme}
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;

  ${baseStyles}
`;

export const ButtonLinkPrimary = styled(ButtonLink)`
  ${primaryTheme}
`;

const withIcon = (
  Icon: StyledComponent<any, any>,
  Btn: StyledComponent<any, any>,
): React.FC<{
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> => {
  return ({ children, to, onClick, ...props }) => {
    return to ? (
      <Btn to={to} {...props}>
        <Icon />
        {children}
      </Btn>
    ) : (
      <Btn onClick={onClick} {...props}>
        <Icon />
        {children}
      </Btn>
    );
  };
};

export const BtnLinkEditPrimary = withIcon(IconEdit, ButtonLinkPrimary);
export const BtnSavePrimary = withIcon(IconSave, ButtonPrimary);
export const BtnAddPrimary = withIcon(IconPlus, ButtonPrimary);
export const BtnLinkGoBack = withIcon(IconReply, ButtonLink);
