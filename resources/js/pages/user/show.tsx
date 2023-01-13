import { ReactNode } from 'react';
import Layout from 'resources/js/layouts/index';
import { Link, usePage } from '@inertiajs/inertia-react';
import styles from './index.module.scss';
import { session } from 'resources/js/stores';

const Index = () => {
  const test = usePage().props.test as string;

  return (
    <div>
      <h1 className={styles['test2']}>User info</h1>
      <p>{ test }</p>
      <p>{ JSON.stringify(session.user) }</p>
      <Link href="/cart/show">
        Cart List
      </Link>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
