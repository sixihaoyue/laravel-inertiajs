import { ReactNode } from 'react';
import Layout from 'resources/js/layouts/index';
import { Link } from '@inertiajs/inertia-react';
import styles from './index.module.scss';
import { session } from 'resources/js/stores';

const Index = () => {

  return (
    <div>
      <h1 className={styles['test2']}>User info</h1>
      <p>{ JSON.stringify(session.user) }</p>
      <Link replace href="/cart/show">
        Cart List
      </Link>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
