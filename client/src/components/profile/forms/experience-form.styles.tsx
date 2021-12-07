import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;
