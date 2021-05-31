package com.awesomeproject;

import android.app.ActivityManager;
import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.io.File;
import java.util.Map;
import java.util.HashMap;

public class CalendarModule extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;

    CalendarModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule","Creating event called with name: "+name+" and location: "+ location);
    }


    @ReactMethod
    public void getDeviceMemoryInformation(Callback callback){
        try {
            double totalInternalMemory = this.getInternalTotalMemory();
            double freeInternalMemory = this.freeInternalMemory();
            long deviceRam = this.getDeviceRamSize();
            long deviceFreeRam = this.getDeviceFreeRam();
            boolean hasSDCard = this.hasSDCard();

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("total_internal_storage", "" + totalInternalMemory);
            writableMap.putString("free_internal_storage", "" + freeInternalMemory);
            writableMap.putString("total_ram", "" + deviceRam);
            writableMap.putString("free_ram", "" + deviceFreeRam);
            writableMap.putBoolean("has_sdcard", hasSDCard);
            callback.invoke(null, writableMap);
        }catch(Exception e){
            callback.invoke(true,e.toString());
        }
    }

    private long getInternalTotalMemory(){
        double totalSize = new File(getReactApplicationContext().getFilesDir().getAbsoluteFile().toString()).getTotalSpace();
        long totMb = (long)totalSize / (1024 * 1024);
        return totMb;
    }

    private long freeInternalMemory(){
        double availableSize = new File(getReactApplicationContext().getFilesDir().getAbsoluteFile().toString()).getFreeSpace();
        long freeMb = (long)availableSize/ (1024 * 1024);
        return freeMb;
    }
    private boolean hasSDCard (){
        return this.reactContext.getExternalFilesDirs(null).length >= 2;

    }

    private long getDeviceRamSize(){
        ActivityManager activityManager = (ActivityManager) this.reactContext.getSystemService(Context.ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();
        activityManager.getMemoryInfo(memoryInfo);
        long totalMemory = (memoryInfo.totalMem/(1024*1024));
        return totalMemory;

    }

    private long getDeviceFreeRam(){
        ActivityManager activityManager = (ActivityManager) this.reactContext.getSystemService(Context.ACTIVITY_SERVICE);
        ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();
        activityManager.getMemoryInfo(memoryInfo);
        long available = (memoryInfo.availMem/(1024*1024));
        return available;
    }

}
