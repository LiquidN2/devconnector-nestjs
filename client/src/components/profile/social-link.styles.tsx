import styled from 'styled-components';

export const StyledSocialLink = styled.a`
  text-decoration: none;
  color: var(--color-grey);

  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 300;

  transition: color 0.2s;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    color: var(--color-primary);

    svg {
      fill: var(--color-primary);
    }
  }

  span {
    margin-left: 1rem;
  }
`;
