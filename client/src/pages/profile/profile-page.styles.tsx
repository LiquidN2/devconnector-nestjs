import styled, { css } from 'styled-components';

import Container from '../../components/UI/container.component';
import {
  ButtonPrimary,
  ButtonLinkPrimary,
} from '../../components/UI/button.component';

export const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 0;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

const SpacingBetweenBoxes = css`
  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const SmallColWidth = css`
  flex: 0 0 20%;
`;

export const ColLeft = styled.div`
  ${SmallColWidth};
  ${SpacingBetweenBoxes};
`;

export const ColRight = styled.div`
  ${SmallColWidth};
  ${SpacingBetweenBoxes};
`;

export const ColMiddle = styled.div`
  flex-grow: 1;

  ${SpacingBetweenBoxes};
`;

export const ColRightSpan = ColMiddle;

export const EditProfileBtn = styled(ButtonLinkPrimary)`
  width: 100%;
`;
