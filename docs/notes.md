So far, progress is:

- I have been trying to get the following working:
  - Building a React app from scratch using the Privy SDK from https://docs.privy.io/guide/react/quickstart
    - As soon as I add the Privy SDK to the dependencies I get errors fromm a library called Zustand
    - Had to add the following dependency: npm install use-sync-external-store

  - Using the Privy OneBalance Integration example given at https://github.com/OneBalance-io/integration-examples but it won't create my OneBalance account for me 

  - Using the Privy OneBalance Integration example given at https://github.com/OneBalance-io/integration-examples but it won't create my OneBalance account for me, it just returns an error all the time.
  I figured out that this is because of some CORS weirdness. 

  - The NextJS app example is found here: https://github.com/privy-io/create-next-app but I don't really know NextJS. 
    However, I can use the data it returns to figure out what comes next. 

I can use Postman to verify that the requests work for the workflow I want to do. 

Using URLs and endpoints from here: 

https://be.onebalance.io/swagger/#/

I can request a swap quote but I need to fund an account. It's unclear at this point where testnet is, how I go about funding an account and if there is some sort of faucet. 

