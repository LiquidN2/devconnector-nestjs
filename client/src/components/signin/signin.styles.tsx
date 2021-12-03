import styled from 'styled-components';

export const SignInContainer = styled.div``;

export const SignInHeading = styled.h1`
  color: var(--color-grey-darkest);
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
`;

export const SignInFormContainer = styled.form`
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
