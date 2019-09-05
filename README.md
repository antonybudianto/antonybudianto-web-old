# antonybudianto-web

[![Build Status](https://travis-ci.org/antonybudianto/antonybudianto-web.svg?branch=master)](https://travis-ci.org/antonybudianto/antonybudianto-web)

Personal website repository. This project is bootstraped using [Create React App](https://github.com/facebookincubator/create-react-app), and SSR using https://github.com/antonybudianto/cra-universal

### Deploy step

```
yarn crau:build

cd functions
yarn

cd ..
firebase use <default/staging>
yarn deploy --only=hosting,functions:app
```

### Simulate local
$ firebase emulators:start --only functions

### Google bot preview

![abc](https://user-images.githubusercontent.com/7658554/50041624-64e92a80-008a-11e9-82c2-c920d040c9a2.png)
