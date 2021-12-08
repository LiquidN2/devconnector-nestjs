import styled from 'styled-components';

export const BoxContainer = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-lighter);
  padding: 2.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const BoxHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-grey-lighter);
`;

export const BoxHeading = styled.h3`
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
`;

export const BoxSubHeading = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-primary);
`;
