import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Sentry.init({
//   dsn: 'https://a76924e51a3940e399841d3c9895b1e1@o1079673.ingest.sentry.io/6124408',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0
// });

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
