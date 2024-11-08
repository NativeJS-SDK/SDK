const nativejs = {
    permissions: {
        CAMERA: 'CAMERA',
        LOCATION: 'LOCATION',
      // other permissions are coming soon
    },

    permission(permissionType, callback) {
        // Requests the permission using the Native Code
        browser.runtime.sendMessage("nativeJs", {
            name: "requestPermission",
            data: permissionType
        }).then(response => {
            callback(response === "GRANTED");
        }).catch(error => {
            console.error("[NATIVE-JS] Permission request error:", error);
            callback(false);
        });
    }
};
