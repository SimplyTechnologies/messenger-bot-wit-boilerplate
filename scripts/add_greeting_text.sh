#!/bin/bash
PAGE_ACCESS_TOKEN=$(node -e "console.log(require('./config').fbPageToken);")

curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"greeting",
  "greeting":{
    "text":"Welcome to my awesome bot!"
  }
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=$PAGE_ACCESS_TOKEN"    
