import { ReactNode } from 'react';
import Layout from 'resources/js/layouts/index';
import { Link } from '@inertiajs/inertia-react';
import styles from './index.module.scss';
import { session } from 'resources/js/stores';

const Index = () => {
  return (
    <div>
      <h1 className={styles['test2']}>Reports2</h1>
      <button onClick={(e) => {
        e.preventDefault();
        console.log(session.user) ;
      }}>
        检查
      </button>
      <Link replace href="/test">
        Reports1
      </Link>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
