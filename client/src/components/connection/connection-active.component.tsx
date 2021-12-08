import React from 'react';

import ConnectionBox from './connection-box.component';
import ConnectionItem from './connection-item.component';

const ConnectionActive: React.FC = () => {
  return (
    <ConnectionBox heading="Connections" subHeading="250 connections">
      <ConnectionItem />
    </ConnectionBox>
  );
};

export default ConnectionActive;
