import { ReactNode } from 'react';
import Layout from 'resources/js/Shared/Layout';
import styles from './index.module.scss';
console.log(styles, 222)
const Index = () => {
  return (
    <div>
      <h1 className={styles['test2']}>Reports</h1>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
