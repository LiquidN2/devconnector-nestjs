import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 3rem;
`;

export const FormError = styled.p`
  color: orangered;
  text-align: center;
  font-size: 1.2rem;
`;

export const SpinnerContainer = styled.div`
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
