import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import {setContext} from '@apollo/client/link/context';
import './i18n';
import App from './App';
import {store} from './store';
import reportWebVitals from './reportWebVitals';

// require('dotenv').config();

// const httpLink = createHttpLink({
//   uri: process.env.REACT_APP_GRAPHQL_URL,
// });

// const authLink = setContext((_, {headers}) => ({
//   headers: {
//     ...headers,
//     // authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
//   },
// }));

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
      <App />
      {/* </ApolloProvider> */}
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
