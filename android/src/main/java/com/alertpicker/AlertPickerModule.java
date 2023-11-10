package com.alertpicker;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.widget.ListView;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AlertPickerModule.NAME)
public class AlertPickerModule extends NativeAlertPickerSpec {
  public static final String NAME = "AlertPicker";

  public AlertPickerModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @Override
  @ReactMethod
  public void openAlert(String title, ReadableArray choices, Callback onSubmit) {
    String[] itemsArray = new String[choices.size()];

    for (int i = 0; i < choices.size(); i++) {
      itemsArray[i] = choices.getString(i);
    }

    AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
    builder
      .setTitle(title)
      .setSingleChoiceItems(itemsArray, 0, (dialog, which) -> {
      })
      .setPositiveButton("OK", (dialog, which) -> {
        ListView lw = ((AlertDialog)dialog).getListView();
        Object checkedItem = lw.getAdapter().getItem(lw.getCheckedItemPosition());
        onSubmit.invoke(checkedItem.toString());
      })
      .setNegativeButton("CANCEL", (dialog, which) -> {
      });

    AlertDialog dialog = builder.create();
    dialog.show();
  }
}
