import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/header.component';

const DefaultLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <div>Profile box</div>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
