import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
  return (
    <div>
      <header>
        <div>Logo</div>
        <div>Search</div>
        <div>User Nav</div>
      </header>
      <nav>Main Nav</nav>
      <main>
        <div>Profile box</div>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
