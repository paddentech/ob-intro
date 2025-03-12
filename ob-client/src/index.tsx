import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivyProvider } from "@privy-io/react-auth";
import { ReactQueryProvider } from "./features/react-query";
import './index.css';
import App from './App';
import { loadRuntimeConfig } from "./get-config";
loadRuntimeConfig().then((config) => {

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <PrivyProvider
        appId={config.VITE_PRIVY_APP_ID}
        config={{
          loginMethods: ["email", "wallet", 'google'],
          embeddedWallets: {
            // Create embedded wallets for users who don't have a wallet
            createOnLogin: "users-without-wallets",
          },
        }}
      >
        <ReactQueryProvider>
          <App />
        </ReactQueryProvider>
      </PrivyProvider>
    </React.StrictMode>
  );
});

