# Expo Starter

Mobile first development starter template with Expo, ReactNative, TypeScript and NativeWind.

## Features

- NativeWind UI Components (WIP)
- Modular Styles (WIP)

### Roadmap

- App code splitting for mobile and web experiences
  - Monorepo setup for web and mobile apps (if needed)
  - Platform specific style patterns with tailwind utils

## Code

### Dependencies

- ⚡ [Expo](https://expo.dev) for mobile development
- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [NativeWind](https://www.nativewind.dev), Tailwind CSS for React Native
- 📁 File-based routing with Expo Router
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Detox
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

### Requirements

- Node.js 18+ and npm
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Getting Started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/dvzrd/expo-starter.git expo-starter
cd expo-starter
npm i
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev:ios
# Or
npm run dev:android
```

This will open the app in the iOS simulator or Android emulator.

### Fetching Upstream Changes

Whenever you want to fetch and merge changes from the original boilerplate repository, you can do so with the following commands:

```shell
git fetch upstream
git merge upstream/master
```

### Testing

Testing is an important part of the development process and often the neglected one. This starter code comes up with Jest and React Testing Library for unit testing and Detox for E2E testing.

#### Unit Testing

To run the unit tests, run the following command:

```shell
npm run test
```

#### E2E Testing

To run the E2E tests, you first need to run the following command:

```shell
npm run e2e:prepare # Only need to run once
```

Then, you can run the following command to run the E2E tests:

```shell
npm run e2e:ios
# Or
npm run e2e:android
```

### File Structure

This is an opinionated structure based on commonly adopted patterns. I encourage you to organize your code to suit your project needs and dev style.

```shell
├── app/
│   ├── (proposals)
│   ├── settings
│   └── _layout.tsx
├── assets/
│   ├── fonts/
|   ├── icons/
│   └── images/
├── docs/
├── e2e/
│   └── tests/
└── src/
    ├── components/ # Reusable components (keep them simple or nest if necessary - ui, feature)
    ├── config/ # Config files (can also be named constants or consts)
    ├── hooks/ # React hooks
    ├── store/ # Store (for jotai or redux whatever state management you want)
    ├── styles/ # Stylesheets (for tailwind, vars, and other styles)
    ├── types/ # Global types
    └── utils/ # Utility functions (organize repeating patterns into modules - ui, feature)
```

### VSCode (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Kudos

- Expo Starter was initialized from [React Native Boilerplate](https://github.com/ixartz/React-Native-Boilerplate)
- Expo Router tabs layout ideas borrowed from [Stacktest](https://github.com/415brian/stacktest).
- Latest NativeWind config adopted from [Nativewind's Expo Router Example](https://github.com/marklawlor/nativewind/tree/main/examples/expo-router).
