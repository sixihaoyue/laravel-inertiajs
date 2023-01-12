import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Inertia } from '@inertiajs/inertia'
import * as stores from './stores';
import { Provider as StoreProvider } from 'mobx-react';

Inertia.on('error', (errors) => {
  console.log(errors)
})

Inertia.on('invalid', (event) => {
  console.log(`An invalid Inertia response was received.`)
  console.log(event)
})

InertiaProgress.init({
  color: '#ED8936',
  showSpinner: true
});

const app  = document.getElementById("app") as HTMLElement;
const init = JSON.parse(app.dataset.page as string);
const root = createRoot(app);

root.render(
  <StoreProvider {...stores}>
    <InertiaApp
      initialComponent={null}
      initialPage={init}
      resolveComponent={name => {
          return import(`./pages/${name}`).then(module => module.default)
        }
      }
    />
  </StoreProvider>
);
