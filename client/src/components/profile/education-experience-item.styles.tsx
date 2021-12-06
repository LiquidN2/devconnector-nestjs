import styled from 'styled-components';

import { Paragraph } from '../UI/paragraph.component';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-row-gap: 0.5rem;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  svg {
    height: 1.3rem;
    width: 1.3rem;
    fill: var(--color-grey);
  }
`;

export const Heading = styled.h5`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
  //margin-bottom: 0.5rem;
`;

export const SubHeading = styled.h5`
  font-family: inherit;
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: 300;
  //margin-bottom: 0.5rem;
`;

export const Location = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--color-grey);
  font-weight: 300;
  //margin-bottom: 0.5rem;
  font-style: italic;
`;

export const Time = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--color-grey);
  font-weight: 300;
  //margin-bottom: 0.5rem;
  font-style: italic;
`;

export const Description = styled(Paragraph)`
  margin-top: 1rem;
  grid-column: 1 / -1;
`;
