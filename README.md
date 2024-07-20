## Technical Assessment

Your task is to create a mini-website to collect and display real-time price data:

### Backend:

[ ] Poll real-time data every few seconds for 5 stocks or crypto (ex. GOOG, BTC) from an API of your choice
[ ] There are multiple free APIs for eg. LiveCoinWatch, CoinGecko
[ ] Store that data in a mongoDB database

### Frontend:

[ ] Fetch the most recent 20 real-time data entries from the mongoDB database for a particular stock or crypto and display that in a table.
[ ] The table should be dynamic and should be updating its values in real-time according to new data.
[ ] Include a button to a modal/popup that allows you to change the stock or crypto.

### Note:
- Using Next.js (or Express), Typescript, and Redux is mandatory. 
- For Redux, put all state in localStorage, avoid use of useState(), and utilize actions and selectors when necessary.