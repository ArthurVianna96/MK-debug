# Debug MK Connect App 📱

## 🔦 About

This monorepo is made for an Expo + Next.js app using [Expo Router](https://expo.github.io/router/) to enable a file-system based routing in native apps.

## 📦 Included packages

- `solito` for cross-platform navigation
- `gluestack-ui` for theming/design
- Expo SDK 50
- Next.js App Router 13.4
- Expo Router v3

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
    - `app` you'll be creating files inside of `apps/expo/app` to use file system routing on iOS and Android.
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `screens`
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app (for this project the web version has nothing)

- Install dependencies: `yarn`

- Expo local dev:
  We are running the actual project on a development build, to do so:
  - `cd apps/expo`
    for the first time running on the emulator/simulator you need to install the development build:
  - `yarn android` or `cd ios && pod install && cd .. && yarn ios`
    on subsequent runs you can run:
  - `yarn start` and select which platform you would like to run
