import { ReactNode } from 'react';
import Layout from 'resources/js/layouts/index';
import { Link } from '@inertiajs/inertia-react';
import styles from './index.module.scss';

const Index = () => {
  return (
    <div>
      <h1 className={styles['test2']}>Reports2</h1>
      <Link replace href="/test">
        Reports1
      </Link>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
