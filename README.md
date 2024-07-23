## Technical Assessment

Your task is to create a mini-website to collect and display real-time price data:

### Backend:

- [x] Poll real-time data every few seconds for 5 stocks or crypto (ex. GOOG, BTC) from an API of your choice
- [x] There are multiple free APIs for eg. LiveCoinWatch, CoinGecko
- [x] Store that data in a mongoDB database

### Frontend:

- [x] Fetch the most recent 20 real-time data entries from the mongoDB database for a particular stock or crypto and display that in a table.
- [x] The table should be dynamic and should be updating its values in real-time according to new data.
- [x] Include a button to a modal/popup that allows you to change the stock or crypto.

### Note:
- Using Next.js (or Express), Typescript, and Redux is mandatory. 
- For Redux, put all state in localStorage, avoid use of useState(), and utilize actions and selectors when necessary.

## Specs used to complete assessment

- Turborepo: to orchestrate frontend and backend development
- Next Js 14: for frontend (folder: apps/web)
- Express js: for backendend (folder: apps/server)
- DB: Mongo DB
- DB ORM: Pisma

## Setup

after cloning project:
- setup env variable of DATABASE_URL to Mongo DB
- perform following commands in cmd:
```shel
npm install
npm run build
npm run dev
```

- Backend running on `http://localhost:3001`
- Frontend running on `http://localhost:3000`
