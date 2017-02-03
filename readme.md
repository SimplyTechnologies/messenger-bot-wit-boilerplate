## Boilerplate project for developing Facebook Messenger Bot powered by Wit.ai, MongoDB and Redis as a session store

### Setup

`npm install`


Set environment variables or write values directly in the code

`FB_PAGE_TOKEN` - Access token generated for the Facebook application to allow making Graph API requests to the page

`WIT_TOKEN` - WIT server side token

`FB_WEBHOOK_VERIFY_TOKEN` - a verify token that should be used for Webhooks setup

`FB_PAGE_ID` - Facebook Page ID 


### Running in development mode

install ngrok and run
`./ngrok http 3000`

run the server
`npm start`

to enable debug mode run with
`DEBUG=* npm start`

update Facebook application's webhook 

`https://xxxxxxxx.ngrok.io/bot`

enter the `FB_VERIFY_TOKEN` value and submit




