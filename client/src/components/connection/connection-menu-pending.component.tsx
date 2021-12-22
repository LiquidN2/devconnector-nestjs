import React, { MouseEventHandler } from 'react';

import { ButtonPrimary, Button } from '../UI/button.component';
import { MenuContainer } from './connection-menu-pending.styles';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthToken } from '../../redux/auth';
import {
  useUpdateConnectionStatusMutation,
  ConnectionType,
} from '../../redux/connection';

interface ConnectionMenuPendingProps {
  connectionId: string;
}

const ConnectionMenuPending: React.FC<ConnectionMenuPendingProps> = ({
  connectionId,
}) => {
  const authToken = useAppSelector(selectAuthToken);
  const [updateConnection] = useUpdateConnectionStatusMutation();

  const handleAcceptConnection: MouseEventHandler<HTMLElement> = () => {
    updateConnection({
      token: authToken,
      connectionId,
      body: { status: ConnectionType.Active },
    });
  };

  const handleDeclineConnection: MouseEventHandler<HTMLElement> = () => {
    updateConnection({
      token: authToken,
      connectionId,
      body: { status: ConnectionType.Rejected },
    });
  };

  return (
    <MenuContainer>
      <ButtonPrimary onClick={handleAcceptConnection}>Accept</ButtonPrimary>
      <Button onClick={handleDeclineConnection}>Decline</Button>
    </MenuContainer>
  );
};

export default ConnectionMenuPending;
