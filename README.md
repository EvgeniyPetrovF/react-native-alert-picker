# react-native-alert-picker

List picker that uses native solutions

## Installation

# npm

```sh
npm install react-native-alert-picker
```

# yarn

```sh
yarn add react-native-alert-picker
```

## Usage

```js
import { openAlert } from 'react-native-alert-picker';

// ...

openAlert(
  'Phone Ringtone',
  ['None', 'Callisto', 'Ganymede', 'Luna', 'Oberon', 'Phobos', 'Dione'],
  (selectedItem) => {
    onSubmit(selectedItem);
  }
);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
