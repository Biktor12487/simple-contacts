import React from 'react';

const MainLayout = ({ children }) => (
  <main>
    <div className="container">
      {children}
    </div>
  </main>
);
export default MainLayout;
