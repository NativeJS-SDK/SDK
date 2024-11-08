const nativejs = {
    permissions: {
        CAMERA: "CAMERA",
        LOCATION: "LOCATION"
    },

    permission(permissionType, callback) {
        browser.runtime.sendNativeMessage("nativejs", {
            type: "REQUEST_PERMISSION",
            permission: permissionType
        }).then(response => {
            callback(response === "GRANTED");
        }).catch(error => {
            console.error("[NATIVE-JS] Error requesting permission:", error);
            callback(false);
        });
    }
};
