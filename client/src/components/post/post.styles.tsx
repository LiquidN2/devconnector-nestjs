import styled from 'styled-components';

export const PostContainer = styled.div`
  background-color: white;
  border: 1px solid var(--color-grey-lighter);
  padding: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Header = styled.div``;

export const Content = styled.div``;

export const Interaction = styled.div``;

export const Comments = styled.div``;
