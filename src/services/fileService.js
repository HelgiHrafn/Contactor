import * as FileSystem from 'expo-file-system'
const imageDirectory = `${FileSystem.documentDirectory}images`
// const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb, errorHandler) => {
    try {
        return cb()
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err)
        }
        console.error(err)
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(imageDirectory)
}

// copyImage to the new file location
export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }))
}

// export const addContact = async contactLocation => {
//     const folderSplit = contactLocation.split('/');
//     const fileName = folderSplit[folderSplit.length - 1];
//     await onException(() => copyFile(contactLocation, `${contactDirectory}/${fileName}`));

//         // loadImage returns the image as base64
//     return {
//         name: fileName,
//         type: 'contact',
//         file: await loadContact(fileName)
//         };

// }

export const addImage = async imageLocation => {
    const folderSplit = imageLocation.split('/')
    const fileName = folderSplit[folderSplit.length - 1]
    console.log('filename', fileName)
    await onException(() => copyFile(imageLocation, `${imageDirectory}/${fileName}`))

    // loadImage returns the image as base64
    return {
        name: fileName,
        type: 'image',
        file: await loadImage(fileName)
    }
}

// export const remove = async name => {
//     return await onException(() => FileSystem.deleteAsync(`${imageDirectory}/${name}`, { idempotent: true }));
// }

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }))
}

// export const loadContact = async fileName => {
//     return await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
//         encoding: FileSystem.EncodingType.Base64
//     }));
// }

// const setupDirectory = async () => {
//     const dir = await FileSystem.getInfoAsync(imageDirectory);
//     if (!dir.exists) {
//         await FileSystem.makeDirectoryAsync(imageDirectory);
//     }
// }

// export const getAllImages = async () => {
//     // Check if directory exists
//     await setupDirectory();

//     const result = await onException(() => FileSystem.readDirectoryAsync(imageDirectory));
//     return Promise.all(result.map(async fileName => {
//         return {
//             name: fileName,
//             type: 'image',
//             file: await loadImage(fileName)
//         };
//     }));
// }
