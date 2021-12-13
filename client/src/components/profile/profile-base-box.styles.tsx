import styled, { css } from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: white;
  border: 1px solid var(--color-grey-lighter);
`;

export const PhotoContainer = styled.div`
  border-bottom: 1px solid var(--color-grey-lightest);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  height: 12rem;
  border-radius: 10rem;
  margin-bottom: 2rem;
`;

export const Name = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
  text-align: center;
`;

export const Status = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--color-primary);
  text-align: center;
`;

export const Location = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--color-grey-light);
  text-align: center;
`;

export const ConnectionsPostsContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

const ConnsPostsBoxStyle = css`
  padding: 2rem 0;
  width: 50%;
  border-bottom: 1px solid var(--color-grey-lightest);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid var(--color-grey-lightest);
  }
`;

const ConnsPostsCountStyle = css`
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--color-grey-darkest);
`;

const ConnsPostsTextStyle = css`
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-grey-light);
`;

export const ConnectionsBox = styled.div`
  ${ConnsPostsBoxStyle};
`;

export const PostsBox = styled.div`
  ${ConnsPostsBoxStyle};
`;

export const ConnectionsCount = styled.p`
  ${ConnsPostsCountStyle};
`;

export const PostsCount = styled.p`
  ${ConnsPostsCountStyle};
`;

export const ConnectionsText = styled.p`
  ${ConnsPostsTextStyle};
`;

export const PostsText = styled.p`
  ${ConnsPostsTextStyle};
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 3rem;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  color: var(--color-grey);

  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 300;

  transition: color 0.2s;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    color: var(--color-primary);
  }
`;
