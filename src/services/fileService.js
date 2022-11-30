import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';

const imageDirectory = `${FileSystem.documentDirectory}images/`;

const contactDirectory = `${FileSystem.documentDirectory}contacts/`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}
//  

// export const cleanDirectory = async () => {
//     await FileSystem.deleteAsync(imageDirectory)
// }


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
    setupImageDirectory()
    try {
        const folderSplit = imageLocation.split('/');
        const fileName = folderSplit[folderSplit.length - 1];
        await onException(() => copyFile(imageLocation, `${imageDirectory}${fileName}`))
        
        return { name: fileName, type: 'image', file: `${imageDirectory}${fileName}` };


    } catch(ex) {
        console.log("erx: ", ex);
    }
};
export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }));
}
export const saveJson = async(data) => {
    await setupContactDirectory()
    const filename = data.name + '1' //
    await generateUUID()
    const jsonString = JSON.stringify(data)
    console.log("whats filename", filename)
    let fileUri = contactDirectory + filename + '.json'//await FileSystem.createFileAsync(imageDirectory, filename, "application/json");
    await FileSystem.writeAsStringAsync(fileUri, jsonString)

}
const generateUUID = async () => {
    const directory = (await FileSystem.readDirectoryAsync(contactDirectory))
    console.log(directory.length)
}

export const saveImage = async (fileDirectory, base64) => {
    try {
        let fileres = await FileSystem.writeAsStringAsync(fileDirectory, base64, {
            encoding: FileSystem.EncodingType.Base64,
        });

        return {
            success: true,
            message: 'Image saved. '
        }
    } catch(ex) {
        return {
            success: false,
            message: 'Could not save image. '
        }
    }
}

// export const remove = async name => {
//     return await onException(() => FileSystem.deleteAsync(`${imageDirectory}/${name}`, { idempotent: true }));
// }


// export const loadContact = async fileName => {
//     return await onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
//         encoding: FileSystem.EncodingType.Base64
//     }));
// }

const setupContactDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }
}

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
export const getAllContacts = async () => {
    await setupContactDirectory()
    const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
    return Promise.all(result.map(async fileName => {
        return JSON.parse(await FileSystem.readAsStringAsync(contactDirectory + fileName))
    }));
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactDirectory);
}

const setupImageDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(imageDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(imageDirectory);
    }
}
