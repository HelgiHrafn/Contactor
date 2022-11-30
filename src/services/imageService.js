import * as ImagePicker from 'expo-image-picker'

// Permission constant for accessing the camera roll
const CAMERA_ROLL = 'CAMERA_ROLL'
// Persmission constant for accessing the camera to take a photo
const CAMERA = 'CAMERA'

const cameraOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9]
}

const getPermission = async permissionTypes => {
    if (permissionTypes.indexOf(CAMERA) >= 0) {
        await ImagePicker.requestCameraPermissionsAsync()
    }
    if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
        await ImagePicker.requestMediaLibraryPermissionsAsync()
    }
}

export const selectFromCameraRoll = async () => {
    await getPermission([CAMERA_ROLL])
    const result = await ImagePicker.launchImageLibraryAsync(cameraOptions)
    if (result.canceled) { return '' }
    return result
}

export const takePhoto = async () => {
    await getPermission([CAMERA, CAMERA_ROLL])
    const result = await ImagePicker.launchCameraAsync(cameraOptions)
    if (result.canceled) { return '' }
    return result;
}
