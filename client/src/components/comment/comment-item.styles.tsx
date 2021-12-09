import styled from 'styled-components';

import { Paragraph } from '../UI/paragraph.component';

export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, max-content) minmax(min-content, 1fr)
    minmax(min-content, max-content);
  grid-template-rows: min-content 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
`;

export const UserPhotoContainer = styled.div`
  grid-row: 1 / span 2;
`;

export const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-darkest);
`;

export const CommentDateTime = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--color-grey-light);
  justify-self: end;
`;

export const CommentContent = styled(Paragraph)`
  font-size: 1.4rem;
  grid-column: 2 / span 2;
`;
