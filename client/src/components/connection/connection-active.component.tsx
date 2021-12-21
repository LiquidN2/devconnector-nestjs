import React from 'react';

import ContentBox from '../content-box/content-box.component';
import ConnectionItem from './connection-item.component';

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
      {activeConnections.map((connection, index) => (
        <ConnectionItem key={index} {...connection} />
      ))}
    </ContentBox>
  );
};

export default ConnectionActive;
