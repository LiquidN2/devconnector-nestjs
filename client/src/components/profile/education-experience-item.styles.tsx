import styled, { css } from 'styled-components';

import { Paragraph } from '../UI/paragraph.component';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 4rem 2rem;
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

  .col-1 {
    grid-column: 1 / 2;
  }
`;

export const Heading = styled.h5`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
`;

export const SubHeading = styled.h5`
  font-family: inherit;
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: 300;
`;

export const Location = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--color-grey);
  font-weight: 300;
  font-style: italic;
`;

export const Time = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  color: var(--color-grey);
  font-weight: 300;
  font-style: italic;
`;

export const Description = styled(Paragraph)`
  margin-top: 1rem;
  grid-column: 1 / -1;
`;

const btnIconStyles = css`
  cursor: pointer;
  border: none;
  background-color: transparent;

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }

  &:hover > svg {
    fill: var(--color-primary);
  }
`;

export const ButtonEdit = styled.button`
  ${btnIconStyles};

  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

export const ButtonDelete = styled.button`
  ${btnIconStyles};

  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
