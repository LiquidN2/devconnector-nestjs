import React from 'react';

import ContentBox from '../content-box/content-box.component';
import ConnectionItemActive from './connection-item-active.component';

import { useConnections } from '../../hooks/useConnections';

interface ConnectionActiveProps {
  userId?: string;
}

const ConnectionActive: React.FC<ConnectionActiveProps> = ({ userId = '' }) => {
  const { data } = useConnections(userId);

  const activeConnections = data
    ? data.filter(connection => connection.connectionStatus === 'active')
    : [];

  return (
    <ContentBox
      heading="Connections"
      subHeading={`${activeConnections.length} connection(s)`}
    >
      {activeConnections.map(
        (
          {
            _id,
            userId,
            name,
            email,
            avatar,
            profileStatus,
            company,
            location,
          },
          index,
        ) => (
          <ConnectionItemActive
            key={index}
            userId={userId}
            name={name}
            avatar={avatar}
            profileStatus={profileStatus}
            company={company}
            location={location}
            email={email}
            connectionId={_id}
          />
        ),
      )}
    </ContentBox>
  );
};

export default ConnectionActive;
