import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

// Render the root component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
