import React from 'react';

import ContentBox from '../content-box/content-box.component';
import ConnectionItem from './connection-item.component';

import { useConnections } from '../../hooks/useConnections';

interface ConnectionPendingProps {
  userId?: string;
}

const ConnectionPending: React.FC<ConnectionPendingProps> = ({
  userId = '',
}) => {
  const { data } = useConnections(userId);

  const pendingConnections = data
    ? data.filter(
        connection =>
          connection.connectionStatus === 'pending' &&
          connection.as === 'requester',
      )
    : [];

  const numberOfPendingConnections = pendingConnections.length;

  return numberOfPendingConnections !== 0 ? (
    <ContentBox
      heading="Pending Connection Request"
      subHeading={`${numberOfPendingConnections} request(s)`}
    >
      {pendingConnections.map((connection, index) => (
        <ConnectionItem key={index} type="pending" {...connection} />
      ))}
    </ContentBox>
  ) : null;
};

export default ConnectionPending;
