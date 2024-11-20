# SuperMoney App 📱

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

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev:
  - Run `yarn web`
    - runs `yarn dev`
- Expo local dev:
  - Expo Go:
    - Run `yarn native`
    <!-- - Development build:
    - `cd apps/expo`
    - Then, either `expo run:ios`, or `expo run:android`
    - After building the dev client, from the root of the monorepo...
      - `yarn native` (This runs `expo start --dev-client`) -->

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs.
