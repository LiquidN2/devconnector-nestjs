import styled from 'styled-components';

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding-top: 2rem;
  border-top: 1px solid var(--color-grey-lightest);

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ViewMoreComments = styled.button`
  align-self: center;

  display: inline-block;
  font-size: 1.4rem;
  color: var(--color-grey-light);

  background-color: transparent;
  border: none;

  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--color-grey-light);

  transition: all 0.2s;

  :hover {
    cursor: pointer;
    color: var(--color-primary);
    border-bottom: 1px solid var(--color-primary);
  }
`;
