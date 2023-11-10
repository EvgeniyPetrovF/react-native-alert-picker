import { Platform } from 'react-native';

const AlertPicker = require('./NativeAlertPicker').default;

type ListItem = string;

export function openAlert(
  title: string,
  choices: Array<ListItem>,
  onSubmit: (selectedItem: ListItem) => void
): void {
  if (Platform.OS === 'android') {
    AlertPicker.openAlert(title, choices, onSubmit);
  }
}
