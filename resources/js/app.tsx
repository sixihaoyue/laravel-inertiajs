import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init({
  color: '#ED8936',
  showSpinner: true
});

const app  = document.getElementById("app") as HTMLElement;
const init = JSON.parse(app.dataset.page as string);

render(
  <InertiaApp
    initialPage={init}
    resolveComponent={name => {
        console.log(import(`./Pages/${name}`));
        return import(`./Pages/${name}`).then(module => module.default)
      }
    }
  />,
  app
);
