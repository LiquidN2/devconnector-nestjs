import styled from 'styled-components';

export const SignUpContainer = styled.div``;

export const SignUpHeading = styled.h1`
  color: var(--color-grey-darkest);
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
`;

export const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  & > * {
    width: 45%;
  }
`;

export const FormError = styled.p`
  font-size: 1.5rem;
  color: orangered;
  text-align: center;
  margin-top: 3rem;
`;
