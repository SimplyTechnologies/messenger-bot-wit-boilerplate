#!/bin/bash
PAGE_ACCESS_TOKEN=$(node -e "console.log(require('./config').fbPageToken);")

curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type" : "call_to_actions",
  "thread_state" : "existing_thread",
  "call_to_actions":[
    {
      "type":"postback",
      "title":"Demo features",
      "payload":"showSamples"
    },
    {
      "type":"postback",
      "title":"Menu Item 2",
      "payload":"item2payload"
    },
    {
      type: "web_url",
      url: "http://gph.is/XJSmL6",
      title: "Some url"
    }
  ]
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=$PAGE_ACCESS_TOKEN"
