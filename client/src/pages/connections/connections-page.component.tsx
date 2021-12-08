import React from 'react';
import { Helmet } from 'react-helmet';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import ConnectionPending from '../../components/connection/connection-pending.component';
import ConnectionActive from '../../components/connection/connection-active.component';

import {
  ColLeft,
  ContentContainer,
  ColRightSpan,
} from '../../components/layout/content-layout.styles';

const ConnectionsPage: React.FC = () => {
  return (
    <ContentContainer>
      <Helmet>
        <title>DevConnector | Connections</title>
      </Helmet>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        <ConnectionPending />
        <ConnectionActive />
      </ColRightSpan>
    </ContentContainer>
  );
};

export default ConnectionsPage;
