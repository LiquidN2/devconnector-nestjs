import styled from 'styled-components';

export const Count = styled.span`
  color: var(--color-grey);
  transition: color 0.2s;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;

    svg {
      fill: var(--color-primary);
    }

    ${Count} {
      color: var(--color-primary);
    }
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
    margin-right: 0.2rem;
  }
`;
