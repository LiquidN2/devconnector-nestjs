import React from 'react';

import ContentBox from '../content-box/content-box.component';
import ConnectionItemPending from './connection-item-pending.component';

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
      {pendingConnections.map(
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
          <ConnectionItemPending
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
  ) : null;
};

export default ConnectionPending;
