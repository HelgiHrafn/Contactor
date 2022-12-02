import * as FileSystem from 'expo-file-system'


const imageDirectory = `${FileSystem.documentDirectory}images/`

const contactDirectory = `${FileSystem.documentDirectory}contacts/`

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

export const addImage = async imageLocation => {
    await setupImageDirectory()
    try {
        const folderSplit = imageLocation.split('/')
        const fileName = folderSplit[folderSplit.length - 1]
        await onException(() => copyFile(imageLocation, `${imageDirectory}${fileName}`))
        return { name: fileName, type: 'image', file: `${imageDirectory}${fileName}` }
    } catch (ex) {
        console.log('erx: ', ex)
    }
}
export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }))
}

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${imageDirectory}${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }))
}
export const saveJson = async (data) => {
    await setupContactDirectory()
    const filename = 'contact-' + await generateUUID()
    data.id = filename;
    const jsonString = JSON.stringify(data)
    const fileUri = contactDirectory + filename + '.json'
    await FileSystem.writeAsStringAsync(fileUri, jsonString)
}

export const editJson = async (data) => {
    await deletJson(data)
    const filenameNew = 'contact-' + await generateUUID()
    data.id = filenameNew
    const jsonString = JSON.stringify(data)
    const fileUri = contactDirectory + filenameNew + '.json'
    await FileSystem.writeAsStringAsync(fileUri, jsonString)    
}

const deletJson = async (data) => {
    const filename = data.id
    try {
        const fileUri = contactDirectory + filename + '.json'
        await FileSystem.deleteAsync(fileUri)
    } catch (ex) {
        console.log('err', ex)   
    }
}

const generateUUID = async () => {
    //const directory = (await FileSystem.readDirectoryAsync(contactDirectory))
    const randomNumber = Math.floor(Math.random() * 1000000001);
    return randomNumber.toString()
}

const setupContactDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory)
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory)
    }
}

export const getAllContacts = async () => {
    await setupContactDirectory()
    const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory))
    
    return Promise.all(result.map(async fileName => {
            return JSON.parse(await FileSystem.readAsStringAsync(contactDirectory + fileName))     
    }))
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(contactDirectory);
    await FileSystem.deleteAsync(imageDirectory);
}

const setupImageDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(imageDirectory)
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(imageDirectory)
    }
}
