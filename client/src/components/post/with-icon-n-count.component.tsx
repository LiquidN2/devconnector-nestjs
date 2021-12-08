import React from 'react';
import { StyledComponent } from 'styled-components';

import { Button, Count } from './with-icon-n-count.styles';

interface ButtonProps {
  active: boolean;
  count: number;
}

export const withIconAndCount = (
  IconElement: StyledComponent<any, any>,
  withCount: boolean,
): React.FC<ButtonProps> => {
  return ({ active, count }) => (
    <Button>
      <IconElement style={{ fill: active ? 'var(--color-primary)' : '' }} />

      {withCount && (
        <Count style={{ color: active ? 'var(--color-primary)' : '' }}>
          {count}
        </Count>
      )}
    </Button>
  );
};
