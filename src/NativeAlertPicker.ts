import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  openAlert(
    title: string,
    choices: Array<string>,
    onSubmit: (selectedItem: string) => void
  ): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AlertPicker');
