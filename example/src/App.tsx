import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { openAlert } from 'react-native-alert-picker';

export default function App() {
  const [selectedItem, setSelectedItem] = React.useState<string>();

  return (
    <View style={styles.container}>
      <Text>Selected Item: {selectedItem}</Text>
      <Button
        title="Open Alert"
        onPress={() => {
          openAlert(
            'Phone Ringtone',
            [
              'None',
              'Callisto',
              'Ganymede',
              'Luna',
              'Oberon',
              'Phobos',
              'Dione',
            ],
            (item) => {
              setSelectedItem(item);
            }
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
