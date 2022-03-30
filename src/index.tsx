import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import AppProviders from 'providers/AppProviders';
import Root from './views/Root';
// AWS Amplify stack
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

// Sentry.init({
//   dsn: 'https://a76924e51a3940e399841d3c9895b1e1@o1079673.ingest.sentry.io/6124408',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0
// });

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
