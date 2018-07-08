# antonybudianto-web

[![Build Status](https://travis-ci.org/antonybudianto/antonybudianto-web.svg?branch=master)](https://travis-ci.org/antonybudianto/antonybudianto-web)

Personal website repository. This project is bootstraped using [Create React App](https://github.com/facebookincubator/create-react-app), and SSR using https://github.com/antonybudianto/cra-universal

### Deploy step

```
yarn crau:build
yarn copy

cd functions
yarn

cd ..
firebase use <default/staging>
yarn deploy --only=hosting,functions:app
```


### Google bot preview
![test](https://user-images.githubusercontent.com/7658554/42420820-fb63d7fc-82f5-11e8-8415-4c988c43cb8c.png)
