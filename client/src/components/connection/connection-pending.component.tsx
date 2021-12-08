import React from 'react';

import ConnectionBox from './connection-box.component';
import ConnectionItem from './connection-item.component';

const ConnectionPending: React.FC = () => {
  return (
    <ConnectionBox heading="Pending Connection Request" subHeading="1 request">
      <ConnectionItem />
    </ConnectionBox>
  );
};

export default ConnectionPending;
