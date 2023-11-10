
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAlertPickerSpec.h"

@interface AlertPicker : NSObject <NativeAlertPickerSpec>
#else
#import <React/RCTBridgeModule.h>

@interface AlertPicker : NSObject <RCTBridgeModule>
#endif

@end
