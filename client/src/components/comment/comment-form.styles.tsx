import styled from 'styled-components';

import { ButtonPrimary } from '../UI/button.component';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BtnAddComment = styled(ButtonPrimary)`
  font-size: 1.4rem;
  align-self: end;
`;
