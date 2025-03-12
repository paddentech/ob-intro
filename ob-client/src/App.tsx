import { usePrivy } from "@privy-io/react-auth";
import './App.css';
import { Header } from "./features/ui/header";
import { Login } from "./features/ui/login";
import * as Tabs from "@radix-ui/react-tabs";
import { Authenticated } from "./features/authenticated";
import { OneBalanceAccount } from "./features/onebalance-account/onebalance-account";
import { OneBalanceAccountRequired } from "./features/onebalance-account/onebalance-account-required";
import { TabTrigger } from "./features/tabs/tab";
import { Balances } from "./features/balances/balances-ui";
import { Swap } from "./features/swap/swap-ui";

function App() {
  const { authenticated, login, logout, user } = usePrivy();
  return (
    <div className="App">
      <Header logout={logout} user={user || undefined} authenticated={authenticated} />
      <main className="max-w-screen-xl mx-auto p-4">
        <Authenticated unauthenticated={<Login login={login} />}>

          <div className="mt-4">
            <OneBalanceAccount />
          </div>
          <OneBalanceAccountRequired>
              <Tabs.Root defaultValue="balances" className="mt-8">
                <Tabs.List>
                  <TabTrigger value="balances">Balances</TabTrigger>
                  <TabTrigger value="swap">Swap</TabTrigger>
                </Tabs.List>
                <div className="mt-4">
                  <Tabs.Content value="balances">
                    <Balances />
                  </Tabs.Content>
                  <Tabs.Content value="swap">
                    <Swap /> 
                  </Tabs.Content>
                </div>
              </Tabs.Root>
            </OneBalanceAccountRequired>
        </Authenticated>
      </main>
    </div>
  );
}

export default App;
