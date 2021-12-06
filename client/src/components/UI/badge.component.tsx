import styled from 'styled-components';

export const Badge = styled.span`
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
