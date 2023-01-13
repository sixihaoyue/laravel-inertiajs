import { ReactNode } from 'react';
import Layout from 'resources/js/layouts/index';
import { Link, usePage } from '@inertiajs/inertia-react';
import { session } from 'resources/js/stores';
import { useForm } from '@inertiajs/inertia-react'

const CartShowPage = ({  }) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    id: '',
  });
  const submit = (e: any) => {
    e.preventDefault()
    post('/cart/add', {
      onSuccess: () => reset('id'),
    });
  }

  const cartList = usePage().props.cartList as string[];
  // test ssr mobx
  session.setCart(cartList);
  session.user?.setCart(cartList);
  return (
    <div>
      <h1>Cart List</h1>
      <p>{JSON.stringify(session.carts)}</p>
      <p>{JSON.stringify(cartList)}</p>
      <Link href="/user/show">
        UserInfo
      </Link>

      <Link href="/cart/clear" className='ml-20'>
        ClearCarts
      </Link>

      <form onSubmit={submit}>
        <input type="text" value={data.id} onChange={e => setData('id', e.target.value)} />
        {errors.id && <div>{errors.id}</div>}
        <button type="submit" disabled={processing}>Add to Cart</button>
      </form>
    </div>
  );
};

CartShowPage.layout = (page: ReactNode) => <Layout title="Reports" children={page} />;
export default CartShowPage;
