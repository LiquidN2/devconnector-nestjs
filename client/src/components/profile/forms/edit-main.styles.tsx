import styled from 'styled-components';

import FormInput from '../../form/form-input.component';

export const EditMainContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
`;

export const ButtonsGroup = styled.div`
  grid-column: 1 / -1;
  margin-top: 1rem;

  display: flex;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`;
