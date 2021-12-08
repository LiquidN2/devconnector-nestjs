import React, { MouseEventHandler } from 'react';
import { StyledComponent } from 'styled-components';

import { Button, Count } from './with-icon-n-count.styles';

interface ButtonProps {
  active: boolean;
  count: number;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const withIconAndCount = (
  IconElement: StyledComponent<any, any>,
  withCount: boolean,
): React.FC<ButtonProps> => {
  return ({ active, count, onClick }) => (
    <Button onClick={onClick}>
      <IconElement style={{ fill: active ? 'var(--color-primary)' : '' }} />

      {withCount && (
        <Count style={{ color: active ? 'var(--color-primary)' : '' }}>
          {count}
        </Count>
      )}
    </Button>
  );
};
