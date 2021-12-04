import styled from 'styled-components';

import Container from '../../components/UI/container.component';

export const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3rem 0;
  flex-wrap: wrap;
`;

export const Col1 = styled.div`
  flex: 0 1 20%;
`;
