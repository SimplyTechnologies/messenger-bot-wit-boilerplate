# Facebook Messenger Chatbot Boilerplate
Boilerplate project for developing Facebook Messenger Bot powered by Wit.ai, MongoDB and Redis as a session store.
This boilerplate will allow you to bootstrap your chatbot within 8 minutes, all you need is wit.ai application setup, Facebook page, Facebook app and running MongoDB and Redis.


## External dependencies 

### Wit.ai

The AI engine used in this boilerplate is wit.ai, please make sure to create a new app in the [wit.ai](https://wit.ai/) dashboard. 


### MongoDB 

This boilerplate is using MongoDB for storing user's data and for tracking their last activity with the bot
Please install MongoDB v3 or greater and setup connection in the `config/config.js` 

By default the in the development environment `chatbotdb` database will be created 

### Session store using Redis

Redis server is required for managing sessions and keeping the context with each user.
Please install Redis and setup connection in the `config/config.js`


## Setup

`npm install`

## Configuration

Set environment variables or write values directly in the `config/config.js`

`FB_PAGE_TOKEN` - Access token generated for the Facebook application to allow making Graph API requests to the page

`WIT_TOKEN` - WIT server side token

`FB_WEBHOOK_VERIFY_TOKEN` - a verify token that should be used for Webhooks setup, this is something you need to generate by yourself

`FB_PAGE_ID` - ID of the Facebook page that will be used as a bot.


## Run

In order to run and test chatbot it is required to have server running with secured connection. For that you can use **ngrok**

###### install ngrok and run

`./ngrok http 3000`

###### run the server
`npm start`

to enable debug mode 
`DEBUG=* npm start` or `DEBUG=cbp* npm start` for app level log messages only

###### update Facebook application's webhook 
`https://xxxxxxxx.ngrok.io/bot`
enter the `FB_VERIFY_TOKEN` value and submit



## Project structure
```
  actions/ 
    - define custom wit.ai actions here, the file name should be the name of the action, all actions from this folder are automatically registered as wit.ai actions.
    
  config/
    - configuration files for access keys, tokens, connection strings
    
  handlers/
    - messenger event handlers for text messages, attachments, postbacks and quick replies
    
  init/
    - init scripts for mongodb and redis
    
  schemas/ 
    - mongodb/mongoose schemas 
    
  scripts/ 
    - shell scripts for messenger greeting text, persistant menu and getting started button setup
    
  services/ 
    - custom services
  
  app.js
    - application entry point

  graphAPI.js
    - Facebook Graph API helper
    
  platformHelpers.js
    - Helpers for generating message templates, e.g send location, quick replies and others
    
  routes.js
    - express routes setup and message handler delegation

  sessionStore.js
    - Redis based session store
    
  wit.js
    - wit.ai setup with actions loading
    
  witHelpers.js
    - helpers for extracting entities from wit.ai response
    
  
```

## The Roadmap

- [x] Redis session store
- [x] Automatic actions binding
- [x] User info tracking in the database
- [x] Saving last and previous geo locations shared by user
- [x] Demo of send location, quick replies
- [x] Shell scripts for adding greeting message, persistent menu and getting started button
- [ ] Demo of generic template
- [ ] Demo of list template
- [ ] Unit tests

---

[ChatBotKitchen](https://www.chatbotkitchen.com) project

*made with love ❤️ in Armenia by [Simply Technologies](http://www.simplytechnologies.net)*
