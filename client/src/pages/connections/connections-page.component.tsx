import React from 'react';
import { Helmet } from 'react-helmet';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import ConnectionPending from '../../components/connection/connection-pending.component';
import ConnectionActive from '../../components/connection/connection-active.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

import {
  ColLeft,
  ContentContainer,
  ColRightSpan,
  SpinnerContainer,
} from '../../components/layout/content-layout.styles';

import { useConnections } from '../../hooks/useConnections';

interface ConnectionsPageProps {
  userId?: string;
}

const ConnectionsPage: React.FC<ConnectionsPageProps> = ({ userId = '' }) => {
  const { isLoading, isFetching } = useConnections(userId);

  return (
    <ContentContainer>
      <Helmet>
        <title>DevConnector | Connections</title>
      </Helmet>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        {(isLoading || isFetching) && (
          <SpinnerContainer>
            <LoadingSpinner />
          </SpinnerContainer>
        )}
        <ConnectionPending />
        <ConnectionActive />
      </ColRightSpan>
    </ContentContainer>
  );
};

export default ConnectionsPage;
