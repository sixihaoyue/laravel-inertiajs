import { ReactNode } from 'react';
import Layout from 'resources/js/Shared/Layout';
import { Link } from '@inertiajs/inertia-react';
import styles from './index.module.scss';

const Index = () => {
  return (
    <div>
      <h1 className={styles['test2']}>Reports2</h1>
      <Link replace href="/500">
        500 error
      </Link>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
