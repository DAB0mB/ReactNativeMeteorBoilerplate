# React Native Meteor Boilerplate

This is a React Native app which uses Meteor as its backend. It should be used as a sample boilerplate for starting a new app of your own.

### Quick Start

Install all the dependencies:

    $ npm install

Bundle Meteor client:

    $ npm run meteor-bundle-client

Start the API server:

    $ npm run api

Start the packager:

    $ npm start

Run the app:

    $ react-native run-android

Or in case you're using iOS:

    $ react-native run-ios

> **Note:** The API URL is configured to `http://localhost:3000` by default. If you would like to change that, be sure to visit the official `README.md` file of [Meteor Client Bundler](https://github.com/Urigo/meteor-client-bundler) for detailed instructions.


### Facebook, Twitter and Google logins
You have to set custom URI scheme prefix in `app.json`, and `main.js` on Meteor backend. Then, you can use `Meteor.loginWith<service>` of `accounts-<service>` packages without any extra `react-native` or `expo` plugins.

### License

MIT
