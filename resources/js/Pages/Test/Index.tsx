import React, { ReactNode } from 'react';
import Layout from 'resources/js/Shared/Layout';

const Index = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Reports</h1>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
