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

// copyImage to the new file location
const copyFile = async (file, newLocation) => {
    return await FileSystem.copyAsync({
        from: file,
        to: newLocation
    })

};

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

export const addImage = async image => {
    try {
        const imageLocation = image.assets;
        const asset = imageLocation[0].uri;
        console.log("whats asset",asset);
        const folderSplit = asset.split('/');
        const fileName = folderSplit[folderSplit.length - 1];
        console.log('image directory', `${imageDirectory}${fileName}`)
        console.log('File name', fileName)
        // const saveDir = FileSystem.documentDirectory + "/" + fileName;
        return { fileName, base64: image.base64 };

        // console.log("filenamemain: ", filenamemain)
        // let fileres = await FileSystem.writeAsStringAsync(filenamemain, image.base64, {
        //     encoding: FileSystem.EncodingType.Base64,
        // });

        // console.log("fileres: ", fileres);

        // const mediaResult = await MediaLibrary.saveToLibraryAsync(filenamemain);
        // console.log("media : ", mediaResult)

        // get image:
        // file:///var/mobile/Containers/Data/Application/609831F9-BEEA-45D1-A2BF-CBFCE5F82765/Documents/ExponentExperienceData/%2540anonymous%252FContactor-900428b0-876f-47b8-8e76-21-876f-47b8-8e76-21e6114195d4//C1F6961B-8F49-4180-9B0B-DBB7F23FFCB7.jpg
        // console.log("going to read dir: ", FileSystem.documentDirectory)
        // let dirHere = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
        // return 
        // console.log("dirHere: ", dirHere)

        // console.log("mediaResult: : ", mediaResult)
        // await copyFile(image.base64, `${imageDirectory}/${fileName}`);
    
        // loadImage returns the image as base64
        // return {
        //     name: fileName,
        //     type: 'image',
        //     file: await loadImage(fileName)
        // };

    } catch(ex) {
        console.log("erx: ", ex);
    }
};

export const saveJson = async(filename, data) => {
    await setupContactDirectory()
    const jsonString = JSON.stringify(data)
    console.log("whats jsonstring", jsonString)
    console.log("whats filename", filename)
    let fileUri = contactDirectory + filename + '.json'//await FileSystem.createFileAsync(imageDirectory, filename, "application/json");
    await FileSystem.writeAsStringAsync(fileUri, jsonString)

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

const loadImage = async fileName => {
    return await FileSystem.readAsStringAsync(`${imageDirectory}${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    })
}

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
