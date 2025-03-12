npm install && npm run build 

cp .env.example .env.local
cp .env.example .env.test.local
cat .env.test.example >> .env.test.local