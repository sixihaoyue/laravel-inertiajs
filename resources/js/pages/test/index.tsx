import { ReactNode } from 'react';
import Layout from 'resources/js/layouts/index';
import { Link } from '@inertiajs/inertia-react';
import styles from './index.module.scss';
import { session } from 'resources/js/stores';

const Index = () => {
  return (
    <div>
      <h1 className={styles['test2']}>Reports</h1>
      <button onClick={(e) => {
        e.preventDefault();
        session.login({
            id: 'id',
            user: {
            id: 'id',
            email: 'email',
            nickname: 'nickname',
            image: 'image',
            last_login_time: 'last_login_time',
            login_count: 'login_count',
            apps: 'apps',
          }
        })
      }}>
        登录
      </button>
      <Link replace href="/test2">
        Reports2
      </Link>
    </div>
  );
};

Index.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default Index;
