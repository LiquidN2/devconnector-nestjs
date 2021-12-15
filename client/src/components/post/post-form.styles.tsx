import styled from 'styled-components';

export const PostFormContainer = styled.form`
  background-color: white;
  padding: 1.8rem;
  border: 1px solid var(--color-grey-lighter);

  display: grid;
  grid-template-columns:
    minmax(min-content, max-content) 1fr minmax(min-content, max-content)
    minmax(min-content, max-content);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: center;

  & > div {
    margin-bottom: 0 !important;
  }
`;

export const BtnPhotoUpload = styled.label`
  background-color: var(--color-primary);
  color: white;
  padding: var(--button-paddings);
  justify-self: flex-end;
  cursor: pointer;
  transition: all 0.2s;

  input {
    display: none;
  }

  svg {
    fill: white;
    height: 1.6rem;
    width: 1.6rem;
  }

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
