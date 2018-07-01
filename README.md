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
yarn deploy --only=hosting,functions
```
