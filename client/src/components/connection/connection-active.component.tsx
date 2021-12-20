import React from 'react';

import ConnectionBox from './connection-box.component';
import ConnectionItem from './connection-item.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import { useConnections } from '../../hooks/useConnections';

interface ConnectionActive {
  userId?: string;
}

const ConnectionActive: React.FC<ConnectionActive> = ({ userId = '' }) => {
  const { data } = useConnections(userId);

  const activeConnections = data
    ? data.filter(connection => connection.connectionStatus === 'active')
    : [];

  return (
    <ConnectionBox
      heading="Connections"
      subHeading={`${activeConnections.length} connection(s)`}
    >
      {activeConnections.map((connection, index) => (
        <ConnectionItem key={index} {...connection} />
      ))}
    </ConnectionBox>
  );
};

export default ConnectionActive;
