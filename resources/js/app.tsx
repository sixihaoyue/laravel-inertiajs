import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Inertia } from '@inertiajs/inertia'

Inertia.on('error', (errors) => {
  console.log(errors)
})
console.log(22);
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

render(
  <InertiaApp
    initialPage={init}
    resolveComponent={name => {
        return import(`./Pages/${name}`).then(module => module.default)
      }
    }
  />,
  app
);
