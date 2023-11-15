import { ActionSheetIOS, Platform } from 'react-native';

const AlertPicker = require('./NativeAlertPicker').default;

type ListItem = string;

export function openAlert(
  title: string,
  choices: Array<ListItem>,
  onSubmit: (selectedItem: ListItem) => void
): void {
  if (Platform.OS === 'android') {
    AlertPicker.openAlert(title, choices, onSubmit);
  } else if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title,
        options: ['Cancel', ...choices],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        onSubmit(choices[buttonIndex - 1] ?? '');
      }
    );
  }
}
